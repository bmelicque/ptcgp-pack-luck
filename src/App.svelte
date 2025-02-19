<script lang="ts">
	import Counter from "./lib/Counter.svelte";
	import Meter from "./lib/Meter.svelte";

	type Rarity = {
		p4: number;
		p5: number;
		imgs: string[];
	};

	let packs = $state(0);

	const rarities: Rarity[] = [
		{ p4: 0.0004, p5: 0.00161, imgs: ["crown.webp"] },
		{ p4: 0.00222, p5: 0.00888, imgs: new Array(3).fill("star.webp") },
		{ p4: 0.005, p5: 0.02, imgs: new Array(2).fill("star.webp") },
		{ p4: 0.02572, p5: 0.10288, imgs: new Array(1).fill("star.webp") },
		{ p4: 0.01666, p5: 0.06664, imgs: new Array(4).fill("diamond.png") },
		{ p4: 0.05, p5: 0.2, imgs: new Array(3).fill("diamond.png") },
	];
</script>

<main>
	<div class="packs">
		<label for=""> Packs: </label>
		<Counter bind:count={packs} />
	</div>
	{#each rarities as { p4, p5, imgs }}
		<Meter {packs} {p4} {p5}>
			<span slot="label" class="label">
				{#each imgs as src}
					<img {src} alt="" />
				{/each}
			</span>
		</Meter>
	{/each}

	<div class="info">
		<span class="icon" aria-hidden="true">?</span>
		<p>
			Select the number of packs you've opened, and the number of cards in each rarity category. The color section
			indicates in which probability range you ended up. Left side is bad luck, right side is good luck.
			<br />
			Remember that having bad luck does not mean that the game is rigged.
		</p>
	</div>
</main>

<footer>
	<a class="github" href="https://github.com/bmelicque/ptcgp-pack-luck" target="_blank">
		<img src="github-mark-white.svg" alt="" />
	</a>
</footer>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.packs {
		display: flex;
		gap: 1rem;
	}
	.packs > label {
		font-size: 1.5rem;
		margin-top: 0.125rem;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 0.125rem;
	}

	.label {
		display: block;
		min-width: 7rem;
	}
	.label > img {
		margin: 0 -0.5rem;
		max-height: 2.5rem;
	}

	.info {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.info > .icon {
		font-size: 3rem;
		vertical-align: middle;
		font-weight: 1000;
		background: linear-gradient(var(--gradient-start), var(--gradient-end) 80%);
		background-clip: text;
		color: transparent;
		padding: 0 0.5rem;
	}

	.info > p {
		max-width: 70ch;
		font-size: 0.875rem;
	}

	footer {
		margin: 2rem auto 0;
		display: flex;
		place-content: center;
	}
	.github > img {
		width: 2rem;
		cursor: pointer;
	}
</style>
