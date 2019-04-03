<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: flex;
		flex-direction: column;
		height: 100%;
		.router {
			flex: 1;
		}
	}
</style>

<template>
	<div id="app">
		<router-view class="router" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		name: 'app',
		components: {},
		created() {
			
		}
	};
</script>
