import { FC } from 'react'
import TableCell from './TableCell'
import { Car } from '../types'
import TimeSpan from './TimeSpan'
import RightHand from './RightHand'


interface Props {
  cars: Car[];
}

const TableContent: FC<Props> = ({ cars }) => {
  return (
    <div>
      {cars && cars.map((item) => (
        <div className="flex flex-row w-fit" key={item.id}>
          <div className="flex flex-direction:row border border-slate-300 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <TableCell text={item.id} />
          <TableCell text={item.name} />
          <TableCell text={item.model} />
          <TableCell text={item.year} />
          <TableCell text={item.vin} />
          <TableCell text={item.company} />
          <RightHand item={item} />
          <TableCell text={item.phone} />
          <TableCell text={item.dateFrom} />
          <TableCell text={item.dateTo} />
          <TimeSpan item={item} />
        </div>
      ))}
    </div>
  )
}

export default TableContent