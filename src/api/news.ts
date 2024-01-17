import { _getAPI, _postAPI, baseAPI } from "./common"

export async function getCategories(filter?: any) {

    const url = `${baseAPI}/category`
    const data = {
        ...filter
    }
    return await _getAPI('', data, url)
}


export async function getListNews(filter?: any) {

    const url = `${baseAPI}/article`
    const data = {
        ...filter
    }
    return await _getAPI('', data, url)
}

export async function getHotNewsAPI(filter?: any) {

    const url = `${baseAPI}/article/hot`
    const data = {
        ...filter
    }
    return await _getAPI('', data, url)
}

export async function getLatestNews(filter?: any) {

    const url = `${baseAPI}/article/latest`
    const data = {
        ...filter
    }
    return await _getAPI('', data, url)
}

export async function getNewsDetails(slug: string) {

    const url = `${baseAPI}/article/${slug}`

    return await _getAPI('', null, url)
}

export async function lockMyNftAPI(real_estate_id: string, qty: number) {

    const url = `${baseAPI}/real-estate/lock-nft`
    const data = real_estate_id ? {
        real_estate_id: real_estate_id,
        qty: qty
    } : {}
    return await _postAPI('', data, url)

}
