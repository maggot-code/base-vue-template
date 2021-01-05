/*
 * @Author: maggot-code
 * @Date: 2021-01-05 15:14:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 15:37:24
 * @Description: utils error promise reject
 */
const rejectHandler = (event) => {
    event.preventDefault();

    // handler...
}

window.onunhandledrejection = rejectHandler;