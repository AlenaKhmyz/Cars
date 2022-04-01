import { FC, useState, useEffect } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { Car } from '../types'

const MachinePage: FC = () => {
  const [machine, setMachine] = useState<Car>({
    id: 0,
    name: "",
    model: "",
    year: 0,
    vin: "",
    company: "",
    note: "",
    rightHand: false,
    currency: "",
    price: 0,
    phone: "",
    ein: "",
    dateFrom: "",
    dateTo: "",
  })

  const { id } = useParams()
  useEffect(() => {
    const fetchAPI = async () => {
        
      const result = await axios.get(`http://localhost:3004/cars/${id}`)
        setMachine(result.data);
        console.log(result.data)
    }

    fetchAPI()
  }, [id])
  

  
  
  return (
    <div>
      <p>{machine.id}</p>
      <p>{machine.name}</p>
      <p>{machine.model}</p>
      <p>{machine.year}</p>
      <p>{machine.vin}</p>
      <p>{machine.company}</p>
      <p>{machine.note}</p>
      <p>{machine.rightHand}</p>
      <p>{machine.currency}</p>
      <p>{machine.price}</p>
      <p>{machine.phone}</p>
      <p>{machine.ein}</p>
      <p>{machine.dateFrom}</p>
      <p>{machine.dateTo}</p>
    </div>
  )
}

export default MachinePage