import { environment } from "../../../environments/environment.development";

const serverIP = environment.apiUrl;
export const API = {
    auth: `${serverIP}/auth`,
    registation: `${serverIP}/register`
}

