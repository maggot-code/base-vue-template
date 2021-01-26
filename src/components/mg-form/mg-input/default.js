/*
 * @Author: maggot-code
 * @Date: 2021-01-25 11:07:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-25 11:15:24
 * @Description: component mg-from > mg-input default attrs
 */
export default {
    default: {
        "type": "text",
        "placeholder": "请输入内容",
        "prefix-icon": "el-icon-edit",
    },
    text: {
        "type": "text",
        "placeholder": "请输入内容",
        "prefix-icon": "el-icon-edit",
    },
    password: {
        "type": "text",
        "placeholder": "请输入密码",
        "show-password": true,
        "prefix-icon": "el-icon-lock"
    },
    tel: {
        "type": "text",
        "placeholder": "请输入电话",
        "prefix-icon": "el-icon-phone"
    },
    email: {
        "type": "text",
        "placeholder": "请输入邮箱",
        "prefix-icon": "el-icon-message"
    },
    url: {
        "type": "text",
        "placeholder": "请输入网址",
        "prefix-icon": "el-icon-link"
    },
    textarea: {
        "type": "textarea",
        "placeholder": "请输入文本内容",
        "show-word-limit": true,
        "maxlength": 200,
        "autosize": {
            "minRows": 3,
            "maxRows": 5
        }
    }
}