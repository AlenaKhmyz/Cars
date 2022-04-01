import { FC } from 'react';
import { Item } from '../types'
import TableCell from './TableCell';

const RightHand: FC<Item> = ({ item }) => {
  const boolRightHanded = item.rightHand === true ? '✔' : '✖' 
  return (
    <TableCell text={boolRightHanded} w={4}/>
  )
  
  
};

export default RightHand;