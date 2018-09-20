<template>
	<div id="probing">
		<el-row class="container">
			<el-col :span='17'>
				<div class="left" style="margin-right: 75px;">
					<el-row>
						<div class="littleTitle">圈子动态</div>
					</el-row>
					<el-row class="tab">
						<el-col :span='14'>
							<ul>
								<li>标签</li><!-- 
							 --><li>推荐</li><!-- 
							 --><li>附近</li><!-- 
							 --><li>我关注的</li>
							</ul>
						</el-col>
					</el-row>
					<el-row class="settings">
						<el-col :span='9'>
							<div class="btn" style="margin-right: 40px">选择标签</div>
							<div class="btn">热度</div><i class="el-icon-d-caret"></i>
						</el-col>
						<el-col :span='8'>
							<input style="background-color: #f7f7f7;border:none;height: 22px;margin-right: 18px;"><i class="icon el-icon-search" style="color: #bebebe;font-weight: 600;"></i>
						</el-col>
						<el-col :span='7'>
							<div></div>
							<div></div>
						</el-col>
					</el-row>
					<el-row class='elites'>
						<el-row v-for='(item,index) in elites' :key='index'>
							<el-row><p>来自圈子：华北电力大学</p></el-row>
							<el-row><p>[文章]你高中那一个瞬间最可怕？</p></el-row>
							<el-col :span='5'><img v-lazy="item.avatar" style="width: 100%"></el-col>
							<el-col :span='19' class="detail">
								<el-row>
									<el-col :span='24'><p>标签：{{item.nickName}}</p><i></i></el-col>
									<el-col :span='24'><P>信息安全是指在技术与管理上对信息系统的硬件、软件、系统中的数据及依托其开展的业务进行保护，使得它们不会由于偶然的或者恶意的原因而遭到未经授权的访问、泄露、破坏、修改、审阅、检查、记录或销毁，保证信息系统连续可靠地正常</P></el-col>
								</el-row>
							</el-col>
							<el-col :span="24">
								<el-col :span='18'>
									<el-col :span='6'>转发（）</el-col>
									<el-col :span='6'>转发（）</el-col>
									<el-col :span='6'>转发（）</el-col>
									<el-col :span='6'>转发（）</el-col>
								</el-col>
								<el-col :span='6'>不感兴趣···</el-col>
								<el-popover
								    placement="bottom"
								    title="标题"
								    width="150"
								    trigger="click"
								    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
								 </el-popover>
							</el-col>
						</el-row>
					</el-row>
				</div>
			</el-col>
			<el-col :span='7'>
				<el-row class="right" style="margin:0 0 50px 13px ">
					<el-row>
						<el-col :span='24'><div class="littleTitle">圈子精英</div></el-col>
					</el-row>
					<el-row>
						<el-col v-for='(item,index) in elites' :key='index' :span='6'>
							<div class='avatar-l'></div>
							<p class="nickName">飞鸟</p>
						</el-col>
					</el-row>
				</el-row>
				<el-row class="right" style="margin-left:13px">
					<el-row>
						<el-col :span='24'><div class="littleTitle">圈子库</div></el-col>
					</el-row>
					<el-row>
						<el-col v-for='(item,index) in elites' :key='index' :span='6'>
							<div class='avatar-l'></div>
							<p class="nickName">飞鸟</p>
						</el-col>
					</el-row>
				</el-row>

			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState(['elites'])
		},
		mounted(){
			this.$store.dispatch('getElites')
		}
	}
</script>

<style scoped>
	#probing{
		background-color: #fff;
		padding-top: 55px;
	}
	ul{
		margin-left: 30px;
	}
	li{
		height: 30px;
		display: inline-block;
		list-style: none;
		border-left: solid 1px #8a8a8a;
		border-top: solid 1px #8a8a8a;
		border-bottom: solid 1px #8a8a8a;
		font-size: 18px;
		line-height: 30px;
		padding: 0 10px;
		color: #8a8a8a;
	}
	li:last-child{
		border-right: solid 1px #8a8a8a;
	}
	.settings{
		margin-top: 25px;
		margin-bottom: 20px;
		padding-left: 40px;
	}
	.btn{
		display: inline-block;
		border: solid 1px #9e9e9e;
		padding:1px 4px;

		height: 22px;
		line-height: 22px;
		color:#5b5b5b;
	}
	.elites>div{
		padding:35px 35px 25px 25px;
		border:solid 1px transparent;
	}
	.avatar{
		height: 110px;
		width: 110px;
		border-radius: 50%;
		background-color: #4893a8;
	}
	.avatar-l{
		height: 70px;
		width: 70px;
		border-radius: 50%;
		background-color: #4893a8;
	}
	.detail{
		padding-left: 10px;
	}
	.nickName{
		font-size: 16px;
		margin-bottom: 5px;
	}
	.region{
		font-size: 14.5px;
		color: #9d9d9d;
		height: 25px;
		line-height: 25px;
	}
	.residence,.intro{
		font-size: 16px;
		color: #9d9d9d;
		line-height: 30px;
		margin-bottom: 15px;
	}
	.residence span,.intro span{
		color: #474747;
	}
	.intro{

	}
	.from{
		margin-top: 30px;
		font-size: 16px;
		color: #474747;
	}
	.from span{
		color: #9d9d9d;
		text-decoration-line: underline;
	}
	.btn1{
		height: 24px;
		width: 63px;
		border:solid 1.5px #4893a8;
		padding: 1px;
		border-radius: 3px
	}
	.btn1 p{
		text-align: center;
		color: #fff;
		background-color: #4893a8;
		line-height: 24px;
	}
	.btn2{
		display: inline-block;
		color: #4893a8;
		border-radius: 3px;
		border:solid 1.5px #4893a8;
		padding:0 8px;
		line-height: 24px;
		margin-right: 20px;
	}
	.littleTitle{
		color:#474747;
		font-size: 22px;
		padding-left: 25px;
		height:25px;
		line-height: 25px;
		position: relative;
		margin-bottom: 32px;
	}
	.littleTitle:after{
		content: "";
		background-color: #4893a8;
		position: absolute;
		left: 0;
		width:10px;
		height:25px; 
	}
	.rank{
		width: 25px;
		height:25px;
		background-color: #ff0000;
		font-size: 22px;
		color: #fff ;
		text-align: center;
		line-height: 25px;
	}
</style>