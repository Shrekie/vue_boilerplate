<template>
	<p id="app">{{ greeting }}</p>
</template>

<script>
import firstObject from "./js/my_component.js";

export default {
	name: "myComponent",
	data() {
		return {
			greeting: firstObject.greeting
		}
	}
};
</script>

<style src="./css/my_component.css"></style>