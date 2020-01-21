<template>
    <div class="tabs-body"> 
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'WTabsBody',
        inject:['eventBus']
    }
</script>

<style scoped>

</style>