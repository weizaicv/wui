import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import validate from '../../src/validate'
chai.use(sinonChai)


describe('validate.js', () => {
    it('validate存在.', () => {
        expect(validate).to.exist
    })
    it('test required', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })
    it('test email number is 0', () => {
        let data = {
            email: 0
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('test email is ok', () => {
        let data = {
            email: '0@123'
        }
        let rules = [
            { key: 'email', pattern: 'email' }
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('test email is not ok', () => {
        let data = {
            email: '0123'
        }
        let rules = [
            { key: 'email', pattern: 'email' }
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不匹配')
    })
    it('test email require and pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', pattern: 'email', required: true }
        ]
        let errors = validate(data, rules)
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
        let errors = validate(data, rules)
        //报错两个
        //errors = {email:{pattern:'格式不匹配',required:'必填'}}
        expect(errors.email.pattern).to.exist
        expect(errors.email.minLength).to.exist
    })
})