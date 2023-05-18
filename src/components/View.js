import { React, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Admin.css'
import { Link, useNavigate } from 'react-router-dom';



import { useParams } from 'react-router-dom';
import axios from 'axios';


function View() {
 const [employee,setEmployee]=useState({})

  const params = useParams()
  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getAnEmp/' + params.id)
    setEmployee(result.data.employee)

    // console.log(id);
    // console.log(uname);
    // console.log(age);

  }

  useEffect(() => {
    fetchEmp()
  }, [])
  return (
    <div>
      <h2 >
        <i class="fa-solid fa-house-user me-3"></i>
        Employee Management App</h2>


      <p >The best employees are constantly looking for new ways to improve themselves and contribute more to the
        company. They listen, take feedback seriously and are open minded when presented with new ideas. They aren't
        afraid to ask questions and seek help when needed.</p>

      <Card className='w-50 container ' >
        <Card.Img variant="top" src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" />
        <Card.Body>
          <Card.Title className="cardTitle text-center"><h3>Employee name is {employee.uname}</h3></Card.Title>
         
        </Card.Body>
        <ListGroup className="list-group-flush border-0 text-center mb-5">
        <ListGroup.Item> Designation <strong className='fs-4'>{employee.designation}</strong></ListGroup.Item>

          <ListGroup.Item>Age {employee.age}</ListGroup.Item>
          <ListGroup.Item>Salary {employee.salary}</ListGroup.Item>


        </ListGroup>
        
      </Card>
    </div>
  )
}

export default View