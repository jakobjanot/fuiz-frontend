<script>
	import * as m from '$lib/paraglide/messages.js';

	import { locales, setLocale } from '$lib/paraglide/runtime.js';
	import IconButton from './IconButton.svelte';
	import { createDialog } from 'svelte-headlessui';

	const dialog = createDialog();

	/** @type {{ up?: boolean }}*/
	let { up = false } = $props();
</script>

<div>
	<IconButton
		onclick={() => {
			dialog.open();
		}}
		src="$lib/assets/language.svg"
		alt={m.language()}
		size="1em"
	/>

	{#if $dialog.expanded}
		<ul use:dialog.modal style:--y={up ? 'calc(-100% - 1.25em)' : '0'}>
			{#each locales as lang}
				<li>
					<!-- the hreflang attribute decides which language the link points to -->
					<button onclick={() => setLocale(lang)}>
						{new Intl.DisplayNames([lang], {
							type: 'language'
						}).of(lang)}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	div {
		position: relative;
	}

	ul {
		position: absolute;
		background: var(--background-color);
		border: 0.1em solid;
		border-radius: 0.7em;
		transform-origin: top;
		padding: 0.3em;
		transform: translateX(calc(-100% + 1.25em)) translateY(var(--y));

		z-index: 100;
		margin: 0.15em 0;
	}

	ul:dir(rtl) {
		transform: translateX(calc(100% - 1.25em)) translateY(var(--y));
	}

	li {
		display: block;
		text-transform: capitalize;
		padding: 0.3em 0.3em;
		line-height: 1.25;
		white-space: nowrap;
	}

	button {
		color: inherit;
		background: none;
		border: none;
		font: inherit;
		cursor: pointer;
		text-decoration: none;
	}
</style>
