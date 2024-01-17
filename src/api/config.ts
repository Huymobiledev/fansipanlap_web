import { _getAPI, _postAPI, baseAPI } from "./common";

export async function getAppConfig() {

    const data = {
        os: 'android'
    }
    const url = `${baseAPI}/app/config`
    return await _getAPI('', data, url)
    
}

export async function getCarbonPrice(filter?: any) {

    const data = {
       ...filter
    }
    const url = `${baseAPI}/app/prices`
    return await _getAPI('', data, url)
    
}