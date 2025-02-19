<script lang="ts">
	type Props = {
		count: number;
		max?: number;
	};
	let { count = $bindable(), max = Infinity }: Props = $props();
	const setCount = (input: string) => {
		const value = parseInt(input);
		count = isNaN(value) || value < 0 ? 0 : value;
	};
	const increment = () => (count < max ? count++ : max);
	const decrement = () => (count > 0 ? count-- : 0);
</script>

<div class="counter">
	<button class="counter-minus" onclick={decrement}>-</button>
	<input name="count" id="count" value={count} oninput={(e) => setCount(e.currentTarget.value)} />
	<button class="counter-plus" onclick={increment}>+</button>
</div>

<style>
	.counter {
		display: flex;
		overflow: hidden;
		position: relative;
		padding: 0.125rem;
		border-radius: 0.5rem;
	}

	.counter::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end) 80%);
	}

	.counter > * {
		display: flex;
		background-color: #181818;
		border-radius: 0;
	}

	.counter input {
		border: none;
		width: 5ch;
		text-align: center;
	}
	.counter input:focus {
		outline: none;
	}

	.counter-minus {
		border-radius: 0.375rem 0 0 0.375rem;
	}

	.counter-plus {
		border-radius: 0 0.375rem 0.375rem 0;
	}
</style>
