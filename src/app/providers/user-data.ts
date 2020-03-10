import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from './api.service';

declare var Msal;

@Injectable({
  providedIn: 'root'
})
export class UserData {
  ctsSalesApi: string = 'http://183.91.11.56:3002/v1/oauth/password';
  ctsSalesApiViaAzureToken: string = 'http://183.91.11.56:3002/v1/oauth/token';
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  ACCESS_TOKEN = 'access_token';
  ACCESS_USER = 'access_user';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public storage: Storage,
    public apiService: ApiService
  ) { }

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  getToken() {
    return this.storage.get(this.ACCESS_TOKEN);
  }

  removeToken() {
    return this.storage.remove(this.ACCESS_TOKEN);
  }

  azureAdLogin(): Promise<any> {
    return new Promise((r, j) => {
      // Config object to be passed to Msal on creation
      const msalConfig = {
        auth: {
          clientId: "f8e09e93-4632-42c9-b8bb-a5352872051a",
          authority: "https://login.microsoftonline.com/common",
          redirectUri: "http://183.91.11.56:8002/",
        },
        cache: {
          cacheLocation: "sessionStorage", // This configures where your cache will be stored
          storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        }
      };

      const myMSALObj = new Msal.UserAgentApplication(msalConfig);
      // Add scopes for the id token to be used at Microsoft identity platform endpoints.
      const loginRequest = {
        scopes: ["openid", "profile", "User.Read"],
      };

      myMSALObj.loginPopup(loginRequest)
        .then((loginResponse) => {
          console.log('loginPopup', loginResponse);
          const tokenRequest = {
            scopes: ["User.Read"]
          };

          myMSALObj.acquireTokenSilent(tokenRequest)
            .then(async (tokenResponse) => {
              // Callback code here
              console.log('acquireTokenSilent', tokenResponse.accessToken);
              this.postWithExternalToken(this.ctsSalesApiViaAzureToken, tokenResponse.accessToken, null).then(async (res) => {
                console.log('postWithExternalToken', res);
                if (!res || res.statusMessage != 'success' || !res.body || !res.body.access_token) {
                  r(false);
                  return;
                }
                let arr = [
                  this.storage.set(this.HAS_LOGGED_IN, true),
                  this.storage.set(this.ACCESS_TOKEN, res.body.access_token),
                ];
                await Promise.all(arr).then(async () => {
                  this.setUsername(res.body.userInfo.username);
                  window.dispatchEvent(new CustomEvent('user:login'));
                });
                r(true);
              });
              return;
            }).catch((err) => {
              if (err && err.status == 401) {
                window.dispatchEvent(new CustomEvent('user:must-logout'));
                r(null);
                return;
              }
              if (!navigator.onLine) {
                alert('Check your internet connection');
                r(null);
                return;
              }
              if (err) {
                r(err);
                return;
              }
              r(null);
            });

        }).catch(function (err) {
          if (err && err.status == 401) {
            window.dispatchEvent(new CustomEvent('user:must-logout'));
            r(null);
            return;
          }
          if (!navigator.onLine) {
            alert('Check your internet connection');
            r(null);
            return;
          }
          if (err) {
            r(err);
            return;
          }
          r(null);
        });
    });
  }

  login(username: string, password: string): Promise<any> {
    const request = { username: username, password: password };
    return this.apiService.post(this.ctsSalesApi, request, null).then((res) => {
      if (!res || res.statusMessage != 'success' || !res.body || !res.body.access_token) {
        return Promise.resolve(false);
      }
      let arr = [
        this.storage.set(this.HAS_LOGGED_IN, true),
        this.storage.set(this.ACCESS_TOKEN, res.body.access_token),
      ];
      return Promise.all(arr).then(async () => {
        this.setUsername(username);
        return window.dispatchEvent(new CustomEvent('user:login'));
      });
    });
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(async () => {
      return Promise.all([this.removeToken(), this.storage.remove('username')]);
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }

  async patchWithToken(url: string, body: any, tryCount: number = 0): Promise<any> {
    const token = await this.getToken();
    return this.apiService.patch(url, body, token, tryCount);
  }

  async deleteWithToken(url: string, tryCount: number = 0): Promise<any> {
    const token = await this.getToken();
    return this.apiService.del(url, token, tryCount);
  }

  async postWithToken(url: string, body: any, tryCount: number = 0): Promise<any> {
    const token = await this.getToken();
    return this.apiService.post(url, body, token, tryCount);
  }

  async postWithExternalToken(url: string, externalToken: string, body: any, tryCount: number = 0): Promise<any> {
    return this.apiService.post(url, body, externalToken, tryCount);
  }

  async getWithToken(url: string, tryCount: number = 0): Promise<any> {
    const token = await this.getToken();
    return this.apiService.get(url, token, tryCount);
  }
}
