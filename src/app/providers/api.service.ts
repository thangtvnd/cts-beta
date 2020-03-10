// tslint:disable-next-line: max-line-length
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class ApiService {

    constructor(
        private http: HttpClient
        ) {
    }

    post(url: string, body: any, token: any, tryCount: number = 0): Promise<any> {
        return new Promise((r) => {
            if (tryCount == 3) {
                r(null);
                return;
            }
            let headers = new HttpHeaders({'Content-Type': 'application/json'});
            if (token) {
                headers = headers.append('Authorization', token);
            }
            const option = {
                headers: headers,
                timeout: 20000
              };
            this.http.post(url, body, option).subscribe((res) => {
                if (!res) {
                    r(null);
                    return;
                }
                const data = res;
                if (res['data']) {
                    r(res['data']);
                    return;
                }
                r(data);
            }, (err) => {
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

    patch(url: string, body: any, token: any, tryCount: number = 0): Promise<any> {
        return new Promise((r) => {
            if (tryCount == 3) {
                r(null);
                return;
            }
            let headers = new HttpHeaders({'Content-Type': 'application/json'});
            if (token) {
                headers = headers.append('Authorization', token);
            }
            const option = {
                headers: headers,
                timeout: 20000
              };
            this.http.patch(url, body, option).subscribe((res) => {
                if (!res) {
                    r(null);
                    return;
                }
                const data = res;
                if (res['data']) {
                    r(res['data']);
                    return;
                }
                r(data);
            }, (err) => {
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

    del(url: string, token: any, tryCount: number = 0): Promise<any> {
        return new Promise((r) => {
            if (tryCount == 3) {
                r(null);
                return;
            }
            let headers = new HttpHeaders({'Content-Type': 'application/json'});
            if (token) {
                headers = headers.append('Authorization', token);
            }
            const option = {
                headers: headers,
                timeout: 20000
              };
            this.http.delete(url, option).subscribe((res) => {
                if (!res) {
                    r(null);
                    return;
                }
                const data = res;
                if (res['data']) {
                    r(res['data']);
                    return;
                }
                r(data);
            }, (err) => {
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

    get(url: string, token: any, tryCount: number = 0): Promise<any> {
        return new Promise((r) => {
            if (tryCount == 3) {
                r(null);
                return;
            }
            let headers = new HttpHeaders({'Content-Type': 'application/json'});
            if (token) {
                headers = headers.append('Authorization', token);
            }
            const option = {
                headers: headers,
                timeout: 20000
            };
            this.http.get(url, option).subscribe((res) => {
                if (!res) {
                    r(null);
                    return;
                }
                const data = res;
                if (res['data']) {
                    r(res['data']);
                    return;
                }
                r(data);
            }, (err) => {
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
}
