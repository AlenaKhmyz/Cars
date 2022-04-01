import { FC, useState } from 'react'
import { Link} from 'react-router-dom';

interface Props {
  deleteCar: React.MouseEventHandler<HTMLButtonElement>
}

const HandleModal: FC<Props> = ({deleteCar}) => {
  const [show, setShow] = useState(false);

  const handleModalClose = (e: any) => {
    setShow(false);
  }; 

  const handleModalOpen = () => {
    setShow(true);
  };
  
  return (
    <div>
      <div hidden={!show}>
        <div className="fixed my-[23px] mx-[23px] bg-red-800 h-[50px] w-[50px]">
          <button className="flex items-center" onClick={deleteCar}><p>Delete</p></button>
          <button onClick={handleModalClose}><p>Close</p></button>
        </div>
      </div>
    
      <button className="rounded-md" onClick={handleModalOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      </button>
  </div>
  )
}

export default HandleModal