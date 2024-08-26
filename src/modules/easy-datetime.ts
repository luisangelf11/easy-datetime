import { generateFormatEng, generateFormatEsp } from "../helpers/createFormat"
import { IStructureDateTime } from "../interface/easyInterfaces"

//This function return a date in format string
type formatType = "short" | "long" //Type format return

export const getEasyDate = (date: Date, format: formatType = "short"): string=>{
    if(format === "short"){
        return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    }else{
        return `${date.toDateString()}`
    }
}

//This fuction return a time in format string
export const getEasyTime = (date: Date): string=>
     `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}${date.getHours() >= 12 ? "PM": "AM"}`

//This function return a format datetime like posts social media
type langType = "ESP" | "ENG"

export const getEasyFormat = (date: Date, lang: langType = "ENG"): string | undefined=>{
    const today = new Date()
    //Get timeStamp
    const stampToday = today.getTime()
    const stampDate = date.getTime() 
    //Get seconds, minutes, hours, days, weeks, mounths, years
    const seconds = Math.floor((stampToday - stampDate) / (1000));
    const minutes = Math.floor((stampToday - stampDate) / (1000 * 60));
    const hours = Math.floor((stampToday - stampDate) / (1000 * 60 * 60))
    const days = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24))
    const weeks = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24 * 7))
    const mounths = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24 * 30))
    const years = Math.floor((stampToday - stampDate) / ((1000 * 60 * 60 * 24 * 365)))
    //Validate format
    if(lang === "ENG")
   return generateFormatEng({
        seconds, minutes, hours, days, weeks, mounths, years
    })
    else return generateFormatEsp({ seconds, minutes, hours, days, weeks, mounths, years})
}  

//This function return a objetct with the structure of the datetime
export const getEasyDateTimeStructure = (date: Date): IStructureDateTime=>{
    const today = new Date()
    //Get timeStamp
    const stampToday = today.getTime()
    const stampDate = date.getTime() 
    //Get seconds, minutes, hours, days, weeks, mounths, years
    const seconds = Math.floor((stampToday - stampDate) / (1000));
    const minutes = Math.floor((stampToday - stampDate) / (1000 * 60));
    const hours = Math.floor((stampToday - stampDate) / (1000 * 60 * 60))
    const days = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24))
    const weeks = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24 * 7))
    const mounths = Math.floor((stampToday - stampDate) / (1000 * 60 * 60 * 24 * 30))
    const years = Math.floor((stampToday - stampDate) / ((1000 * 60 * 60 * 24 * 365)))

    return {
        datetime: date,
        seconds,
        minutes,
        hours,
        days,
        weeks,
        mounths,
        years
    }
}
