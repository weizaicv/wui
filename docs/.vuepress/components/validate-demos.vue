<template>
    <div>
        <p>1.基础用法:验证邮箱是否为空</p>
        <p>返回错误信息</p>
        <pre><code class="language-javascript">{{code_default}}</code></pre>
        <p>
            2.内置规则:required,pattern,minLength<br/>
            可以自定义规则
        </p>
        
        <p></p>
        <pre><code class="language-javascript">{{code_default2}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import WIcon from '../../../src/icon'
    export default {
        components:{
            WIcon
        },
        data(){
            return {
                code_default:`
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
                `.replace(/\t+/g,'').trim(),
                code_default2:`
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
                `
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
