export const formatDate = (dateString: string, type: "normal" | "jsonld" = "normal"): string => {
	const date = new Date(new Date(dateString).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const hours = String(date.getHours());
	const minutes = String(date.getMinutes());
	const secounds = String(date.getSeconds());

	if (type === "jsonld") {
		return `${year}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}T${("00" + hours).slice(-2)}:${("00" + minutes).slice(-2)}:${("00" + secounds).slice(-2)}+09:00`;
	}

	return `${year}/${month}/${day}`;
};
