import {getEasyDate, getEasyTime, getEasyFormat, getEasyDateTimeStructure} from './modules/easy-datetime'

const today = new Date('2024-08-04T19:09:03')
console.log(getEasyDateTimeStructure(today))
console.log(getEasyFormat(today, "ESP"))
console.log(getEasyDate(today, "long", "ESP"))


