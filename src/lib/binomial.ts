const coeffs: number[] = [];

function getBinomialCoefficients(n: number): number[] {
	if (n === coeffs.length - 1) return coeffs;
	coeffs.length = n + 1;
	coeffs[0] = 1;
	coeffs[1] = n;
	const kMax = Math.floor(n / 2);
	for (let k = 2; k <= kMax; k++) {
		coeffs[k] = (coeffs[k - 1] * (n - k + 1)) / k;
	}
	for (let k = kMax + 1; k <= n; k++) {
		coeffs[k] = coeffs[n - k];
	}
	return coeffs;
}

export function getDistribution(p: number, iterations: number): number[] {
	const distribution = new Array(iterations + 1);
	const coeffs = getBinomialCoefficients(iterations);
	let pk = 1;
	let pk_ = (1 - p) ** iterations;
	for (let k = 0; k <= iterations; k++) {
		distribution[k] = coeffs[k] * pk * pk_;
		pk *= p;
		pk_ /= 1 - p;
	}
	return distribution;
}

export function convolution(d1: number[], d2: number[]): number[] {
	const d = new Array(d1.length + d2.length - 1).fill(0);
	for (let i = 0; i < d1.length; i++) {
		for (let j = 0; j < d2.length; j++) {
			d[i + j] += d1[i] * d2[j];
		}
	}
	return d;
}
