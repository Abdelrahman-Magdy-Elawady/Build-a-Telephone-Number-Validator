document.addEventListener("DOMContentLoaded", () => {
	const check = document.querySelector("#check-btn");
	const clear = document.querySelector("#clear-btn");
	const input = document.querySelector("#user-input");
	const result = document.querySelector("#results-div");

	const handler = () => {
		const inputvalue = input.value;
		if (inputvalue === "") {
			alert("Please provide a phone number");
		} else {
			result.textContent = validator(inputvalue) + inputvalue;
		}
	};
	const validator = (inputText) => {
		const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
		if (regex.test(inputText)) {
			return "Valid US number: ";
		} else {
			return "Invalid US number: ";
		}
	};

	check.addEventListener("click", handler);

	input.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			handler();
		}
	});
	clear.addEventListener("click", () => {
		result.textContent = "";
	});
});
