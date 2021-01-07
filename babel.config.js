/*
 * @Author: maggot-code
 * @Date: 2021-01-04 14:18:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 15:46:20
 * @Description: file content
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ],
        "lodash"
    ]
}
