/*
与后台交互模块（依赖已封装的的ajax函数）
*/
import ajax from './ajax'
const BASE_URL = '/api'

export const reqElites = ()=>ajax(BASE_URL+'/elites')
