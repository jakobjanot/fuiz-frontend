<script>
	import NiceBackground from '$lib/NiceBackground.svelte';
	import MainHeader from '../MainHeader.svelte';
</script>

<NiceBackground>
	<div style:height="100%" style:display="flex" style:flex-direction="column">
		<MainHeader />
		<div
			style:height="100%"
			style:display="flex"
			style:align-items="center"
			style:justify-content="center"
			style:padding="0.5em"
			style:box-sizing="border-box"
		>
			<div
				style:max-width="50ch"
				style:text-align="center"
				style:border="2px solid"
				style:border-radius="1em"
				style:padding="1em"
			>
				<h2 style:margin="0 0 0.8em 0">Publishing disabled</h2>
				<p style:margin="0">This self-hosted build removes Cloudflare-powered publishing.</p>
			</div>
		</div>
	</div>
</NiceBackground>
