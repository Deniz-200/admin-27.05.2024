import React from 'react'
import axios from 'axios'
const TableRow = ({id,name,price}) => {

const deleteItem = (id)=> {
    axios.delete('http://localhost:3000/api/'+id)
}

  return (
    <>
             <tr>
                <td>
                    {id}
                </td>
                <td>
                    {name}
                </td> 
                <td>
                    {price}
                </td>
                <td>
                    <button onClick={()=>deleteItem(id)}>
                        Delete
                    </button>
                </td>
              </tr>
    </>
  )
}

export default TableRow
