/*
 * @Author: maggot-code
 * @Date: 2021-01-04 23:29:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-04 23:59:15
 * @Description: cache cookie
 */
import Cookies from 'js-cookie';
import { isNil } from 'lodash';
import { TOKENKEY } from '@/config';

const getToken = () => Cookies.get(TOKENKEY) || false;

const setToken = (token) => Cookies.set(TOKENKEY, token);

const delToken = () => Cookies.remove(TOKENKEY);

const getCookie = (cookieName) => Cookies.get(cookieName) || false;

const setCookie = (cookieName, value) => Cookies.set(cookieName, value);

const delCookie = (cookieName = null) => {
    const remove = Cookies.remove;
    isNil(cookieName) ? remove() : remove(cookieName);
}

export {
    getToken,
    setToken,
    delToken,
    getCookie,
    setCookie,
    delCookie
}