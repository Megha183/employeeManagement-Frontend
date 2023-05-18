import {React,useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Add.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';


function Edit() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)

  const params=useParams()

  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/'+ params.id)
    setId(result.data.employee.id)
    setUname(result.data.employee.uname)
    setAge(result.data.employee.age)
    setDesig(result.data.employee.designation)
    setSalary(result.data.employee.salary)

    console.log(id);
    console.log(uname);
    console.log(age);

  }
  const location=useNavigate()
   const handleUpdate=async (e)=>{
    e.preventDefault()
    const body={
     id,
      uname,
      age,
      desig,
      salary
    }
   const result=await axios.post('http://localhost:8000/editEmp',body)
   console.log(result.data);
   alert(result.data.message)
   location('/')
   }
  useEffect(()=>{
    fetchEmp()
  },[])
  return (
    <div>
    <h2 >
        <i class="fa-solid fa-house-user me-3"></i>
        Employee Management App</h2>
      <p >The best employees are constantly looking for new ways to improve themselves and contribute more to the
        company. They listen, take feedback seriously and are open minded when presented with new ideas. They aren't
        afraid to ask questions and seek help when needed.</p>
      <div className='form w-50 mx-auto border pt-3 p-5 mt-5' >
        <h4 className='mt-1 text-center' >Edit Employee</h4>

        <Form style={{border:'none'}} >
          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Label>User name</Form.Label>
            <Form.Control className='input'type="text" placeholder="" value={uname} 
            onChange={(e)=>setUname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control className='input' type="text" placeholder="" value={age} 
            onChange={(e)=>setAge(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Designation</Form.Label>
            <Form.Control className='input' type="text" placeholder="" value={desig} 
            onChange={(e)=>setDesig(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Salary</Form.Label>
          <Form.Control className='input'  type="text" placeholder="" value={salary}
          onChange={(e)=>setSalary(e.target.value)} />
        </Form.Group>
        <div className=' button-container '>
          <Button onClick={(e)=>handleUpdate(e)}  className='add' variant="success">update</Button>
         <Link to={'/'}> <Button className='cancel' variant="info">Cancel</Button></Link>
        </div>

      </Form>
    </div>


    </div>
  )
}

export default Edit