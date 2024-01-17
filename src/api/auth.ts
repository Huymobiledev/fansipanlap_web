import { _postAPI, baseAPI } from "./common";

export interface IPropsRegister {
    first_name: string
    last_name: string
    email: string
    password: string
    re_password: string
}
export async function registerAPI(data: IPropsRegister): Promise<any> {

    const url = `${baseAPI}/auth/register`
    return await _postAPI('', data, url)

}

export async function verifyEmailAPI(token: any, code: any): Promise<any> {

    const url = `${baseAPI}/auth/verify-account`
    const data = {
        code: String(code).trim()
    }
    return await _postAPI(token, data, url)

}

export async function resendVerifyCodeAPI(email: any): Promise<any> {

    const url = `${baseAPI}/auth/resend-otp`
    const data = {
        email: String(email).trim()
    }
    return await _postAPI('', data, url)

}


export async function loginAPI(data: any): Promise<any> {

    const url = `${baseAPI}/auth/login`
    const dt = {
        email: String(data?.email).trim(),
        password: String(data?.password).trim()
    }
    return await _postAPI('', dt, url)

}

export async function loginGoogleAPI(token: any): Promise<any> {

    const url = `${baseAPI}/auth/login/google`
    const dt = {
        token: String(token).trim(),
    }
    return await _postAPI('', dt, url)

}


export async function forgotPasswordAPI(email: any): Promise<any> {

    const url = `${baseAPI}/auth/forgot-password`
    const data = {
        email: String(email).trim()
    }
    return await _postAPI('', data, url)

}

export async function forgotPasswordCheckTokenAPI(token: any): Promise<any> {

    const url = `${baseAPI}/auth/forgot-password/check`
    const data = {
        token: String(token).trim()
    }
    return await _postAPI('', data, url)

}

export async function forgotPasswordUpdatePassAPI(token: any, password: any, re_password: any): Promise<any> {

    const url = `${baseAPI}/auth/forgot-password/update-password`
    const data = {
        token: String(token).trim(),
        password: password,
        re_password: re_password
    }
    return await _postAPI('', data, url)

}
