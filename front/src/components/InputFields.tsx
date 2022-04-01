import { ChangeEvent, FC } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//-----------Props For Add-------------------------
type PropsString = {
  header: string 
  type: string
  valueString: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void 
  w?: number
}

type PropsNumber = {
  header: string 
  type: string
  valueNumber: any
  onChange: (event: ChangeEvent<HTMLInputElement>) => void 
  w?: number
}

type PropsBoolean = {
  header: string 
  type: string
  valueBoolean: any
  onChange: (event: ChangeEvent<HTMLInputElement>) => void 
  w?: number
}

type PropsDate = {
  header: string 
  selected: Date
  onChange: (data: Date, event: ChangeEvent<HTMLDataElement>) => void 
  w?: number
}

type PropsNote = {
  header: string 
  type: string
  valueNote: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void 
  w?: number
}


//-----------Props For Edit-------------------------

type PropsEditString = {
  type: string
  valueString: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void 
  w?: number
}

type PropsEditNumber = {
  type: string
  valueNumber: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void 
  w?: number
}

type PropsEditBoolean = {
  type: string
  valueBoolean: any
  onChange: (event: ChangeEvent<HTMLInputElement>) => void 
  w?: number
}

type PropsEditDate = {
  selected: Date
  onChange: (data: Date, event: ChangeEvent<HTMLDataElement>) => void 
  w?: number
}

type PropsEditNote = {
  type: string
  valueNote: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void 
  w?: number
}


//------------For Add----------------------------------------------------------

export const InputSringField: FC<PropsString> = ({ header, w=20, type, valueString, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <p className='text-center my-2'>{header}</p>
      <input className={`border border-blue-300 px-1 h-9 w-[${w}rem]`} type={type} value={valueString} onChange={onChange}></input>
    </div>
  )
};

export const InputNumberField: FC<PropsNumber> = ({ header, w=20, type, valueNumber, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <p className='text-center my-2'>{header}</p>
      <input className={`border border-blue-300 px-1 h-9 w-[${w}rem]`} type={type} value={valueNumber} onChange={onChange}></input>
    </div>
  )
};

export const InputCheckboxField: FC<PropsBoolean> = ({ header, w=3, type, valueBoolean, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <p className='text-center my-2'>{header}</p>
      <input className={`border border-blue-300 px-1 h-9 w-[${w}rem]`} type={type} value={valueBoolean} onChange={onChange}></input>
    </div>
  )
};

export const InputDateField: FC<PropsDate> = ({ header, w=20, selected, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <p className='text-center my-2'>{header}</p>
      <DatePicker selected={selected} onChange={onChange} />
    </div>
  )
};

export const InputNote: FC<PropsNote> = ({ header, w=20, type, valueNote, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <p className='text-center my-2'>{header}</p>
      <textarea rows={4} cols={45} name={type} className={`border border-blue-300 px-1 py-1`} value={valueNote} onChange={onChange}></textarea>
    </div>
  )
};

//------------For Edit----------------------------------------------------------

export const InputEditString: FC<PropsEditString> = ({ w=20, type, valueString, onChange }) => {
  return (
    <div className='flex flex-col mx-4  '>
      <input className={`border  border-blue-300 px-1 hover:border-blue-300 px-1 h-9 w-[${w}rem]`} type={type} value={valueString} onChange={onChange}></input>
    </div>
  )
};

export const InputEditNumber: FC<PropsEditNumber> = ({w=20, type, valueNumber, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <input className={`border-none hover:border-blue-300 px-1 h-9 w-[${w}rem]`} type={type} value={valueNumber} onChange={onChange}></input>
    </div>
  )
};

export const InputEditCheckbox: FC<PropsEditBoolean> = ({w=3, type, valueBoolean, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <input className={`border-none hover:border-blue-300 px-1 h-9 w-[${w}rem]`} type={type} value={valueBoolean} onChange={onChange}></input>
    </div>
  )
};

export const InputEditDate: FC<PropsEditDate> = ({selected, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <DatePicker selected={selected} onChange={onChange} />
    </div>
  )
};

export const InputEditNote: FC<PropsEditNote> = ({w=20, type, valueNote, onChange }) => {
  return (
    <div className='flex flex-col mx-4'>
      <textarea rows={4} cols={45} name={type} className={`border-none hover:border-blue-300 px-1`} value={valueNote} onChange={onChange}></textarea>
    </div>
  )
};