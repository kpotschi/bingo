export const getRandomData = () => {
	const sentences = [
		`Who's missing?`,
		'Can you all hear me?',
		'What am I doing wrong?',
		'Can you see me now?',
		`~Three ehm's in one sentence~`,
		'~Spilled drink~',
		'~Talks while muted~',
		'Sorry for the mess',
		"What's with the penguin?",
		"I couldn't get my camera to work",
		'Can you see my screen?',
		'Can you hear me',
		'~Construction at neighbours place',
		'~Doorbell rings~',
		'~Spilled drink~',
		'~Talks while muted~',
		'~Construction at neighbours place~',
		'~Doorbell rings~',
		'~Spilled drink~',
		'~Talks while muted~',
		'Sorry for the mess',
		"What's with the penguin?",
		'~awkward silence~',
		'~waiting in the zoom-lobby~',
		'~forgot to turn off screen sharing~',
		"~there's a cat~",
		'We should hire this dude Kevin',
		'example 30',
		'example 31',
		'example 32',
		'example 33',
		'example 34',
		'example 35',
	];

	const randomize = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		let fullArray = array.map((item) => {
			const asObj = {};
			asObj.sentence = item;
			asObj.match = false;
			return asObj;
		});
		return fullArray;
	};

	return randomize(new Array(sentences)[0]).slice(0, 25);
};
