<template>
	<div class="users">
		<h1>Users</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="enter name">
			<input type="text" v-model="newUser.email" placeholder="enter email">
			<input type="submit" value="Submit">
		</form>
		<ul>
			<li v-for="user in users">
				<!--checkbox binding to contacted -->
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<!--class binding to contacted 
                this is saying if user.contacted is true then class name will be "contacted"!! we then use css to strike thru
				-->
				<span :class="{isContacted: user.contacted}">
					{{ user.name}}: {{user.email}}<button v-on:click="deleteUser(user)">x</button>
			    </span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'users',
		data() {
			return {
				newUser: {},
				users: []
				// users:[
    //             	{
    //             		name: "Hsin Hsu",
    //             		email: "hsin@gmail",
    //             		contacted: false //used for checkbox
    //             	},
    //             	{
    //             		name: "Kyle Hsu",
    //             		email: "kyle@gmail",
    //             		contacted: false
    //             	},
    //             	{
    //             		name: "Jess Hsu",
    //             		email: "jess@gmail",
    //             		contacted: false
    //             	},
				// ]
			}
		},
		methods: {
			addUser: function(e) {
				this.users.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false
				});
				e.preventDefault(); //prevent actual submit
			},
			deleteUser: function(user){
				this.users.splice(this.users.indexOf(user),1)
			}
		},
		created: function(){ //gets called when loading
			console.log("created!")
			// this is using the vue-resource package (http module)
			this.$http.get('https://jsonplaceholder.typicode.com/users') 
			.then(function(response){
				console.log(response.data);
				this.users = response.data;

			})
		}
	}
</script>

<style scoped>
	.isContacted {
		text-decoration: line-through;
	}
	
</style>