import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '../../src/validate'
chai.use(sinonChai)


describe('validate.js', () => {
    it('validate存在.', () => {
        expect(Validator).to.exist
    })
    it('test required', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })
    it('test email number is 0', () => {
        let data = {
            email: 0
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('test email is ok', () => {
        let data = {
            email: '0@123'
        }
        let rules = [
            { key: 'email', pattern: 'email' }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('test email is not ok', () => {
        let data = {
            email: '0123'
        }
        let rules = [
            { key: 'email', pattern: 'email' }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不匹配')
    })
    it('test email require and pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', pattern: 'email', required: true }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        //报错两个
        //errors = {email:{pattern:'格式不匹配',required:'必填'}}
        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist
    })
    it('test email minLength and pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', pattern: 'email', minLength: 6 }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        //报错两个
        //errors = {email:{pattern:'格式不匹配',required:'必填'}}
        expect(errors.email.pattern).to.exist
        expect(errors.email.minLength).to.exist
    })
    it('test complex rule', () => {
        let data = {
            email: 'abcd'
        }
        let rules1 = [
            {key:'email',minLength:5,maxLength:10,hasNumber:true,hasMe:'wei'}
        ]
        let rules2 = [
            {key:'email',minLength:5,maxLength:10,hasNumber:true,hasMe:'wei'}
        ]
        //静态方法 所有实例都可以使用
        Validator.add('hasNumber',(value) => {
            if(!/\d/.test(value)){
                return '必须有数字'
            }
        })

        let validator1 = new Validator()
        let validator2 = new Validator()
        //只有validator2才有hasMe
        validator2.hasMe = (value)=>{
            if(value.indexOf('wei') === -1){
                return '必须有wei'
            }
        }
        
        let errors
        let fn1 = () => {
            errors = validator1.validate(data, rules1)
        }
        let fn2 = () => {
            errors = validator2.validate(data, rules2)
        }
        //报错两个
        //errors = {email:{pattern:'格式不匹配',required:'必填'}}
        expect(fn1).to.throw()
        expect(fn2).to.not.throw()
        expect(errors.email.hasNumber).to.exist
        expect(errors.email.minLength).to.exist
    })


    let demoRule = {
        key:'email',minLength:5,maxLength:10,hasNumber:true,
        hasLowerCaseAndUpperCase:true,hasDot:true,hasUnderscore:true,
        hasF:true
    }
})