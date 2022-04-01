import { useState, FC } from 'react'
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';


import TableContent from '../components/TableContent';
import TableHeader from '../components/TableHeader'
import { ROUTES } from '../const/Routes';



const HomePage: FC = () => {
  return (
    <div>
      <div className='w-full'>
        <TableHeader />
        <TableContent />
        <Link to={ROUTES.FORM} className="border-2 border-blue-500 hover:border-500 rounded-none">+Add item</Link>
      </div>
    </div>
   
 )
}

export default HomePage