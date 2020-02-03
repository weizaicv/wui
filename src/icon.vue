<template>
    <svg class="w-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#wicon-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'WIcon',
        props:['name']
    }
</script>

<style lang="scss" scoped>
.w-icon{width:1em;height:1em;}
</style>