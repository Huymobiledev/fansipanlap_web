import { IAppConfig } from "@/@type/config";

export function isFacebookApp() {
    let is_webview = typeof window !== 'undefined' ? navigator.userAgent.toLowerCase().match(/android.*applewebkit(?=.*version)/) : false;
    let is_uiwebview = typeof window !== 'undefined' ? navigator.userAgent.toLowerCase().match(/\(ip.*applewebkit(?!.*(version|crios))/) : false;
    console.log('isWebview', is_webview);
    console.log('isUiWebview', is_uiwebview);
    return (is_uiwebview || is_webview) ? true : false;
}

export const shortAddress = (str: any) => {
    if (!str) {
        return ""
    }
    const len = str.length;
    const first = str.substring(0, 8)
    const last = str.substring(len - 4, len)
    return first + "..." + last
}

export const normalizeWord = (word: string) => {
    //console.log(word)
    if (!word) {
        return ''
    }
    return word.replace("'[", "").replace("]'", "").replace("\r", "").trimStart();
}

export const timeToSecond = (time: string) => {
    if (!time) {
        return undefined;
    }
    const arr = time.replace("'", "").split(":");
    return parseFloat(arr[0]) * 60 + parseFloat(arr[1])
}

export const parseLyric = (text: string) => {
    if (!text) {
        return undefined;
    }
    let result: any[][] = []
    const arr = text.split("\n");
    if (arr) {
        arr.map((line) => {
            if (!line) {
                return
            }
            const word = line.trim().split(',')
            if (!word[0]) {
                return
            }
            const wordNormal = [timeToSecond(word[0]), timeToSecond(word[1]), normalizeWord(word[2].toString())]
            result.push(wordNormal);
        })
    }
    return result
}

export const convertHashPath = (text: string) => {
    if (!text) {
        return 1;
    }
    switch (text) {
        case 'collection':
            return 3;
        case 'newsong':
            return 1;
        case 'youtube':
            return 2;

        default:
            return 1
    }
}

export const formatNumber = (value: any, decimal?: number) => {

    const number = parseFloat(value)

    if (!number) {
        return '0'
    }

    return number.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimal || 0,
    })
}

export const formatDuration = (second: number) => {
    if (!second)
        return '00:00'
    return `${Math.floor(second / 60)?.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })}:${(second % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0,
        useGrouping: false
    })}`
}


export const mySongState: { [value: number]: string } = {
    0: 'Expired',
    1: 'Complete',
    2: 'Pending'
}

export const formatDateTime = (str: string) => {
    const date = new Date(str)
    if (date) {
        return date.toLocaleDateString() + ' - ' + date.toLocaleTimeString(undefined, { hour12: false });
    }
    return ''
}

export const formatDateHM = (str: string) => {
    const date = new Date(str)
    if (date) {
        return formatDate(str) + ' - ' + date.toLocaleTimeString([], { hour12: false, hour: "2-digit", minute: "2-digit" })
    }
    return ''
}

export const formatDate = (str: string) => {
    const date = new Date(str)
    if (date) {
        var year = date.toLocaleString(undefined, { year: "numeric" });
        var month = date.toLocaleString(undefined, { month: "2-digit" });
        var day = date.toLocaleString(undefined, { day: "2-digit" });
        return year + "/" + month + "/" + day;
    }
    return ''
}

export const unixToTime = (timeStamp: number) => {
    if (!timeStamp) {
        return ''
    }
    const minute = Math.floor(timeStamp / (1000 * 60))
    const second = Math.floor((timeStamp - minute * 1000 * 60) / 1000)
    return ((minute ? `${minute} ${minute > 1 ? 'minutes' : 'minute'} ` : '') + (second ? `${second} seconds` : '0 second'));

}

export function capitalizeFirstLetter(inputString: string) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export const formatTimeChat = (str: string) => {
    const date = new Date(str)
    if (date) {
        return date.toLocaleTimeString()
    }
    return ''
}

export const formatToNow = (str: string) => {
    const timeStamp = new Date(str).getTime() - new Date().getTime()
    if (timeStamp > 0) {
        const day = Math.floor(timeStamp / (1000 * 60 * 60 * 24))
        const hour = Math.floor(timeStamp / (1000 * 60 * 60))
        const minute = Math.floor(timeStamp / (1000 * 60))
        const second = Math.floor(timeStamp / (1000))

        if (day) {
            return day > 1 ? `${day} days` : `${day} day`
        }
        if (hour) {
            return hour > 1 ? `${hour} hours` : `${hour} hour`
        }
        if (minute) {
            return minute > 1 ? `${minute} minutes` : `${minute} minute`
        }
        if (second) {
            return second > 1 ? `${second} seconds` : `${second} second`
        }
    } else
        return ''
}

export const formatToNowLeft = (value: number) => {
    const timeStamp = value
    if (timeStamp > 0) {
        const day = Math.floor(timeStamp / (1000 * 60 * 60 * 24))
        const hour = Math.floor(timeStamp / (1000 * 60 * 60))
        const minute = Math.floor(timeStamp / (1000 * 60))
        const second = Math.floor(timeStamp / (1000))

        if (day) {
            return day > 1 ? `${day} days` : `${day} day`
        }
        if (hour) {
            return hour > 1 ? `${hour} hours` : `${hour} hour`
        }
        if (minute) {
            return minute > 1 ? `${minute} minutes` : `${minute} minute`
        }
        if (second) {
            return second > 1 ? `${second} seconds` : `${second} second`
        }
    } else
        return ''
}

export const fixUrlImage = (str: string) => {
    const domain = 'https://aivm.singsing.net/record_files/'
    if (str && str.includes('https://')) {
        return str
    } else {
        return domain + str
    }
}

export const decimalCount = (num: number) => {
    // Convert to String
    const numStr = String(num);
    // String Contains Decimal
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    };
    // String Does Not Contain Decimal
    return 0;
}

export const formatSymbol = (value: string) => {
    switch (value) {
        case 'SINGBUSD':
            return 'SING/BUSD'
        case 'BUSDSING':
            return 'BUSD/SING'
    }

}
export const isValidPhoneNumber = (phoneNumber: string) => {
    const validationPattern = /^(?:\+{0,1})(\d{1,4})(\d{6,12})$/g;
    return !!phoneNumber.match(validationPattern);
};


export const isValidPassword = (value: string) => {
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/gm
    const rs = regex.test(value)
    console.log(value, rs)
    return !!rs
}


export const secureEmail = (email: string) => {
    if (!email || !email.includes('@')) {
        return email;
    }
    let username = email.split('@')[0];
    let domain = email.split('@')[1];
    username = username.slice(0, Math.floor(username.length / 2)) + '*'.repeat(username.length - Math.floor(username.length / 2));
    return username + "@" + domain;
}

export const limitText = (text: string, num: number) => {
    if (!text || !num) {
        return '';
    }
    return text.slice(0, num) + '...'
}


export const detectInputAudioPermissions = async () => {
    const constraints = {
        audio: true
    };
    try {
        const stream = await navigator.mediaDevices?.getUserMedia?.(constraints);
        if (stream) {
            for (const track of stream.getTracks()) {
                track.stop();
            }
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export function distanceGEO(lat1: number, lon1: number, lat2: number, lon2: number) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344 //convert to Km
        return dist;
    }
}


export const checkUrl = (url: string, list: string[]) => {
    if (list?.length) {
        for (let i = 0; i < list.length; i++) {
            if (url === list[i]) {
                return true
            }
            if (list[i].includes('*') && url.startsWith(list[i].slice(0, -1))) {
                return true
            }
        }
    }
    return false
}



export const getBackgroundColor = (router: string) => {
    //console.log(router)
    if (router.startsWith('/marketplace')) {
        return `url(/assets/background/circle-2.svg) no-repeat`
    }

    if (router.startsWith('/login') || router.startsWith('/forget-password')) {
        return `url(/assets/background/circle-3.svg) no-repeat`
    }

    return `#fff`
}
