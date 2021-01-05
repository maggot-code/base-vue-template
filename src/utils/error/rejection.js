/*
 * @Author: maggot-code
 * @Date: 2021-01-05 15:14:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 16:47:00
 * @Description: utils error promise reject
 */
const rejectHandler = (event) => {
    event.preventDefault();

    // handler...
    // console.log(event);
}

window.onunhandledrejection = rejectHandler;