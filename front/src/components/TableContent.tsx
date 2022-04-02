import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableCell from './TableCell'
import { Car } from '../types'
import TimeSpan from './TimeSpan'
import RightHand from './RightHand'
import Pagination from './Pagination'
import HandleModal from './HandleModal'


const carsPerPage = 10

const TableContent: FC = () => {
  
  const [cars, setCars] = useState<Car[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalCars, setTotalCars] = useState<number>(0)

  const paginate = async (pageNumber: number) => {
    const result = await axios.get(`http://localhost:3004/cars?_page=${pageNumber}&_limit=10`)
    setCars(result.data);
    setCurrentPage(pageNumber)
    setTotalCars(Number(result.headers['x-total-count']))
    console.log(result.headers)
  }
  

  useEffect(() => { 
    paginate(currentPage)
  }, [currentPage]) 






   
  const deleteCar = async (id: any) => {
    // const response = await axios.delete(`http://localhost:3004/cars/${id}`)
    // const result = await axios.get(`http://localhost:3004/cars`)
    // setCars(result.data);
    // console.log(response);
    // console.log(response.data);
    
    
    const a = axios.delete(`http://localhost:3004/cars/${id}`).then((response) => {
      console.log(response);
      return axios.get(`http://localhost:3004/cars`);
    }).then((result) => {
      setCars(result.data)
    }).catch((error) => {
      console.log(error)
    })
  
    console.log(a);
    
    
  }

  
 
  
  return (
    <div>
      {cars && cars.map((item, index) => (
        <div className={`flex flex-row w-fit ${index % 2 ? 'bg-sky-100' : 'bg-white'}`} key={item.id} >
          <div className='flex flex-direction:row w-[4rem] items-center justify-center hover:bg-regal-blue'>
              <HandleModal deleteCar={() => deleteCar(item.id)} />
              <Link to={`/edit/${item.id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </Link>
          </div>
          <Link to={`/item/${item.id}`} className={`flex flex-row w-fit ${index % 2 ? 'bg-sky-100' : 'bg-white'} hover:bg-regal-blue`} >
            <TableCell text={item.id} w={3} />
            <TableCell text={item.name} w={10}/>
            <TableCell text={item.model} w={10}/>
            <TableCell text={item.year} w={3}/>
            <TableCell text={item.vin} w={15}/>
            <TableCell text={item.company} w={10}/>
            <RightHand item={item} />
            <TableCell text={item.phone} w={15}/>
            <TableCell text={item.dateFrom as string} w={12}/>
            <TableCell text={item.dateTo as string} w={12}/>
            <TimeSpan item={item} />
          </Link>
        </div>  
      ))}
      {cars.length && 
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          carsPerPage={carsPerPage}
          totalCars={totalCars}
        />
      }
        
    </div>
  )
}

export default TableContent