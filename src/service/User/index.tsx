import Api from "@/service/Api";
import { apiUrl } from "@/constants/config";
import { LoginRequest, RegisterRequest } from "@/types/api";

export async function register(data: RegisterRequest) {
    const res = await Api({
        method: "POST",
        url: `${apiUrl}/api/user/register`,
        data,
    });
    return res;
}

export async function login(data: LoginRequest) {
    const res = await Api({
        method: "POST",
        url: `${apiUrl}/api/user/login`,
        data,
    });
    return res;
}

