<template>
    <div>
        <slot />
    </div>
</template>


<script>
    import Vue from 'vue';
    import Antd from 'ant-design-vue';
    // import 'ant-design-vue/dist/antd.less';
    import '../../src/assets/common.less';

    Vue.use(Antd);

    export default {
        name: 'Preview',
        created () {
            // console.log(this)
        }
    };
</script>
