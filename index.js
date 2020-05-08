window.onload = function() {
	let currentIndex = 76;
	const x = 9;
	const y = 9;
	const squares = document.querySelectorAll(".grid div");
	const carsLeft = document.querySelectorAll(".car-left");
	const carsRight = document.querySelectorAll(".car-right");
	const logsRight = document.querySelectorAll(".log-right");
	const logsLeft = document.querySelectorAll(".log-left");
	let interval = 0;

	function moveFrog(e) {
		console.log(e.keyCode);
		squares[currentIndex].classList.remove("frog");
		switch (e.keyCode) {
			case 38: //up
				if (currentIndex - x >= 0) currentIndex -= x;
				break;
			case 40: //down
				if (currentIndex + x < x * y) currentIndex += x;
				break;
			case 37: //left
				if (currentIndex % x !== 0) currentIndex -= 1;
				break;
			case 39: //right
				if (currentIndex % x !== x - 1) currentIndex += 1;
				break;
		}
		squares[currentIndex].classList.add("frog");
	}

	function moveCars() {
		carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
		carsRight.forEach((carRight) => moveCarRight(carRight));
	}

	//move the car left on a time loop
	function moveCarLeft(carLeft) {
		switch (true) {
			case carLeft.classList.contains("c1"):
				carLeft.classList.remove("c1");
				carLeft.classList.add("c2");
				break;
			case carLeft.classList.contains("c2"):
				carLeft.classList.remove("c2");
				carLeft.classList.add("c3");
				break;
			case carLeft.classList.contains("c3"):
				carLeft.classList.remove("c3");
				carLeft.classList.add("c1");
				break;
		}
	}

	//move the car right on a time loop
	function moveCarRight(carRight) {
		switch (true) {
			case carRight.classList.contains("c1"):
				carRight.classList.remove("c1");
				carRight.classList.add("c3");
				break;
			case carRight.classList.contains("c2"):
				carRight.classList.remove("c2");
				carRight.classList.add("c1");
				break;
			case carRight.classList.contains("c3"):
				carRight.classList.remove("c3");
				carRight.classList.add("c2");
				break;
		}
	}

	function moveLogs() {}

	function start() {
		interval = setInterval(moveCars, 600);
	}

	document.getElementById("newGame").addEventListener("click", start);
	document.addEventListener("keydown", moveFrog);
};
