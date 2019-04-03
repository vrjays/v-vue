<style lang="scss">
	.page_nav{
		float: left;
		width: 15%;
		height: 100%;
		background: #eee;
		ul{
			li{
				font-size: 16px;
				color: #0ae;
			}
		}
	}
</style>

<template>
	<div class="page_nav">
		<ul>
			<li>
				<router-link to="/page1">page1</router-link>
			</li>
			<li>
				<router-link to="/page2">page2</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title: '这是左侧导航'
			}
		},
		components: {
			
		},
		created(){
			
		},
		mounted(){
			
		}
	}
</script>


