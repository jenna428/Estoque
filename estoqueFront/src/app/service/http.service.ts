import { Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";
import { CookieService } from "ngx-cookie-service";
import { LoginService } from "./login.service";

@Injectable({ providedIn: 'root' })
export class HttpService {
    private api: AxiosInstance;

    constructor(
        private readonly cookie: CookieService,
        private readonly loginService: LoginService
    ) {
        this.api = axios.create();

        this.setupInterceptors();
    }

    private setupInterceptors() {
        this.api.interceptors.request.use((config) => {
            const token = this.cookie.get(this.loginService.getAccessTokenKey());

            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        });
    }

    get<T>(url: string, config?: any) {
        return this.api.get<T>(url, config);
    }

    post<T>(url: string, data?: any, config?: any) {
        return this.api.post<T>(url, data, config);
    }

    put<T>(url: string, data?: any, config = {}) {
        return this.api.put<T>(url, data, config);
    }

    delete<T>(url: string, config = {}) {
        return this.api.delete<T>(url, config);
    }
}