<script lang="ts">
	type Props = {
		distribution: number[];
		value: number;
	};
	let { distribution, value }: Props = $props();

	function getCumul(distribution: number[]) {
		const cumul = new Array(distribution.length);
		cumul[0] = 0;
		for (let i = 1; i < cumul.length; i++) {
			cumul[i] = cumul[i - 1] + distribution[i - 1];
		}
		return cumul;
	}

	const cumul = $derived(getCumul(distribution));
	const left = $derived(100 * cumul[value] + "%");
	const right = $derived(100 * (cumul[value + 1] ?? 1) + "%");
</script>

<div class="gradient">
	<div class="gradient-container">
		<div class="chunk left" style={`width: ${left};`}></div>
		<div class="chunk right" style={`left: ${right};`}></div>
	</div>
</div>

<style>
	.gradient {
		flex: 1 0 15rem;
		height: 2.5rem;
		border-radius: 0.5rem;
		position: relative;
		overflow: hidden;
		padding: 0.125rem;
		background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
	}

	.gradient-container {
		display: flex;
		position: relative;
		height: 100%;
		border-radius: 0.375rem;
		overflow: hidden;
		z-index: 1;
	}

	.chunk {
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 1;
		transition-duration: 100ms;
		background-color: #181818;
	}

	.chunk.left {
		left: 0;
	}
	.chunk.right {
		right: 0;
	}
</style>
