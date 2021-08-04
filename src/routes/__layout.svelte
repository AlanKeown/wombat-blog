<script>
	import Header from '$component/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<span>
		<p><em>Obsessively commited to the evolution of spatially aware communities.</em></p>
		<p><small>&copy;Alan Keown 2021</small></p>
	</span>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		/* padding: 5px; */
		font-family: monotype-grotesque, sans-serif;
		background-color: white;
		position: fixed;
		bottom: 0;
		width: 100%;
		opacity: 0.7;
		text-align: center;
	}
	p{
		margin: 0;
	}

	@media (min-width: 480px) {
		footer {
			padding: 5px 0;
		}
	}
</style>
