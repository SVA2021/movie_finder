export const normalizeDateString = (date: number): string => {
	return (date < 10) ? '0' + String(date) : String(date);
}

export const getTimeFromNum = (num: number | null): string => {
	if (num === null) return '';
	let hours = Math.floor(num % 60);
	let minutes = num % 60;

	return (hours === 0) ? `${minutes}мин ` : `${hours}ч ${minutes}мин`;
}

export const getColorFromRate = (num: number | null): string => {
	if (num === null) return '';
	if (num <= 0 || num > 10) return 'white';
	if (num >= 8) return 'green';
	if (num >= 6) return 'orange';
	return 'red';
}