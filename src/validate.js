
/**
 * var data = {
 *  email:'xxx',
 *  password:'xxx'
 * }
 * 
 * var rules = [
 *  {key:'email',pattern:'email'},
 *  {key:'password',minLength:6,maxLength:20}
 * ]
 * 
 * validate(data,rules)
 * 
 * 返回
 * errors = {
 *  email: {
 *      pattern:'格式不对'
 *  },
 *  password: {
 *      minLength: '太短',
 *      maxLength: undefined
 *  }
 * }
 */
export default function validate (data, rules) {
    let errors = {}
    rules.forEach((rule) => {
        let value = data[rule.key]
        if(rule.required) {
            if(value !== 0 && !value){
                errors[rule.key] = {required: '必填'}
                return //直接跳出forEach
            }
        }
        if(rule.pattern) {
            if(rule.pattern === 'email'){
                rule.pattern = /^.+@.+$/
            }
            if(rule.pattern.test(value) === false) {
                ensureObject(errors,rule.key)
                errors[rule.key].pattern = '格式不匹配'
            }
        }
        if(rule.minLength) {
            if(value.length < rule.minLength) {
                ensureObject(errors,rule.key)
                errors[rule.key].minLength = '太短'
            }
        }
    })
    return errors
}

function ensureObject(obj, key) {
    if(typeof obj[key] !== 'object'){
        obj[key] = {}
    }
}