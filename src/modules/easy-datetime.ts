//This function return a date in format string

import { generateFormat } from "../helpers/createFormat"
import { ISocialFormat } from "../interface/easyInterfaces"

type formatType = "short" | "long" //Type format return

export const getEasyDate = (date: Date, format: formatType): string=>{
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
export const getEasyFormat = (date: Date): ISocialFormat=>{
    const today = new Date()
    let format: string | undefined = '';
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
    format = generateFormat({
        seconds, minutes, hours, days, weeks, mounths, years
    })
    //...
    return {
        datetime: date,
        format,
        seconds,
        minutes,
        hours,
        days,
        weeks,
        mounths,
        years
    }
}  


