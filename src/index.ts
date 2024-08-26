import {getEasyDate, getEasyTime, getEasyFormat, getEasyDateTimeStructure} from './modules/easy-datetime'

const today = new Date('2024-08-24T19:09:03')
console.log(getEasyDateTimeStructure(today))
console.log(getEasyFormat(today))
console.log(getEasyDate(today, "long"))


