<script lang="ts">
	import EmptyAnswerButton from './EmptyAnswerButton.svelte';

	interface Props {
		indices: number[];
		onanswer?: (index: number) => void;
	}

	let { indices, onanswer }: Props = $props();
</script>

<div
	style:display="grid"
	style:height="100%"
	style:box-sizing="border-box"
	style:grid-template-columns="1fr 1fr"
	style:gap="0.2em"
	style:padding="0.2em"
>
	{#each indices as index}
		<EmptyAnswerButton
			{index}
			onclick={() => {
				if (onanswer) onanswer(index);
			}}
		/>
	{/each}
</div>
