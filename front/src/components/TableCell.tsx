import { FC } from 'react';

type Props = {
  text: string | number | null | boolean
  w?: number
}

const TableCell: FC<Props> = ({ text, w }) => {
  return (
    <div className={`border-x font-sans text-sm border-sky-100  flex items-center justify-center h-9 w-[${w}rem]`}>
      <p className={"flex items-center "}>{text}</p>
    </div>
  )
};

export default TableCell