import React, { Component } from 'react'

 class ContactList extends Component {

    contact_handler = (contact) => {
        this.props.selected_Contacts(contact)
    }
  render() {
    return (
      <div className='container'>
        <h1>ContactList</h1>
        <pre>{JSON.stringify(this.props)}</pre>
    
        <div className="row">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        this.props.contacts.map((contact) => { return <tr key={contact.login.uuid} onMouseOver={this.contact_handler.bind(this, contact)}>
                            <td>{contact.login.uuid.substr(32)}</td>
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>

                            <td>{contact.location.city}</td>
                        </tr>
                        })
                }
                </tbody>
            </table>
        </div>
    </div>
    )
  }
}

export default ContactList