<script>
	import Logo from './Logo.svelte';
	import { localizeHref } from './paraglide/runtime';
</script>

<div style:display="flex" style:justify-content="center">
	<a href={localizeHref('/')} style:height="60px" style:overflow="hidden" style:color="inherit">
		<Logo height={60} />
	</a>
</div>
