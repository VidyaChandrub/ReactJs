import React from "react";

class Product extends React.Component{
state = {
     product_Name : "ZEBRONICS Zeb-Pixa Play",
     product_Image : "https://rukminim1.flixcart.com/image/416/416/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
     product_Price : 10399,
     product_qty : 1,
     total : 0
}
incrHandler = () =>{
    this.setState({product_qty : this.state.product_qty + 1})
}
decrHandler = () =>{
    this.setState({product_qty : this.state.product_qty - 1})
}
render(){
    return <> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody  valign="middle">
                                    <tr  >
                                    <td >{this.state.product_Name}</td>
                                    <td><img src={this.state.product_Image} height="40px" weight="40px"/></td>
                                    <td>{this.state.product_Price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.product_qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                    <td>{this.state.product_qty * this.state.product_Price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
    
    
           </>
}

}
export default Product