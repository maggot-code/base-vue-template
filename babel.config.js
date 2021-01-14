/*
 * @Author: maggot-code
 * @Date: 2021-01-04 14:18:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-12 13:31:45
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
