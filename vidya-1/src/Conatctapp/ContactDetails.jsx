import React, { Component } from 'react'

export class ContactDetails extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Contact Details</h1>
        <div className="row">
        <pre>{JSON.stringify(this.props)}</pre>
            <div className="col">
                <div className="card">
                    <div className="card-header">
                     <img src={this.props.user_sel_cnt.picture.large} /> 
                    </div>
                    <div className="card-header"></div>
                </div>
            </div>

        </div>
      </div>
    )
  }
}

export default ContactDetails