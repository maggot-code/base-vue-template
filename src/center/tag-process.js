/*
 * @Author: maggot-code
 * @Date: 2021-01-25 13:32:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 10:17:09
 * @Description: center test tag process
 */
const syncInput = {
    controller: "value",
    func: (val) => val
}

// 地方列表切换 ——> 实物列表
const changeFoodList = {
    controller: "schema",
    func: (val) => {
        if (val == "0") {
            return {
                "componentName": "mg-select",
                "field": "food",
                "value": "",
                "mold": "default",
                "dataSchema": {
                    "enums": [
                        {
                            "eid": "520e9752a4214696bf204366b79bebea",
                            "label": "馒头",
                            "value": "0"
                        },
                        {
                            "eid": "b97ad61ad4ba49cf87479e40536b4671",
                            "label": "面条",
                            "value": "1"
                        }
                    ]
                },
                "uiSchema": {
                    "label": "食物",
                    "placeholder": "请选择食物",
                },
                "eventSchema": {},
                "rulesSchema": [],
                "leaderTag": [],
                "workerTag": [
                    "changeFoodList"
                ]
            }
        }

        if (val == "1") {
            return {
                "componentName": "mg-select",
                "field": "food",
                "value": "3",
                "mold": "default",
                "dataSchema": {
                    "enums": [
                        {
                            "eid": "7c8b059f8dc24988b966f900832deef4",
                            "label": "米线",
                            "value": "2"
                        },
                        {
                            "eid": "ef5c1707cb3e4ba5b9aea764cf1fee89",
                            "label": "米饭",
                            "value": "3"
                        }
                    ]
                },
                "uiSchema": {
                    "label": "食物",
                    "placeholder": "请选择食物",
                },
                "eventSchema": {},
                "rulesSchema": [],
                "leaderTag": [],
                "workerTag": [
                    "changeFoodList"
                ]
            }
        }
    }
}

export default {
    syncInput,
    changeFoodList
}
