export const getRandomData = () => {
	const sentences = [
		{ sentence: '1', match: false },
		{ sentence: '2', match: false },
		{ sentence: '3', match: false },
		{ sentence: '4', match: false },
		{ sentence: '5', match: false },
		{ sentence: '~Spilled drink~', match: false },
		{ sentence: '~Talks while muted~', match: false },
		{ sentence: 'Sorry for the mess', match: false },
		{ sentence: "What's with the penguin?", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: 'Can you see my screen?', match: false },
		{ sentence: 'Can you hear me', match: false },
		{ sentence: "There's construction at my neighbours place", match: false },
		{ sentence: '~Doorbell rings~', match: false },
		{ sentence: '~Spilled drink~', match: false },
		{ sentence: '~Talks while muted~', match: false },
		{ sentence: "There's construction at my neighbours place", match: false },
		{ sentence: '~Doorbell rings~', match: false },
		{ sentence: '~Spilled drink~', match: false },
		{ sentence: '~Talks while muted~', match: false },
		{ sentence: 'Sorry for the mess', match: false },
		{ sentence: "What's with the penguin?", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
		{ sentence: "I couldn't get my camera to work", match: false },
	];

	const randomize = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		return array;
	};

	return randomize(new Array(sentences)[0]).slice(0, 25);
};
