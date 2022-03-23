import { FC } from 'react';

type Props = {
  text: string | number | null | boolean
  w?: number
}

const TableCell: FC<Props> = ({ text, w=20 }) => {
  return (
    <div className={`border border-blue-300 h-9 w-[${w}rem]`}>
      <p>{text}</p>
    </div>
  )
};

export default TableCell