import React from 'react'

const UserTable = ({data}) => {

  return (
    <table className="table">
  <thead>
    <tr>
      {/* <th scope="col">Sr.No.</th> */}

      <th scope="col">Name</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Email</th>
      <th scope="col">EPPCount</th>
      <th scope="col">Action</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {data.map(item=>(
        <tr key={item.UserID}>
        {/* <td >1</td> */}
        <td>{item.FirstName}  {item.LastName}</td>
        <td>{item.MobileNo}</td>
        <td>{item.EmailID}</td>
        <td>{item.EPPCount}</td>
        <td><button >&#x2b;</button></td>
        <td>&#x270F;</td>      
      </tr>
    ))}
  </tbody>
</table>
  )
}

export default UserTable