import React from "react";
import Axios from "axios"
class User extends React.Component{
    state={
        users : []
    }
    componentDidMount (){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            this.setState({users : response.data})
        })
        .catch((err) => {
                console.log(err)
        })
    }
    
render(){
    return(
        <div>
            <pre>{JSON.stringify(this.state.users)}</pre>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER NAME</th>
                                <th>EMAIL</th>
                                <th>ADDDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.users.map((user) =>{
                                                                   return <tr key={user.id}>
                                                                    <td>{user.id}</td>
                                                                    <td>{user.username}</td>
                                                                    <td>{user.email}</td>
                                                                    <td>{user.address.street}</td>
                                                                </tr>
                                })
}
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
}
export default User 