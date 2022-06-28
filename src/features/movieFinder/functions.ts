export const normalizeDateString = (date: number): string => {
	let result;
	(date < 10) ? result = '0' + String(date) : result = String(date);
	return result;
}

export const convertNumToTime = (num: number | null): string => {
	let result;
	if (num === null) return '';
	let hours = Math.floor(num % 60);
	let minutes = num % 60;

	result = (hours === 0) ? `${minutes}мин ` : `${hours}ч ${minutes}мин`;
	return result;
}

export const convertRatingToColor = (num: number| null): string => {
	if (num === null) return '';
	if (num <= 0 || num > 10) return 'white';
	if (num >= 8) return 'green';
	if (num >= 6) return 'orange';
	return 'red';
}