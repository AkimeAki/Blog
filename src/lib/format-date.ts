export const formatDate = (dateString: string) => {
	const date = new Date(new Date(dateString).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const hours = String(date.getHours());
	const minutes = String(date.getMinutes());
	const secounds = String(date.getSeconds());
	const dayOfWeek = date.getDay();

	return {
		year: year,
		month: ("00" + month).slice(-2),
		date: ("00" + day).slice(-2),
		day: dayOfWeek,
		hour: ("00" + hours).slice(-2),
		minute: ("00" + minutes).slice(-2),
		secound: ("00" + secounds).slice(-2)
	};
};

export const getEmojiOfWeek = (dayOfWeek: number) => {
	switch (dayOfWeek) {
		case 0:
			return "☀️";
		case 1:
			return "🌙";
		case 2:
			return "🔥";
		case 3:
			return "💧";
		case 4:
			return "🌳";
		case 5:
			return "💰";
		case 6:
			return "🪐";
		default:
			return "🌈";
	}
};
