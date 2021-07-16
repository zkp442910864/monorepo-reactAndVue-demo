<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <button type="button" class="ant-btn ant-btn-primary">
            <span class="iconfont icon-sousuo m-r-5"></span>
            <span>搜索</span>
        </button>
        <a-button type="">123</a-button>
        <a-table></a-table>
        <a-checkbox></a-checkbox>
        <asd/>
        <div class="asdf">123123</div>
        <MyCheckbox v-model="params.as">123</MyCheckbox>
        <!-- <my-checkbox v-model="params.as">123</my-checkbox> -->
        <!-- <my-checkbox ></my-checkbox> -->
        <!-- <my-checkbox :trueValue="" ></my-checkbox> -->
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {MyCheckbox} from '@mono/components-vue';
    // import * as com from '@mono/components-vue/dist/com.common.js';

    // console.log(com);

    @Component({
        components: {
            MyCheckbox
            // MyCheckbox: com.MyCheckbox,
        }
    })
    export default class App extends Vue {
        params = {};
        options2 = [
            {Name: '1', MarketplaceId: '1'},
            {Name: '2', MarketplaceId: '2'},
            {Name: '3', MarketplaceId: '3'},
            {Name: '4', MarketplaceId: '4'},
            {Name: '5', MarketplaceId: '5'},
            {Name: '6', MarketplaceId: '6'}
        ];
    }
</script>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        color: @primary-color;
    }
</style>
