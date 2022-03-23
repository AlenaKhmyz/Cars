import { FC, useState } from 'react';


const HandleModal: FC = () => {
   const [show, setShow] = useState(false);
   
  const handleModalClose = (e: any) => {
    const currentClass = e.target.className;

    if (currentClass === 'modal-card') {
      return;
    }

    setShow(false);
  }; 

  
  
  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <div
        hidden={!show}  
      >
        <div
          className="modal-background"
          onClick={handleModalClose}
        >
        <div className="modal-card"> 
        </div>
        </div>
      </div>
       <button className="border-2 border-blue-500 hover:border-500 rounded-none" onClick={handleModalOpen}>Delete</button>
    </div>
   
  )
}

export default HandleModal;