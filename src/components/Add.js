import { React, useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Add.css'
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';



function Add() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)

  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])

  // create a object for the hook
  let location=useNavigate()

  const addEmployee =async (e) => {
    e.preventDefault()
    setId(uuid().slice(0,3));
  const body={
    id,
    uname,
    age,
    designation:desig,
    salary
  }
   console.log(body);

  const result=await axios.post('http://localhost:8000/addEmployee',body)
  alert(result.data.message)
  // console.log(result);
  location('/')

  }
  return (
    <div>
      <h2 >
        <i class="fa-solid fa-house-user me-3"></i>
        Employee Management App</h2>
      <p >The best employees are constantly looking for new ways to improve themselves and contribute more to the
        company. They listen, take feedback seriously and are open minded when presented with new ideas. They aren't
        afraid to ask questions and seek help when needed.</p>
      <div className='form w-50 mx-auto border pt-3 p-5 mt-5' >
        <h4 className='mt-1 text-center ' >Add New Employee</h4>

        <Form style={{border:'none'}} >
          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Label>User name</Form.Label>
            <Form.Control className='input' onChange={(e) => setUname(e.target.value)} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control className='input' onChange={(e) => setAge(e.target.value)} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Designation</Form.Label>
            <Form.Control className='input' onChange={(e) => setDesig(e.target.value)} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Salary</Form.Label>
            <Form.Control className='input' onChange={(e) => setSalary(e.target.value)} type="text" placeholder="" />
          </Form.Group>
          <div className=' button-container '>
            <Button onClick={(e) => addEmployee(e)} className='add' variant="success">Add</Button>
           <Link to={'/'}> <Button className='cancel' variant="info">Cancel</Button></Link>
          </div>

        </Form>
      </div>

    </div>
  )
}

export default Add