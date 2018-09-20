import {reqElites} from '../api'

export default {
	// 异步获取elite列表
  async getElites ({commit}) {
    // 发送异步ajax请求
    const result = await reqElites()
    // 提交一个mutation
    if (result.code === 0) {
      const elites = result.elites
      commit('getElites', elites)
    }
  },
}