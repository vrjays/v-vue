<style lang="scss">
	.container{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg,sandybrown 0%,brown 100%);
		.content{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			// max-width: 400px;
			width: 400px;
			height: 240px;
			padding: 30px;
			border-radius: 5px;
			text-align: center;
			background: #fff;
			box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.3);
			
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				line-height: 40px;
				&:last-child{
					justify-content: center;
				}
				label{
					font-size: 18px;
				}
				input{
					flex: 1;
					height: 100%;
					padding-left: 5px;
					border-radius: 5px;
					outline: 0;
					font-size: 18px;
					border: none;
					box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.15);
					&:focus{
						transition: all .2s;
						box-shadow: 0 0 5px 0 rgba($color: #0ae, $alpha: 0.3);
					}
				}
				button{
					width: 120px;
					height: 36px;
					font-size: 16px;
					color: #fff;
					background: #0ae;
					outline: 0;
					border: 0;
					border-radius: 5px;
					&:active{
						opacity: 0.85;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="container">
		<div class="content">
			<div class="row">
				<label for="">账号：</label>
				<input ref="account" type="text" name="account" placeholder="请输入账号">
			</div>
			<div class="row">
				<label for="">密码：</label>
				<input ref="pwd" type="text" name="password" placeholder="请输入密码">
			</div>
			<div class="row">
				<button @click="toLogin">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title: 'Login',
			}
		},
		components: {
			
		},
		created(){
			
		},
		mounted(){
			// this.navigateTo();
		},
		methods: {
			toLogin() {
				let account = this.$refs.account.value;
				let pwd = this.$refs.pwd.value;
// 				if(account.length == 0){
// 					return;
// 				}
// 				if(pwd.length == 0){
// 					return;
// 				}
				this.$router.push('home');
				// this.$router.replace('home');
			}
		},
	}
</script>


