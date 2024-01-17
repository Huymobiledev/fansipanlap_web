import { _getAPI, _postAPI, baseAPI } from "./common"

export async function getHomeContentAPI() {

    const url = `${baseAPI}/app/home-contents`
    return await _getAPI('', undefined, url)

}


export async function getAboutContentAPI() {

    const url = `${baseAPI}/app/about-contents`
    return await _getAPI('', undefined, url)

}


export async function getServiceContentAPI() {

    const url = `${baseAPI}/app/service-contents`
    return await _getAPI('', undefined, url)

}
