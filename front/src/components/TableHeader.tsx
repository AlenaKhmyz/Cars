import { FC } from 'react'

const TableHeader: FC = () => {
  return (
    <div className="flex flex-row">
      <div className="border border-slate-300 ...">
        <h3></h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>id</h3>
      </div>
        <div className="border border-slate-300 ...">
        <h3>Name</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Model</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Year</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>VIN</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Company</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Right-Handed</h3>
      </div>
        <div className="border border-slate-300 ...">
      <h3>Phone</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Taken</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Returned</h3>
      </div>
      <div className="border border-slate-300 ...">
        <h3>Time span</h3>
      </div>
    </div>
  )
}

export default TableHeader