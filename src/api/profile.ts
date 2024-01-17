import { _getAPI, _postAPI, _postUploadAPI, baseAPI } from "./common";

export async function getProfileAPI(token?: any): Promise<any> {

    const url = `${baseAPI}/user/profile`
    return await _getAPI(token || '', {}, url)

}


export async function updateProfileAPI(data: any): Promise<any> {

    const url = `${baseAPI}/user/update`
    return await _postAPI('', data, url)

}


export async function updatePasswordAPI(data: any): Promise<any> {

    const url = `${baseAPI}/user/change-pass`
    return await _postAPI('', data, url)

}


export async function updateAvatarAPI(data: any): Promise<any> {

    const url = `${baseAPI}/user/update-avatar`
    return await _postAPI('', data, url)

}

export async function uploadPhotoAPI(data: any): Promise<any> {

    const url = `${baseAPI}/media/photo`
    let formData = new FormData();
    formData.append('photo', data);
    return await _postUploadAPI('', formData, url)

}

export async function uploadVideoAPI(data: any): Promise<any> {

    const url = `${baseAPI}/media/video`
    let formData = new FormData();
    formData.append('file', data);
    return await _postUploadAPI('',formData, url)

}
