import axiosInstance from "./axios";

export const baseAPI = process.env.NEXT_PUBLIC_MOBILE_API || "https://api-dev.realcoin.network"
export const baseWalletAPI = process.env.NEXT_PUBLIC_WALLET_API || "https://wallet-dev.realcoin.network"

export async function _getAPI(token: any, data: any, url: string): Promise<any> {
    const config = token ? {
        headers: { Authorization: `Bearer ${token}` }
    } : {};
    const query = new URLSearchParams(data).toString();
    
    return await axiosInstance.get(
        `${url || baseAPI}?${query}`,
        config
    )
        .then(response => {
            return response.data;
        })
        .then(data => {
            //console.log(data)
            return data;
        })
        .catch(error => {
            console.log(error?.response?.data);
            return error?.response?.data;
        })
}

export async function _postAPI(token: any, data: any, url: string): Promise<any> {
    const config = token ? {
        headers: { Authorization: `Bearer ${token}` }
    } : {};

    return await axiosInstance.post(
        `${url || baseAPI}`,
        {
            ...data
        },
        config
    )
        .then(response => {
            return response.data;
        })
        .then(data => {
            //console.log(data)
            return data;
        })
        .catch(error => {
            console.log(error?.response?.data);
            return error?.response?.data;
        })
}

export async function _postUploadAPI(token: any, data: any, url: string): Promise<any> {
    const config = token ? {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': `multipart/form-data`,
        }
    } : {
        headers: {
            'Content-Type': `multipart/form-data`,
        }
    };

    return await axiosInstance.post(
        `${url || baseAPI}`,
        data
        ,
        config
    )
        .then(response => {
            return response.data;
        })
        .then(data => {
            //console.log(data)
            return data;
        })
        .catch(error => {
            console.log(error?.response?.data);
            return error?.response?.data;
        })
}

export async function sleep(ms: number): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}