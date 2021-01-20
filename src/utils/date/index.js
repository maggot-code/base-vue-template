/*
 * @Author: maggot-code
 * @Date: 2021-01-20 14:22:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-20 14:54:34
 * @Description: utils date util
 */
import fecha from './date-fecha';

/**
 * @description: 转换日期
 * @param {Date | *} date
 * @return {Date | Null}
 */
export const toDate = (date) => isDate(date) ? new Date(date) : null;

/**
 * @description: 判断是否是日期对象
 * @param {*} val
 * @return {Boolean}
 */
export const isDateObject = (val) => val instanceof Date;

/**
 * @description: 判断是否是日期
 * @param {Date | *} date
 * @return {Boolean}
 */
export const isDate = (date) => {
    if (date === null || date === undefined) return false;
    if (isNaN(new Date(date).getTime())) return false;
    if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
    return true;
}

/**
 * @description: 格式化日期
 * @param {Date} date
 * @param {String} format
 * @return {String}
 */
export const formatDate = (date, format) => {
    date = toDate(date);
    if (!date) return '';
    return fecha.format(date, format || 'yyyy-MM-dd');
}

/**
 * @description: 解析日期
 * @param {String} string
 * @param {String} format
 * @return {Date}
 */
export const parseDate = (string, format) => fecha.parse(string, format || 'yyyy-MM-dd');

/**
 * @description: 获取月份的天数
 * @param {Number | String(Number)} year
 * @param {Number | String(Number)} month
 * @return {Number}
 */
export const getDayCountOfMonth = (year, month) => {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }

    return 31;
}

/**
 * @description: 获取年份的天数
 * @param {Number | String(Number)} year
 * @return {Number}
 */
export const getDayCountOfYear = (year) => {
    const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 366 : 365;
}

/**
 * @description: 前几天
 * @param {Date} date
 * @param {Number} amount
 * @return {Date}
 */
export const prevDate = (date, amount = 1) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
}

/**
 * @description: 后几天
 * @param {Date} date
 * @param {Number} amount
 * @return {Date}
 */
export const nextDate = (date, amount = 1) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}