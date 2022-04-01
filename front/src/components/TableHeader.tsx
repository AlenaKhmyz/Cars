import { FC } from 'react'
import { NameCol } from './NameCol'

const TableHeader: FC = () => {
  return (
    <div className="flex flex-row w-fit">
      <NameCol head={""} className="border border-white  italic font-semibold  bg-sky-100 flex items-center justify-center h-16 w-[4rem]"/>
      <NameCol head={"id"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[3rem]"/>
      <NameCol head={"Name"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[10rem]"/>
      <NameCol head={"Model"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[10rem]"/>
      <NameCol head={"Year"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[3rem]"/>
      <NameCol head={"VIN"} className="border border-white  italic font-semibold  bg-sky-100 flex items-center justify-center h-16 w-[15rem]"/>
      <NameCol head={"Company"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[10rem]"/>
      <NameCol head={"Right-hand"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center text-center h-16 w-[4rem]"/>
      <NameCol head={"Phone"} className="border border-white  italic font-semibold flex bg-sky-100 items-center justify-center h-16 w-[15rem]"/>
      <NameCol head={"Taken"} className="border border-white  italic font-semibold flex bg-sky-100 items-center justify-center h-16 w-[12rem]"/>
      <NameCol head={"Returned"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[12rem]"/>
      <NameCol head={"Time span"} className="border border-white  italic font-semibold bg-sky-100 flex items-center justify-center h-16 w-[15rem]"/>
    </div>
  )
}

export default TableHeader