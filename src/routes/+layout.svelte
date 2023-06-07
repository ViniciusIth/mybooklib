<script>
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	@import '../app.css';
	@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded';

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
