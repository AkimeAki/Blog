export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const year = String(date.getFullYear());
	const month = String(date.getMonth());
	const day = String(date.getDate());
	return `${year}/${month}/${day}`;
};
