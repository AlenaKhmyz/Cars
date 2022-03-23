import { useEffect, useState, FC } from 'react'
import axios from 'axios';

import TableContent from './TableContent';
import TableHeader from './TableHeader'
import HandleModal from './HandleModal';
import {Car} from '../types'

const Router: FC = () => {
  let [cars, setCars] = useState<Car[]>([])

  useEffect(() => { 
    async function fetchAPI() {
      const result = await axios.get(`http://localhost:3004/cars`)
      setCars(result.data);
    }
    fetchAPI()
  }, [])
  
  return (
    <div>
      <div className='w-full'>
        <TableHeader />
        <TableContent cars={cars} />
      </div>
      {/* <HandleModal /> модальное окно, которое показывается при удалении или редактировании */}
      <button className="border-2 border-blue-500 hover:border-500 rounded-none">+Add item</button>
    </div>
   
 )
}

export default Router