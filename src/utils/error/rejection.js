/*
 * @Author: maggot-code
 * @Date: 2021-01-05 15:14:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 13:38:46
 * @Description: utils error promise reject
 */
const rejectHandler = (event) => {
    event.preventDefault();

    // handler...
    console.log('%c Error reject handler: ↓↓↓ \n%o\n', "background:#f56c6c;color:#fff;", event);
}

window.onunhandledrejection = rejectHandler;