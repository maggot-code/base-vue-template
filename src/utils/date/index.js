/*
 * @Author: maggot-code
 * @Date: 2021-01-20 14:22:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-20 16:00:58
 * @Description: utils date util
 */
import fecha from './date-fecha';

const newArray = function (start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

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

/**
 * @description: 前一月
 * @param {Date} date
 * @return {Date}
 */
export const prevMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return month === 0
        ? changeYearMonthAndClampDate(date, year - 1, 11)
        : changeYearMonthAndClampDate(date, year, month - 1);
}

/**
 * @description: 后一月
 * @param {Date} date
 * @return {Date}
 */
export const nextMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return month === 11
        ? changeYearMonthAndClampDate(date, year + 1, 0)
        : changeYearMonthAndClampDate(date, year, month + 1);
}

/**
 * @description: 前几年
 * @param {Date} date
 * @param {Number} amount
 * @return {Date}
 */
export const prevYear = (date, amount = 1) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return changeYearMonthAndClampDate(date, year - amount, month);
}

/**
 * @description: 后几年
 * @param {Date} date
 * @param {Number} amount
 * @return {Date}
 */
export const nextYear = (date, amount = 1) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return changeYearMonthAndClampDate(date, year + amount, month);
}

/**
 * @description: 更改年月日
 * @param {Date} date
 * @param {String | Number} year
 * @param {String | Number} month
 * @return {Date}
 */
export const changeYearMonthAndClampDate = (date, year, month) => {
    // clamp date to the number of days in `year`, `month`
    // eg: (2010-1-31, 2010, 2) => 2010-2-28
    const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
    return modifyDate(date, year, month, monthDate);
}

/**
 * @description: 修改日期
 * @param {Date} date
 * @param {String | Number} y
 * @param {String | Number} m
 * @param {String | Number} d
 * @return {Date}
 */
export const modifyDate = (date, y, m, d) => {
    return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}

/**
 * @description: 修改时间
 * @param {Date} date
 * @param {String | Number} h
 * @param {String | Number} m
 * @param {String | Number} s
 * @return {Date}
 */
export const modifyTime = (date, h, m, s) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
}

/**
 * @description: 提取日期格式
 * @param {String} format
 * @return {String}
 */
export const extractDateFormat = (format) => {
    return format
        .replace(/\W?m{1,2}|\W?ZZ/g, '')
        .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
        .trim();
}

/**
 * @description: 提取时间格式
 * @param {String} format
 * @return {String}
 */
export const extractTimeFormat = (format) => {
    return format
        .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '')
        .trim();
}