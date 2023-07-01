// util constants
export const SORTING_TYPES = {
    ascending: 'asc',
    descending: 'desc'
}

// util fuctions

/**
 * @function getAppPlayStoreLink
 * This Method is used to get the app play store link
 */
export function getAppPlayStoreLink(appPackageName) {
  // Play store url
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=';
  return `${PLAY_STORE_URL}${appPackageName}`;
}

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
