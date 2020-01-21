<template>
    <svg class="icon">
        <use :xlink:href="`#wicon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        props:['name']
    }
</script>

<style lang="scss" scoped>
.icon{width:1em;height:1em;}
</style>