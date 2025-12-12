<script>
	import MainHeader from '../MainHeader.svelte';
	import NiceBackground from '$lib/NiceBackground.svelte';
</script>

<NiceBackground>
	<div style:height="100%" style:display="flex" style:flex-direction="column">
		<MainHeader />
		<div
			style:height="100%"
			style:display="flex"
			style:align-items="center"
			style:justify-content="center"
		>
			<div
				style:max-width="30ch"
				style:text-align="center"
				style:border="2px solid"
				style:border-radius="1em"
				style:padding="1em"
			>
				<h2 style:margin="0 0 0.8em 0">Sign in disabled</h2>
				<p style:margin="0">
					This self-hosted build runs without Cloudflare/Auth.
				</p>
			</div>
		</div>
	</div>
</NiceBackground>
