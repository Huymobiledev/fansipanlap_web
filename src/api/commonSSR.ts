import axiosInstance from "./axios";

export const baseAPI = process.env.NEXT_PUBLIC_MOBILE_API || "https://api-dev.carbonasean.net"

export async function _getAPISSR(token: any, data: any, url: string, lang?: string): Promise<any> {

    const query = new URLSearchParams(data).toString();

    const res = await fetch(`${url || baseAPI}?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-Lang': lang || 'en'
        }
    })
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json

}

export async function _postAPISSR(token: any, data: any, url: string): Promise<any> {
    const config = token ? {
        headers: { Authorization: `Bearer ${token}` }
    } : {};

    const res = await fetch(`${url || baseAPI}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}
