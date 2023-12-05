export const getToken = () => {
    const cookieName = `accessToken=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}

export const setToken = (token) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 1 * 24 * 60 * 60 * 1000);
    document.cookie = `accessToken=${token};expires=${expires.toUTCString()};path=/`;
}

export const removeToken = () => {
    document.cookie = `accessToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

