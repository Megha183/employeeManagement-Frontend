import {React,useState,useEffect} from 'react'
import './Admin.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';



function Admin() {
  const [allEmployees,setAllEmployee]=useState([])

  const fetchData=async ()=>{
    const result=await axios.get('http://localhost:8000/getAllEmployee')
    // result.json().then(data=>{
    //   setAllEmployee(data.employees)
    // })
   setAllEmployee(result.data.employees);
  }
const handleDelete=async (id)=>{
  const  result=await axios.delete('http://localhost:8000/deleteEmployee/'+ id)
  console.log(result);
  alert(result.data.message)

  //to refresh that table content
  fetchData()
}
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div >
  
   <h2 >
    <i class="fa-solid fa-house-user me-3"></i>
   Employee Management App</h2>
  <Link to={'/add'}>
     <div className='text-center mt-4 me-4'> <button className='addEmp '>
     <i class="fa-solid fa-user-plus me-2"></i>Add Employee</button>
     </div>
  </Link>

   <p >The best employees are constantly looking for new ways to improve themselves and contribute more to the
    company. They listen, take feedback seriously and are open minded when presented with new ideas. They aren't 
    afraid to ask questions and seek help when needed.</p>
   <Table className='w-75 container text-dark' >
   <thead>
     <tr>
       <th>#</th>
       <th>Name</th>
       <th>Age</th>
       <th>Designation</th>
       <th>Salary</th>
       <th>Actions</th>
     </tr>
   </thead>
   <tbody>
   {
    allEmployees?.map((item,index)=>(
      <tr>
      
         <td>{index+1}</td>
         <td>{item.uname}</td>
         <td>{item.age}</td>
         <td>{item.designation}</td>
         <td>{item.salary}</td>
         <td>
         <Link to={'edit/'+item.id}><Button  variant="success"><i class="fa-solid fa-user-pen"></i></Button>{' '}</Link>
    <Link to={'view/'+item.id}> <Button className='ms-3' variant="info"><i class="fa-solid fa-book-open-reader me-2"></i>View</Button>{' '}</Link>
         <Button className='ms-3' variant="danger" onClick={()=>handleDelete(item.id)}>Delete</Button>{' '}
  
         </td>
       </tr>
       ))
   }
  
     <></>
   </tbody>
 </Table>
  </div>
  )
  }

export default Admin