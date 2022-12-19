import {TTopList} from "./features/movieFinder/movieFinderTypes";

export const normalizeDateString = (date: number): string => {
    return (date < 10) ? '0' + String(date) : String(date);
}

export const getTimeFromMinutes = (num: number | null | undefined): string => {
    if (!num) return '';
    let hh = Math.floor(num / 60);
    let mm = num % 60;

    return (hh === 0) ? `${mm}мин ` : `${hh}ч ${mm}м`;
}

export const getColorFromRate = (num: number | null): string => {
    if (num === null) return '';
    if (num <= 0 || num > 10) return 'white';
    if (num >= 8) return 'green';
    if (num >= 6) return 'orange';
    return 'red';
}

export const getRateFromString = (numberInString: number | string | null | undefined): number | null => {
    if (numberInString === null || !numberInString) return null;
    return typeof (numberInString) === 'string'
        ? numberInString?.includes('%')
            ? parseFloat(numberInString) / 10
            : Number(numberInString)
        : numberInString
}

export function normalizeTimeString(time: string | number | null): string | null {
    if (time === null || time === '') return null;
    const hh = String(time).slice(0, 2);
    const mm = String(time).slice(3, 5);
    return `${hh}ч${mm}м`
}

export function getTopListTitle(topFilmType: TTopList): string {
    switch (topFilmType) {
        case 'TOP_100_POPULAR_FILMS':
            return '100 самых популярных фильмов'
        case 'TOP_250_BEST_FILMS':
            return 'топ 250 фильмов кинопоиска'
        case 'TOP_AWAIT_FILMS':
            return 'самые ожидаемые фильмы'
    }
}

export function getTopListType(type: string | undefined | null): TTopList {
    if (type === 'TOP_100_POPULAR_FILMS' || type === 'TOP_250_BEST_FILMS' || type === 'TOP_AWAIT_FILMS') return type;
    return 'TOP_100_POPULAR_FILMS';
}