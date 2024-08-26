# EASY-DATETIME-YA

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/luisangelf11/easy-datetime)

Easy-DateTime-Ya is a library for get the format from a date objtect JavaScript. It is easy to use and allows us to work very quickly.

Repository: https://github.com/luisangelf11/easy-datetime
 

## Why use this library?

- Only need download for use
- Easy use
- English and Spanish results
- Short and long format date
- Relative date format

## Installation

Install the library with this command using npm

```sh
npm i easy-datetime-ya
```

## Methods

Below is a list of the methods available in the library.

| Method | Description |
| ------ | ------ |
| getEasyDate | return a date in short format or long format |
| getEasyTime | return a time format |
| getEasyDateTimeStructure | return a big object that contains hours, minutes, seconds and more |
| getEasyFormat | return a relative date format |

> Import using: `import { getEasyDate, getEasyTime, getEasyDateTimeStructure, getEasyFormat } from 'easy-datetime-ya'`

## getEasyDate

This functions has three params: date, format and lang.
| Prop | values | default |
| ------ | ------ | ------ | 
| date | yourObjectDate| this param is required|
| format | short or long | short|
| lang | ENG or ESP | ENG|

#### Example

```sh
import { getEasyDate } from 'easy-datetime-ya'

const myObjectDate = new Date('2024-08-24T18:55:10')

//use
console.log(getEasyDate(myObjectDate, "long", "ESP"))
console.log(getEasyDate(myObjectDate, "long"))
console.log(getEasyDate(myObjectDate))
console.log(getEasyDate(new Date('2024-08-24T18:55:10')))

//error type params
console.log(getEasyDate('2024-08-24T18:55:10'))
```

## getEasyTime

This function only receive a param and is the `yourObjectDate`

#### Example

```sh
import { getEasyTime } from 'easy-datetime-ya'

const myObjectDate = new Date('2024-08-24T18:55:10')

//use
console.log(getEasyTime(myObjectDate))
console.log(getEasyTime(new Date('2024-08-24T18:55:10')))

//error type params
console.log(getEasyTime('2024-08-24T18:55:10'))
```

## getEasyFormat

This functions has two params: date and lang.
| Prop | values | default |
| ------ | ------ | ------ | 
| date | yourObjectDate| this param is required|
| lang | ENG or ESP | ENG|

#### Example

```sh
import { getEasyFormat } from 'easy-datetime-ya'

const myObjectDate = new Date('2024-08-24T18:55:10')

//use
console.log(getEasyFormat(myObjectDate, "ESP")) 
console.log(getEasyFormat(myObjectDate))
console.log(getEasyFormat(new Date('2024-08-24T18:55:10')))

//error type params
console.log(getEasyFormat('2024-08-24T18:55:10'))
```

## getEasyDateTimeStructure

This function only receive a param and is the `yourObjectDate`

#### Example

```sh
import { getEasyDateTimeStructure } from 'easy-datetime-ya'

const myObjectDate = new Date('2024-08-24T18:55:10')

//use
console.log(getEasyDateTimeStructure(myObjectDate))
console.log(getEasyDateTimeStructure(new Date('2024-08-24T18:55:10')))

//error type params
console.log(getEasyDateTimeStructure('2024-08-24T18:55:10'))

```

#### Object Returned (Properties)

| Prop | type |
| ------ | ------ | 
| datetime | date| 
| seconds | number |
| minutes | number |
| hours | number |
| days | number |
| weeks | number |
| months | number |
| years | number |

## License

ISC

**By: Luis Angel Fernandez**