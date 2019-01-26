<template>
	<div class="my_test">
		<input type="text" v-model="title"><br />
		<h1>{{ title }}</h1>
		<p v-if="showName">{{ user.first_name}}</p>
		<p v-else>No body</p>
		<ul>
			<li v-for="item in items">{{ item.title }}</li>
		</ul>
		
	</div>
</template>

<script>
	export default {
		name: 'my_test',
		data() {
			return {
				title: 'hello world',
				user: {
					first_name: 'Hsin',
					last_name: 'Hsu'
				},
				showName: true, //use this for the v-if directive
				items: [
                	{title: 'item 1'},
                	{title: 'item 2'},
                	{title: 'item 3'},
				]
			}
		}
	}
</script>

<style scoped>
	
</style>