import * as easyDateTime from './modules/easy-datetime'

type langType = "ESP" | "ENG"
type formatType = "short" | "long"

class EasyDateTime {
  getEasyDate(date: Date, format: formatType = "short", lang: langType = "ENG"){
    return easyDateTime.getEasyDate(date, format, lang)
  }

  getEasyTime(date: Date){
    return easyDateTime.getEasyTime(date)
  }

  getEasyFormat(date:Date){
    return easyDateTime.getEasyFormat(date)
  }

  getEasyStructure(date: Date){
    return easyDateTime.getEasyDateTimeStructure(date)
  }
}