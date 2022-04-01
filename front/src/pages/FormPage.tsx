import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { InputSringField, InputNumberField, InputCheckboxField, InputDateField, InputNote } from '../components/InputFields';
import dayjs from 'dayjs';

const FormPage: FC = () => {
  const [name, setName] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState<null | number>(null)
  const [vin, setVin] = useState("")
  const [company, setCompany] = useState("")
  const [note, setNote] = useState("")
  const [rightHand, setRightHand] = useState(false)
  const [currency, setCurrency] = useState("")
  const [price, setPrice] = useState<null | number>(null)
  const [phone, setPhone] = useState("")
  const [ein, setEin] = useState("")
  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  const navigate = useNavigate()

  const createCar = async () => {
    try {
      if (!name || !model || !currency || !price || !phone || !ein || !dateFrom) {
        throw new SyntaxError("Данные некорректны");
      }
      
      await axios.post(`http://localhost:3004/cars`, {
        name: name,
        model: model,
        year: year,
        vin: vin,
        company: company,
        note: note,
        rightHand: rightHand,
        currency: currency,
        price: price,
        phone: phone,
        ein: ein,
        dateFrom: dayjs( dateFrom).format('DD.MM.YYYY'),
        dateTo: dayjs(dateTo).format('DD.MM.YYYY'),
      })

      navigate("/")
    } catch (error) {
      console.log(error)
    }
    
  }



  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <div className='flex flex-row my-9'>
        <InputSringField header={'Name'} type={"text"} valueString={name} onChange={(event) => setName(event.target.value) } />
        <InputSringField header={'Model'} type={"text"} valueString={model} onChange={(event) => setModel(event.target.value) }/>
        <InputNumberField header={'Year'} type={"text"} valueNumber={year} onChange={(event) => setYear(Number(event.target.value)) }/>
        <InputSringField header={'Company'} type={"text"} valueString={company} onChange={(event) => setCompany(event.target.value) }/>
      </div>
      <div className='flex flex-row my-9'>
        <InputCheckboxField header={'Right Hand'} type={"checkbox"} valueBoolean={rightHand} onChange={(event) => setRightHand(Boolean(event.target.value))}/>
        <InputNumberField header={'Price'} type={"text"} valueNumber={price} onChange={(event) => setPrice(Number(event.target.value)) }/>
        <InputSringField header={'Currency'} type={"text"} valueString={currency} onChange={(event) => setCurrency(event.target.value) }/>
        <InputSringField header={'Phone'} type={"text"} valueString={phone} onChange={(event) => setPhone(event.target.value)} />
        <InputSringField header={'EIN'} type={"text"} valueString={ein} onChange={(event) => setEin(event.target.value) }/>
      </div>
      <div className='flex flex-row my-9'>
        <InputNote header={'Note'} type={"text"} valueNote={note || ""} onChange={(event) => setNote(event.target.value)}/>
        <InputSringField header={'VIN'} type={"text"} valueString={vin} onChange={(event) => setVin(event.target.value)} />
        <InputDateField header={'Returned'} selected={dateTo} onChange={(date: Date) => setDateTo(date)} />
        <InputDateField header={'Taken'} selected={dateFrom} onChange={(date: Date) => setDateFrom(date)} />
      </div>
      <button onClick={createCar}  className="border-2 border-blue-500 hover:border-500 rounded-none px-2">Save</button>
    </div>
  )
}

export default FormPage