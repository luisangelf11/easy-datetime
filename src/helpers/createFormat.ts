import { IConvert } from "../interface/easyInterfaces";

export const generateFormat =(value: IConvert):string | undefined=>{
    if(value.years >= 1) return`age ${value.years} ${value.years === 1? 'year': 'years'}`
    if(value.mounths >= 1) return`age ${value.mounths} ${value.mounths === 1? 'mounth': 'mounths'}`
    if(value.weeks >=1 ) return `age ${value.weeks} ${value.weeks === 1? 'week': 'weeks'}`
    if(value.days >=1 ) return `age ${value.days} ${value.days === 1? 'day': 'days'}`
    if(value.hours >=1 ) return `age ${value.hours} ${value.hours === 1? 'hour': 'hours'}`
    if(value.minutes >=1 ) return `age ${value.minutes} ${value.minutes === 1? 'minute': 'minutes'}`
    if(value.seconds >=30 ) return `age ${value.seconds} seconds`
    if(value.seconds >= 0) return `right now`
}