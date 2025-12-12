<script>
	import * as m from '$lib/paraglide/messages.js';

	import { goto } from '$app/navigation';
	import { downloadFuiz, limits } from '$lib';
	import IconButton from '$lib/IconButton.svelte';
	import Logo from '$lib/Logo.svelte';
	import Textfield from '$lib/Textfield.svelte';
	import { getCreation } from '$lib/storage';
	import tippy from 'tippy.js';
	import { localizeHref } from '$lib/paraglide/runtime';

	/** @type {{
	 * title: string;
	 * id: number;
	 * db: import('$lib/storage').Database;
	 * errorMessage: string | undefined;
	 * }} */
	let { title = $bindable(), id, db, errorMessage } = $props();

	/** @type {HTMLElement | undefined} */
	let playButton = $state();
	/** @type {import('tippy.js').Instance | undefined} */
	let playTippyInstance = $state();

	$effect(() => {
		if (errorMessage === undefined || errorMessage.length === 0) {
			playTippyInstance?.destroy();
		}
	});

	function onmouseenter() {
		if (!playButton || !errorMessage) return;

		playTippyInstance?.destroy();

		playTippyInstance = tippy(playButton, {
			content: errorMessage,
			arrow: false,
			theme: 'fuiz'
		});

		playTippyInstance.show();
	}

	/**
	 * @param {import('$lib/storage').CreationId} id
	 */
	async function onDownload(id) {
		const creation = await getCreation(id, db);
		if (!creation) return;
		const configJson = creation.config;
		await downloadFuiz(configJson);
	}
</script>

<div
	style:display="flex"
	style:flex-wrap="wrap"
	style:gap="20px"
	style:box-shadow="0 2px 2px #00000040"
	style:padding="10px"
	style:z-index="1"
	style:align-items="center"
	style:justify-content="center"
>
	<a
		href={localizeHref('/create')}
		style:height="65px"
		style:margin="0 5px"
		style:overflow="hidden"
		style:color="inherit"
	>
		<Logo height={65} />
	</a>
	<div
		style:flex="1"
		style:display="flex"
		style:gap="10px"
		style:flex-wrap="wrap"
		style:justify-content="center"
	>
		<div
			style:flex="1"
			style:display="flex"
			style:align-items="center"
			style:gap="10px"
			style:justify-content="center"
			style:font-size="24px"
			style:min-width="15ch"
		>
			<Textfield
				bind:value={title}
				placeholder={m.fuiz_title()}
				required={false}
				id="title"
				disabled={false}
				maxLength={limits.fuiz.maxTitleLength}
			/>
		</div>
		<div style:display="flex" style:align-items="center" style:gap="0.2em" style:padding="0.2em">
			<IconButton
				size="1em"
				src="$lib/assets/download.svg"
				alt={m.download()}
				onclick={() => onDownload(id)}
			/>
			<div bind:this={playButton}>
				<IconButton
					size="1em"
					src="$lib/assets/slideshow.svg"
					alt={m.host()}
					disabled={errorMessage != undefined}
					onclick={() => goto('host?id=' + id)}
					onmouseenter={() => onmouseenter()}
					onfocus={() => onmouseenter()}
				/>
			</div>
		</div>
	</div>
</div>
