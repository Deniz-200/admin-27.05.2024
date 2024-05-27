import React from 'react'
import CustomTable from '../components/CustomTable'
import TableRow from '../components/TableRow'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    const [info, setinfo] = useState([])
    useEffect(() => {
axios.get('http://localhost:3000/api/').then(
    res => setinfo(res.data)
)
    }, [])
    
  return (
    <>
<CustomTable>
{info.map((el)=><TableRow id={el.id} name={el.name} price={el.price}/>)}
</CustomTable>

<Link to='/add'><button className='btnAdd'>Add New Item</button></Link>
    </>
  )
}

export default Admin
