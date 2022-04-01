import { FC } from 'react'
import { Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import { ROUTES } from '../const/Routes';

import FormPage from './FormPage';
import HomePage from './HomePage';
import MachinePage from './MachinePage'
import EditPage from './EditPage'

const Router: FC = () => {
  
  return (
    <BrowserRouter>
      <Routes>    
        <Route path={ROUTES.FORM} element={<FormPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ITEM} element={<MachinePage />} />
        <Route path={ROUTES.EDIT} element={<EditPage />} />
      </Routes>
     
    </BrowserRouter>
 )
}

export default Router