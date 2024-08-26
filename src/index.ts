import {getEasyDate, getEasyTime, getEasyFormat, getEasyDateTimeStructure} from './modules/easy-datetime'

const today = new Date('2024-08-24T20:10:00')
console.log(getEasyFormat(today))
console.log(getEasyFormat(today, "ESP"))
console.log(getEasyDateTimeStructure(today))


