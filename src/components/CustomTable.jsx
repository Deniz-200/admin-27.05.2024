
const CustomTable = ({children}) => {
  return (
    <>
            <table>
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    name
                </th>
                <th>
                    price
                </th>
                <th>
                  Delete
                </th>
            </tr>
        </thead>
         <tbody>
{children}
        </tbody>
      </table>
    </>
  )
}

export default CustomTable
