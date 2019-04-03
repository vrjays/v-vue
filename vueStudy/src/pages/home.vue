<style lang="scss">
	.page_main{
		display: flex;
		flex-direction: column;
		.page_content{
			flex: 1;
			background: #ddd;
		}
	}
</style>

<template>
	<div class="page_main">
		<page-header></page-header>
		<router-view class="page_content"></router-view>
	</div>
</template>

<script>
	import pageHeader from '../components/header.vue'
	export default{
		data(){
			return {
				
			}
		},
		components: {
			pageHeader,
		},
		created(){
			
		},
		mounted(){
			
		}
	}
</script>


