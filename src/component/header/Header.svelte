<script>
	import logo from './logo.jpg';
	import NavBar from '$component/header/navbar/NavBar.svelte';
</script>

<header>
	<div class="corner">
		<img src={logo} alt="SvelteKit" />
	</div>
	<div>
		<NavBar />
		<p>Seriously: Wombat turds are Cuboid!!</p>
	</div>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		border-bottom: 5px solid var(--primary-color-dark);
	}

	.corner {
		padding: 10px;
		width: 6em;
		height: 6em;
	}
	p {
		display: flex;
		justify-content: center;
		font-size: 14px;
		font-weight: bold;
	}

	img {
		height: 100%;
		width: auto;
		object-fit: contain;
		border-radius: 50%;
	}
	@media (max-width: 720px) {
		.corner {
			padding: 10px;
			width: 4em;
			height: 4em;
		}
		/* h1 {
			font-size: 1.4rem;
			margin-block-start: 0.6em;
			margin-block-end: 0em;
		} */

		img {
			height: 59%;
			width: auto;
			object-fit: contain;
			border-radius: 50%;
		}
	}
</style>
