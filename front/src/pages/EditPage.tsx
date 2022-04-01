import { FC, useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom'
import { Car } from '../types'
import {InputEditString, InputEditNumber, InputEditNote, InputEditCheckbox, InputEditDate} from '../components/InputFields'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
const EditPage: FC = () => {
  const navigate = useNavigate()
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
    }

    fetchAPI()
  }, [id])

  const editCar = async () => {
    await axios.patch(`http://localhost:3004/cars/${id}`, {
      name: machine.name,
      model: machine.model,
      year: machine.year,
      vin: machine.vin,
      company: machine.company,
      note: machine.note,
      rightHand: machine.rightHand,
      currency: machine.currency,
      price: machine.price,
      phone: machine.phone,
      ein: machine.ein,
      dateFrom: dayjs( machine.dateFrom).format('DD.MM.YYYY'),
      dateTo: dayjs( machine.dateTo).format('DD.MM.YYYY')
    })
     navigate(-1)
  }

  
  
  console.log(machine.dateTo, dayjs(machine.dateTo, "DD.MM.YYYY"))
  
  
  return (
    <div>
      <p>{machine.id}</p>
      <InputEditString valueString={machine.name} type={"text"} onChange={(event) => setMachine({...machine, name: event.target.value})} />
      <InputEditString valueString={machine.model } type={"text"} onChange={(event) => setMachine({...machine, model: event.target.value})}/>
      <InputEditNumber valueNumber={machine.year } type={"text"} onChange={(event) => setMachine({...machine, year:   Number(event.target.value)})}/>
      <InputEditString valueString={machine.vin || ""} type={"text"} onChange={(event) => setMachine({...machine, vin: event.target.value})} />
      <InputEditString valueString={machine.company} type={"text"} onChange={(event) => setMachine({...machine, company: event.target.value})}/>
      <InputEditString valueString={machine.currency} type={"text"} onChange={(event) => setMachine({...machine, currency: event.target.value})} />
      <InputEditNote type={"text"} valueNote={machine.note || ""} onChange={(event) => setMachine({...machine, note: event.target.value})} />
      <InputEditCheckbox type={"checkbox"} valueBoolean={machine.rightHand} onChange={(event) => setMachine({...machine, rightHand: event.target.checked})}/>
      <InputEditNumber valueNumber={machine.price } type={"text"} onChange={(event) => setMachine({...machine, price: Number (event.target.value)})}/>
      <InputEditString valueString={machine.phone} type={"text"} onChange={(event) => setMachine({...machine, phone: event.target.value})}/>
      <InputEditString valueString={machine.ein} type={"text"} onChange={(event) => setMachine({...machine, ein: event.target.value})} />
      {machine.dateTo && <InputEditDate selected={dayjs(machine.dateTo, "DD.MM.YYYY").toDate()} onChange={(date) => setMachine({...machine, dateTo: date})} />}
      {machine.dateFrom && <InputEditDate selected={dayjs(machine.dateFrom, "DD.MM.YYYY").toDate()} onChange={(date) => setMachine({ ...machine, dateFrom: date })} />}
      <button onClick={editCar}>Save</button>
    </div>

    
  )
}

export default EditPage