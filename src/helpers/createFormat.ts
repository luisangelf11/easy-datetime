import { IConvert } from "../interface/easyInterfaces";

export const generateFormatEng =(value: IConvert):string | undefined=>{
    if(value.years >= 1) return`${value.years} ${value.years === 1? 'year': 'years'}`
    if(value.months >= 1) return`${value.months} ${value.months === 1? 'month': 'months'}`
    if(value.weeks >=1 ) return `${value.weeks} ${value.weeks === 1? 'week': 'weeks'}`
    if(value.days >=1 ) return `${value.days} ${value.days === 1? 'day': 'days'}`
    if(value.hours >=1 ) return `${value.hours} ${value.hours === 1? 'hr': 'hrs'}`
    if(value.minutes >=1 ) return `${value.minutes} min`
    if(value.seconds >=30 ) return `${value.seconds} sec`
    if(value.seconds >= 0) return `right now`
}

export const generateFormatEsp =(value: IConvert):string | undefined=>{
    if(value.years >= 1) return`${value.years} ${value.years === 1? 'año': 'años'}`
    if(value.months >= 1) return`${value.months} ${value.months === 1? 'mes': 'meses'}`
    if(value.weeks >=1 ) return `${value.weeks} ${value.weeks === 1? 'semana': 'semanas'}`
    if(value.days >=1 ) return `${value.days} ${value.days === 1? 'día': 'días'}`
    if(value.hours >=1 ) return `${value.hours} ${value.hours === 1? 'hr': 'hrs'}`
    if(value.minutes >=1 ) return `${value.minutes} min`
    if(value.seconds >=30 ) return `${value.seconds} seg`
    if(value.seconds >= 0) return `justo ahora`
}