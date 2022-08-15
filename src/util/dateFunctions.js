export function getDate() {
	var d = new Date(),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
}

export function getDateMinusOne(date) {
	var d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + (d.getDate() - 1),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
}
