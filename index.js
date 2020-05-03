window.onload = function () {
	let currentIndex = 76;
	const x = 9;
	const y = 9;
	const squares = document.querySelectorAll(".grid div");
	const carsLeft = document.querySelectorAll(".car-left");
	const carsRight = document.querySelectorAll(".car-right");
	const logsRight = document.querySelectorAll(".log-right");
	const logsLeft = document.querySelectorAll(".log-left");

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
		carsRight.forEach((carRight) => moveCarsRigt(carRight));
		carsLeft.forEach((carLeft) => moveCarsRigt(carRight));
	}

	function moveCarsRight(carRight) {
		switch (true) {
			case carRight.classList.contains("c1"):
				carRight.classList.remove("c1");
				carRight.classList.add("c2");
			case carRight.classList.contains("c2"):
				carRight.classList.remove("c2");
				carRight.classList.add("c3");
			case carRight.classList.contains("c3"):
				carRight.classList.remove("c3");
				carRight.classList.add("c1");
		}
	}

	function moveCarsLeft(carLeft) {
		switch (true) {
			case carLeft.classList.contains("c1"):
				carLeft.classList.remove("c1");
				carLeft.classList.add("c3");
			case carLeft.classList.contains("c2"):
				carLeft.classList.remove("c2");
				carLeft.classList.add("c1");
			case carLeft.classList.contains("c3"):
				carLeft.classList.remove("c3");
				carLeft.classList.add("c2");
		}
	}

	function moveLogs() {}

	document.addEventListener("keydown", moveFrog);
};
