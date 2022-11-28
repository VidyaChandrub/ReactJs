import React from "react";
import Example2 from "./Example2";
/* class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  export default ShoppingList */

  
  /* let Example1 = () => {
     let name = "vidya";
     let Age = 20;
     let Details = {
      height : "4 inch",
      weight : "45 kg"
     }
     let phone = [8088285266,8050177651]

     return <>
             <Example2 na={name} age={Age} det={Details} ph={phone}/>
            </>

  }
  export default Example1  */

/*   class Example1 extends React.Component{

    message = "Good Morning";
    details = {
                name : "bharu",
                class : "1st bcom",
              }
    location = ['bangalore','hyderabad']
      render(){
                  return <>
                        
                        <Example2 msg={this.message} det={this.details} loc={this.location} />
                        </>
              }
  }
  export default Example1 */

  let Example1 = () => {
   let message = "Good afternoon";
   let Employee = {
    emp_name : "Padma",
    emp_sal : 45000,
   }
   let phone = [3,8]

   return <>
           <Example2 msg={message} emp={Employee} ph={phone} />
          </>
   }
  export default Example1