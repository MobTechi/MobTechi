export function redirectURL(url, isBlank = false) {
    isBlank ? window.open(url, '_blank') : window.open(url);
}