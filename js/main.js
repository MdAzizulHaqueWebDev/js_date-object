const milisecondsInput = document.querySelector("#miliseconds-input");
const localeCell = document.querySelector("#locale-cell");
const utcCell = document.querySelector("#utc-cell");
const isoCell = document.querySelector("#iso-cell");
const localeTimer = document.querySelector(".locale-timer");
const utcTimer = document.querySelector(".utc-timer");

milisecondsInput.addEventListener("submit", function (ev) {
	ev.preventDefault();
	const form = new FormData(ev.target);
	const inputValue = form.get("miliseconds");
	if (inputValue.includes("e") || !inputValue.length) {
		return alert("Pls provide Only numeric value");
	}
	try {
		localeCell.textContent = new Date(+inputValue).toLocaleString();
		utcCell.textContent = new Date(+inputValue).toUTCString();
		isoCell.textContent = new Date(+inputValue).toISOString();
	} catch (error) {
		alert(error.message);
	}
});

// get olds
const dateofbirthForm = document.querySelector("#dateOfBirth");
const oldsCell = document.querySelector("#olds-cell");
const monthsCell = document.querySelector("#months-cell");
const weeksCell = document.querySelector("#weeks-cell");
const daysCell = document.querySelector("#days-cell");
const hoursCell = document.querySelector("#hours-cell");
const minutesCell = document.querySelector("#minutes-cell");
const secondsCell = document.querySelector("#seconds-cell");
dateofbirthForm.addEventListener("submit", function (events) {
	events.preventDefault();
	const form = new FormData(events.target);
	const dateOfBirth = form.get("date-of-birth");
	try {
		const years = (
			(Date.now() - new Date(dateOfBirth)) /
			1000 /
			60 /
			60 /
			24 /
			365
		).toFixed(2);
		if (years == "NaN") {
			return alert("Your given date format not matched");
		}
		oldsCell.textContent = years;
		monthsCell.textContent = years * 12;
		weeksCell.textContent = years * 12 * 4;
		daysCell.textContent = years * 12 * 30;
		hoursCell.textContent = years * 12 * 30 * 24;
		minutesCell.textContent = years * 12 * 30 * 24 * 60;
		secondsCell.textContent = years * 12 * 30 * 24 * 60 * 60;
	} catch (error) {
		alert(error.message);
	}
});

const showOldsContainer = document.querySelector("#show-get-olds");
document
	.querySelector("#get-old-diag-btn")
	.addEventListener("click", function (events) {
		events.stopPropagation();
		showOldsContainer.show();
	});
document
	.querySelector("#close-diag")
	.addEventListener("click", function name() {
		showOldsContainer.close();
	});

function timer() {
	const date = new Date();
	const localTime = date.toLocaleTimeString("en", { hour12: true });
	localeTimer.textContent = localTime;

	const utcTime = date.toLocaleTimeString("en-GB", {
		timeZone: "UTC",
		hour12: false,
	});
	utcTimer.textContent = utcTime;
}
setInterval(timer, 1000);

window.onload = timer;
