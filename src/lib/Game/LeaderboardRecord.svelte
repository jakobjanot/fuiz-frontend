<script lang="ts">
	import { medalColors } from '$lib';
	import Counter from '$lib/Counter.svelte';
	import Icon from '$lib/Icon.svelte';
	import medal from '$lib/assets/medal.svg';
	import { scale } from 'svelte/transition';

	interface Props {
		name: string;
		score: number;
		index: number;
		final: boolean;
		duration: number;
		delay: number;
	}

	let { name, score, index, final, duration, delay }: Props = $props();
</script>

<div id="container" style:display="flex" style:align-items="start" style:gap="0.2em">
	{#if final}
		<div style:aspect-ratio="1/1" in:scale={{ delay: delay + duration }}>
			{#if index < 3}
				<div
					style:height="100%"
					style:width="100%"
					style:display="flex"
					style:padding="0.15em"
					style:align-items="center"
					style:justify-content="center"
					style:background="var(--palette-dark)"
					style:border="0.15em solid currentcolor"
					style:font-weight="bold"
					style:border-radius="0.6em"
					style:box-sizing="border-box"
				>
					<div style:color={medalColors[index]}>
						<Icon src={medal} alt="medal" size="1.3em" />
					</div>
				</div>
			{/if}
		</div>
	{/if}
	<div
		style:flex="1"
		style:background="var(--background-color)"
		style:border="0.15em solid currentcolor"
		style:padding="0.15em 0.4em"
		style:font-weight="bold"
		style:overflow="hidden"
		style:border-radius="0.6em"
		style:box-sizing="border-box"
		style:display="flex"
		style:justify-content="space-between"
	>
		<div
			style:overflow="hidden"
			style:white-space="nowrap"
			style:text-overflow="ellipsis"
			style:flex="1"
			title={name}
		>
			{name}
		</div>

		<div style:flex-basis="max-content">
			<Counter value={score} {duration} {delay} />
		</div>
	</div>
</div>

<style>
	#container {
		font-size: 1em;
	}

	@media (max-width: 600px) {
		#container {
			font-size: 0.5em;
		}
	}
</style>
