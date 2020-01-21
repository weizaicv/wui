<template>
    <div>
        <w-button>默认按钮</w-button>
        <w-button icon="nextPage">图标按钮</w-button>
        <w-button :loading="true">loading按钮</w-button>
        <w-button disabled>禁止按钮</w-button>
        <pre>
            <code>{{code}}</code>
        </pre>
    </div>
</template>

<script>
    import Button from '../../../src/button/button'
    export default {
        components:{
            'w-button': Button
        },
        data(){
            return {
                code:`
        <w-button>默认按钮</w-button>
        <w-button icon="nextPage">图标按钮</w-button>
        <w-button :loading="true">loading按钮</w-button>
        <w-button disabled>禁止按钮</w-button>`
            }
        }
    }
</script>
