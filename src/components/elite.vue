<template>
	<div class="elite">
		<el-row class="container">
			<el-col :span='17'>
				<div class="left" style="margin-right: 75px;">
					<el-row class="tab">
						<el-col :span='14'>
							<ul>
								<li>标签</li><!-- 
							 --><li>推荐</li><!-- 
							 --><li>附近</li><!-- 
							 --><li>我关注的</li>
							</ul>
						</el-col>
						<el-dialog class='filter' width="80%" :visible.sync="dialogTableVisible">
							<div class='hot'>
								<p style="margin-top: -40px" >热门标签</p>
								<ul>
									<li>互联网</li><li>PPT</li><li>北京</li><li>美学</li>
								</ul>
							</div>
							<el-row>
								<el-col :span='8' class='rf'>
									<p>地区</p>
									<ul>
										<li>天津</li><li>上海</li><li>北京</li><li>广州</li>
									</ul>
								</el-col :span='8'>
								<el-col :span='8' class='sf'>
									<p>学科</p>
									<ul>
										<li>高数</li><li>线代</li><li>概率论</li><li>物理</li>
									</ul>
								</el-col :span='8'>
								<el-col :span='8' class='uf'>
									<p>单位</p>
									<ul>
										<li>清华大学</li><li>北京大学</li><li>华北电力大学</li>
									</ul>
								</el-col :span='8'>
							</el-row>
						</el-dialog>
					</el-row>
					<el-row class="settings">
						<el-col :span='9'>
							<div class="btn" style="margin-right: 40px" @click="dialogTableVisible = true">选择标签</div>
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
							<el-col :span='5'>
								<!-- <div  :style="{background: 'url('+item.avatar+') center center/100% 100%'}"></div> -->
								<img class='avatar' v-lazy="item.avatar" :src="item.avatar">
							</el-col>
							<el-col :span='19' class="detail">
								<el-row>
									<el-col :span='7'><p class="nickName">{{item.nickName}}</p><i></i></el-col>
									<el-col :span='17'><div  class='nickName'style="background-color: #4893a8">000</div></el-col>
									<el-col :span="2">男</el-col>
									<el-col :span='6'><p class="region">{{item.region}}</p></el-col>
									<el-col :span='16'><p class="region">指数：{{item.point}}</p></el-col>
									<el-col :span='7'><p class="residence"><span>现居&nbsp</span>{{item.residence}}</p></el-col>
									<el-col :span='17'><p class="residence">{{item.school}}/{{item.position}}</p></el-col>
									<el-col :span='24'><p class="intro"><span>简介：</span>{{item.intro}}</p></el-col>
									<el-col :span='15'><div class="btn1"><p>私信</p></div></el-col>
									<el-col :span='9'><div class="btn2">+好友</div><div class="btn2">未订阅</div></el-col>
								</el-row>
							</el-col>
							<el-col :span="24"><p class="from">来自圈子：&nbsp<span>华北电力大学，</span><span>数学巅峰，</span><span>我们都是设计师，</span><span>英语天地，</span><span>北京老乡会</span></p></el-col>
						</el-row>
					</el-row>
				</div>
			</el-col>
			<el-col :span='7'>
				<div class="right" style="margin-left:13px">
					<el-row>
						<el-col :span='24'><div class="topList">圈子精英榜</div></el-col>
					</el-row>
					<el-row>
						<el-col :span='3'><div class="rank">1</div></el-col>
						<el-col :span='7'><div class='avatar-l'></div></el-col>
						<el-col :span='14' >
							<p class="nickName">飞鸟</p>
							<p class="intro"><span>简介：</span>是美丽的狗子，不是单纯的傻子。</p>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				dialogTableVisible:false
			}
		},
		computed:{
			...mapState(['elites'])
		},
		mounted(){
			this.$store.dispatch('getElites')
		}
	}
</script>

<style scoped>
	.elite{
		background-color: #fff;
		padding-top: 55px;
	}
	.elites>div:hover{
		border:solid 2px #4893a8;
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
		border:solid 2px transparent;
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
	.topList{
		color:#474747;
		font-size: 22px;
		padding-left: 25px;
		height:25px;
		line-height: 25px;
		position: relative;
		margin-bottom: 32px;
	}
	.topList:after{
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
	.rf,.uf,.sf{
		margin-top: 10px;
		margin-bottom: 15px;
	}
	.filter p{
		color: #000;
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 15px;
	}
	.filter li{
		border: solid 1px #8a8a8a;
		color: #000;
		font-size: 16px;
		padding: 0 20px;
		margin: 5px 15px;
		border-radius: 15px;
	}
</style>