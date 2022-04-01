import { FC } from 'react';

type PropsHead = {
  head: string
  className: string
}
export const NameCol: FC<PropsHead> = ({ head, className }) => {
  return (
    <div className={className}>
      <h3>{head}</h3>
    </div>
  )
}