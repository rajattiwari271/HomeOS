import { useState } from 'react'

import './App.css'

function App() {

  const [applianceName,setApplianceName] = useState('')
  const [appliance,setAppliance] = useState([])
const [selectedCategory ,setSelectedCategory] = useState('Cooling')



function addAppliance(){
  if(applianceName.trim()===''){
    return 
  }
  setAppliance([...appliance,
    {
      name : applianceName.trim(),
    category : selectedCategory}
  ])
  setApplianceName('')
}

function deleteAppliance(index) {
  const updatedAppliance = appliance.filter((item,i)=>{
    return i !== index 
  })
  setAppliance(updatedAppliance)
}
  return (
    <>
    <div className='app'><aside>
      <h2>HomeOS</h2>
      <p>Manage your home appliances</p>
     <p className="nav-active">Dashboard</p>
      <p>My Appliances</p>
      <p>Maintenance</p>
      <p>Warranties</p>
      <p>Expenses</p>
      </aside>
      <main><h1>
        Good Morning!</h1>
        <p>Here's what's happening around your home today.</p>
        <input placeholder="Enter appliance name"
        value = {applianceName} 
         onChange={(e)=>setApplianceName(e.target.value)}/>
         <select value = {selectedCategory}
         onChange = {(e) =>setSelectedCategory(e.target.value)}>
          <option value="Cooling">Cooling</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Electronic">Electronics</option>
         </select>
        <button onClick={addAppliance }>Add Appliance</button>
        <div className='summary-grid'>
        <div className='summary-card'>
          <h3>Total Appliances</h3>
          <p className='card-value'>{appliance.length}</p>
          <p className='card-description'>Connected to your home</p>
          </div>
          <div className='summary-card'>
            <h3>Active Warranties</h3>
            <p className='card-value'>0</p>
            <p className='card-description' >Warranties currently valid</p>
          </div>
          <div className='summary-card'>
            <h3>Upcoming Maintenance</h3>
            <p className='card-value'>0</p>
            <p className='card-description'>Due this month</p>
          </div>
          <div className='summary-card'>
            <h3>Monthly Expenses</h3>
            <p className='card-value'>₹0</p>
            <p className='card-description'>This month</p>

          </div>
        </div>


        <h2>My Appliances</h2>
        <div className='appliance-list'>
          {appliance.length===0 ? (
            <p>No appliances added yet.</p>
          ):(
          appliance.map((item,index)=>(
            <div key={index} className='appliance-item'>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            <button onClick={()=>deleteAppliance(index)}>Delete</button></div>
          )
          ))}
          
        </div>


        <h2>Recent Activity</h2>
        <div className='activity-list'>
          <div className='activity-item'>
            <h3>AC maintenance completed</h3>
          <p className="activity-date">Today</p>
          </div>
          <div className='activity-item'>
            <h3>Washing Machine Maintenance scheduled</h3>
            <p className="activity-date">Tomorrow</p>
          </div>
          
        </div>
        </main>
      </div>
      
    </>
  )
}

export default App
