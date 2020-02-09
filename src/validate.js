
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
            let error = validate.required(value)
            if(error){
                ensureObject(errors,rule.key)
                errors[rule.key].required = error
                return
            }
        }

        // rule  除了key和required其他都是正常循环的
        // let demoRule = {
        // key:'xxx',required:true,minLength:5,maxLength:10,hasNumber:true,
        // hasLowerCaseAndUpperCase:true,hasDot:true,hasUnderscore:true,
        // hasF:true}
        let validators = Object.keys(rule).filter(key => !['key','required'].includes(key))
        validators.forEach(validatorKey => {
            if(validate[validatorKey]){
                //执行函数
                let error = validate[validatorKey](value, rule[validatorKey])
                if(error){
                    ensureObject(errors,rule.key)
                    errors[rule.key][validatorKey] = error
                }
            }else{
                throw `不存在的校验器:${validatorKey}`
            }
        })

        // if(rule.pattern) {
        //     let error = validate.pattern(value, rule.pattern)
        //     if(error){
        //         ensureObject(errors,rule.key)
        //         errors[rule.key].pattern = error
        //     }
        // }
        // if(rule.minLength) {
        //     let error = validate.minLength(value, rule.minLength)
        //     if(error){
        //         ensureObject(errors,rule.key)
        //         errors[rule.key].minLength = error
        //     }
        // }
        // if(rule.maxLength) {
        //     let error = validate.maxLength(value, rule.maxLength)
        //     if(error){
        //         ensureObject(errors,rule.key)
        //         errors[rule.key].maxLength = error
        //     }
        // }
    })
    return errors
}

validate.required = (value) => {
    if(value!==0 && !value){
        return '必填'
    }
}
validate.pattern = (value, pattern) => {
    if(pattern === 'email'){
        pattern = /^.+@.+$/
    }
    if(pattern.test(value) === false) {
        return '格式不匹配'
    }
}
validate.minLength = (value, minLength) => {
    if(value.length < minLength) {
      return '太短'
    }
}
validate.maxLength = (value, maxLength) => {
    if(value.length > maxLength) {
      return '太长'
    }
}

function ensureObject(obj, key) {
    if(typeof obj[key] !== 'object'){
        obj[key] = {}
    }
}


/*
1.提取校验规则
2.遍历 rules = [{},{}],只有key和require是特殊的

*/