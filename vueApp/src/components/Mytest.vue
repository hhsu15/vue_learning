<template>
	<div class="my_test">
		<input type="text" v-model="title"><br />
		<h1>{{ title }}</h1>
		<p v-if="showName">{{ user.first_name}}</p>
		<p v-else>No body</p>
		<ul>
			<li v-for="item in items">{{ item.title }}</li>
		</ul>
		<button v-on:click="greet('Hello world')">Say greeting</button><br>
		<input type='text' v-on:keyup="pressKey" v-on:keyup.enter="enterHit"><br>

		<label>First Name: </label><input type="text" v-model="user.first_name"><br>

		<label>Last Name: </label><input type="text" v-model="user.last_name"><br>

		<h3>Hi {{fullname}}</h3>
		<h2>{{msg}}</h2> 

	</div>
</template>

<script>
	export default {
		name: 'my_test',
		props: {
			msg: {
				default:"Foobar",
				type: String
			}
		},
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
		},
		methods: {
			greet: function(greeting) {
				alert(greeting);
			},
			pressKey: function(event) {
				console.log("pressed!!")
				console.log(event.target.value)
			},
			enterHit: function(event) {
				console.log("enter hit!!")
			}
		},
		computed: {
			fullname: function() {
				return this.user.first_name + ' ' + this.user.last_name
			}
		}
	}
</script>

<style scoped>
	
</style>