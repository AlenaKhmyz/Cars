import { FC } from 'react';
import { Item } from '../types'
import dayjs from 'dayjs'
import TableCell from './TableCell';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const differenceInMs = (dateFrom: string, dateTo: string): number => {
  return Math.abs(dayjs(dateFrom, "DD.MM.YYYY").valueOf() - dayjs(dateTo, "DD.MM.YYYY").valueOf()) 
}

const msToDays = (milliseconds: number): number => {
  return Math.round(milliseconds / 86_400_000)
}

const formatDate = (totalDays: number): string => {
  const years = Math.floor(totalDays / 366)
  const months = Math.floor((totalDays % 366) / 30)
  const days = months % 30
  let data = "~ "
  
  if (days === 0 && months === 0 && years === 0) {
    return '~ 1 day'
  } 

  if (years) {
    data = `${data} ${years} years`
  }

  if (months) {
    data = `${data} ${months} months`
  }

  if (days) {
    data = `${data} ${days} days`
  }
  
  return data
  
}

const TimeSpan: FC<Item> = ({ item }) => {
  const difference = differenceInMs(item.dateFrom as string, item.dateTo as string ||  dayjs().format("DD.MM.YYYY"))
  const days = msToDays(difference)
  return (
    <TableCell text={formatDate(days)} w={15}/>
  )
  
  
};

export default TimeSpan;