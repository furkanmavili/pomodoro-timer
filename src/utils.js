export function decideTime(mode) {
	switch (mode) {
		case "pomodoro":
			return 1500;
		case "short":
			return 300;
		case "long":
			return 900;
		default:
			return 1500;
	}
}
export function printableTime(count) {
	let minute = Math.floor(count / 60);
	let second = Math.floor(count % 60);
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	return `${minute}:${second}`;
}
