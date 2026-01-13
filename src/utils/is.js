const userAgent = window.navigator.userAgent;
const UA = userAgent.toLowerCase();
/** Check if Android system */
export const isAndroid = UA.indexOf('android') > -1;
/** Check if iOS system */
export const isIOS = /iphone|ipad|ipod|ios/.test(UA);
/** Check if mobile device */
export const isMobile = isIOS || isAndroid;

