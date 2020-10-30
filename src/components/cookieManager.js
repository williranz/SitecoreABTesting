import Cookies from 'js-cookie';

const CookieName = 'user-session';

export default class CookieManager {
  
    static get cookieName() {
    return CookieName;
  }

  static setCookie(value) {
    if (!Cookies.get(this.cookieName)) {
      Cookies.set(this.cookieName, value);
    }
  }

  static getCookie() {   
    return Cookies.get(this.cookieName);   
  }
}