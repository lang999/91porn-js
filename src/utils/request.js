import axios from "axios"
import Vue from 'vue'
import CONST from '../config/const.js'
import { Toast } from 'vant'
const vm = new Vue()
global.BASE_URL = CONST.API_BASE
const service = axios.create({
    baseURL: BASE_URL, // api 的 base_url
    timeout: 300000, // request timeout
})
export default service