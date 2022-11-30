import React from 'react'
import employees from './data'


class Employee extends React.Component{
    render(){
        return(
            <div className='container'>
               
                <pre>{JSON.stringify(employees)}</pre>
                <div className='row'>
                    <div className='col-md-9'>
                        <table className='table table-hover'>
                            <thead className='bg-danger text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Gender</th>
                                    <th>Ip Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((emp) =>{
                                        return( 
                                        <tr>
                                        <td>{emp.id}</td>
                                        <td>{emp.first_name}</td>
                                        <td>{emp.last_name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.ip_address}</td>
                                    </tr> );
                                    })
                                   }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Employee 