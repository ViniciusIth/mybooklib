<script>
	import { page } from '$app/stores';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<nav class="tab-nav">
		<a href="/" class="tab-button"><span class="material-symbols-rounded">home</span></a>
		<a href="explore" class="tab-button"><span class="material-symbols-rounded">explore</span></a>
		<a href="/user_profile" class="tab-button"
			><span class="material-symbols-rounded" class:active={$page.url.pathname === '/user_profile'}
				>local_library</span
			></a
		>
		<a href="more_options" class="tab-button"><span class="material-symbols-rounded">more_horiz</span></a>
	</nav>
</div>

<style>
	@import '../app.css';
	@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded';

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.tab-nav {
		box-shadow: 0px -5px 6px 0px var(--color-bg-shade);
		display: flex;
		justify-content: space-around;
		align-items: center;

		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 5px;
	}

	.tab-button {
		border-radius: 15px;
		padding: 10px 25px;

		& span {
			color: var(--color-text);

			&.active {
				color: var(--color-primary);
			}
		}
	}
</style>
