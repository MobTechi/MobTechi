// util constants
export const SORTING_TYPES = {
    ascending: 'asc',
    descending: 'desc'
}

// util fuctions
/**
 * @function redirectURL
 * This Method is used to redirect the given URL
 */
export function redirectURL(url, isBlank = false) {
    isBlank ? window.open(url, '_blank') : window.open(url);
}

/**
 * @function sortByNumber
 * This Method is used to sort by number
 */
export function sortByNumber(array, sortingKey, sortingType) {
    return array.sort((a, b) =>
        SORTING_TYPES.ascending === sortingType
            ? Number(a[sortingKey]) - Number(b[sortingKey])
            : Number(b[sortingKey]) - Number(a[sortingKey])
    );
}
