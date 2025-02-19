<script lang="ts">
	import { convolution, getDistribution } from "./binomial";
	import Counter from "./Counter.svelte";
	import DistributionGradient from "./DistributionGradient.svelte";

	type Props = {
		packs: number;
		p4: number;
		p5: number;
	};
	let { packs, p4, p5 }: Props = $props();

	let count = $state(0);

	const distribution = $derived(convolution(getDistribution(p4, packs), getDistribution(p5, packs)));
</script>

<div class="cursor">
	<span class="label">
		<slot name="label" />
	</span>
	<Counter bind:count max={packs} />
	<DistributionGradient {distribution} value={count} />
</div>

<style>
	.cursor {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		min-width: 75vw;
		column-gap: 1rem;
		row-gap: 0.375rem;
	}

	.cursor .label {
		text-align: center;
	}
</style>
