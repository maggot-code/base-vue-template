/*
 * @Author: maggot-code
 * @Date: 2021-01-05 10:53:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 13:33:48
 * @Description: utils tool sign tag
 */
import FlakeId from 'flakeid';
import { uniqueId } from 'lodash';

const flake = new FlakeId({
    mid: uniqueId(),
    timeOffset: (new Date().getFullYear() - 1970) * 31536000 * 1000
})

export default flake;