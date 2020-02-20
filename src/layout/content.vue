<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'WContent',
    }
</script>

<style lang="scss" scoped>
.content{
    // 父容器大于子容器 扩张比例
    flex-grow: 1;

}
</style>