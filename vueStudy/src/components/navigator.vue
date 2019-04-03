<style lang="scss">
	.page_header{
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding: 0 30px;
		background: #333;
		a,span{
			margin-right: 10px;
			font-size: 16px;
			color: #fff;
		}
	}
</style>

<template>
	<div class="page_header">
		<router-link to="/home/page1">Page1</router-link>
		<span>/</span>
		<router-link to="/home/page2">Page2</router-link>
		<span>/</span>
		<span @click="toAbout">About</span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title: '这是顶部导航'
			}
		},
		components: {
			
		},
		created(){
			
		},
		mounted(){
			
		},
		methods: {
			toAbout() {
				this.$router.push('/about')
			}
		},
	}
</script>


