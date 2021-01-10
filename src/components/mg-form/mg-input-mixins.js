/*
 * @Author: maggot-code
 * @Date: 2021-01-10 19:55:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 23:29:31
 * @Description: component mg-input-mixins
 */
export default {
    name: "mg-input-mixins",
    mixins: [],
    components: {},
    props: {
        field: String,
        value: {
            type: String,
            default: () => ""
        },
        disabled: {
            type: Boolean,
            default: () => false,
        },
        placeholder: {
            type: String,
            default: () => "请输入内容"
        }
    },
    data() {
        //这里存放数据
        return {
            size: "small",
            inputValue: this.value
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        blur(event) { },
        focus(event) { },
        change(value) {
            this.throwOut(value, this.field);
        },
        input(value) { },
        clear() { },
        throwOut(value, field) {
            this.$emit('onChange', { field: field || "default", value: value })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};