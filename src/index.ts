import {getEasyDate, getEasyTime, getEasyFormat} from './modules/easy-datetime'

const today = new Date('2020-07-04T17:10:00')
console.log(getEasyFormat(today))
console.log(getEasyDate(today, "short"))
console.log(getEasyDate(today, "long"))
console.log(getEasyDate(today))
console.log(getEasyTime(today))

