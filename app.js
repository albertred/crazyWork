
// helpers
function adjustBottomBar() {
	const canvas = document.getElementById('canvas');
	const bottom_bar = document.getElementById('bottom-bar');

	const canvasRect = canvas.getBoundingClientRect();
	bottom_bar.style.top = `${canvasRect.bottom + 30}px`


}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

// *****************************************

// createWord takes in a string and adds it to the canvas 
function createWord(word) {
    const canvas = document.getElementById('canvas');
    const new_word = document.createElement('div');

	word = word.slice(1, word.length - 1);

    new_word.textContent = word;
    new_word.className = "word";

    canvas.appendChild(new_word);
	new_word.style.width = `${new_word.offsetWidth + 10}px`;

    interact(new_word).draggable({
        // inertia: true, // Enable inertial throwing
        autoScroll: true, // Enable autoScroll
        onmove: dragMoveListener, // Call this function on every dragmove event
    });
}

// Drag move listener function
function dragMoveListener(event) {
    const target = event.target;

    // Update the position based on drag
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // Apply translation
    target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

adjustBottomBar();
window.addEventListener('resize', adjustBottomBar);


fetch('./words/words.csv') 
	.then(response => response.text())
	.then(text => {
		const rows = text.split('\n');
		console.log(rows);

		for (i = 0; i < 20; ++i) {
			getRndInteger(1, 466550);
			createWord(rows[i]);

		}
	})

	