//时间格式转换
export function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}
export function replyCount(num) {
    var length = num.toString().length
    var array = [
        num,
        num,
        num,
        '999+',
        '1w+',
        '10w+',
    ]
    return array[length-1]
}

export function text(data){
    data = JSON.stringify(data).split('\\n\\n')
    var str = ''
    for(let item of data){
        str+='<p>'+ item +'</p>'
    }
    return str
}