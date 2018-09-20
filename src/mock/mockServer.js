import Mock from 'mockjs'
import data from './data.json'

var Random = Mock.Random

//返回圈子精英的接口
Mock.mock('/api/elites',{code:0,
	"elites|5-10":[
		{
			"nickName":"@cfirst"+"@clast",
			"region":"@city(true)",
			"avatar":"@image('200x200','@color','png')",
			"point|200-600":556,
			"residence":"@city(true)",
			"school":"华北电力大学（北京）",
			"position":"学生",
			"intro":"Nothing is impossible!!!"
		}
	]
})