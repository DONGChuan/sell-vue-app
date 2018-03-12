export function formatDate(date, fmt) {
    let dateString = '';
    if (/(y+)/.test(fmt)) {
        dateString = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = String(o[k]);
            dateString = dateString.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return dateString;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
