import React from "react";

let Product = () => {
let [product, setProduct] = React.useState({ p_Name : "SONY ZV-E10L Mirrorless Camera ",
                            image : "https://rukminim1.flixcart.com/image/416/416/ktlu9ow0/dslr-camera/r/y/j/alpha-zv-e10-24-2-megapixel-with-interchangeable-lens-aps-c-original-imag6wxxhxrv9htc.jpeg?q=70",
                            qty : 1,
                            price : 25000,
                            total : 0

})
    return <>
            <h1>Products</h1>
           <div className="container">
            <div className="row">
             <table className="table table-hover">
                <thead className="bg-success text-white">
                    <tr>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.p_Name}</td>
                        <td><img src={product.image} height="50px" /></td>
                        <td><i className="fa fa-minus-circle" onClick={() => {setProduct({...product, qty : product.qty - 1})}}></i>{product.qty}<i className="fa fa-plus-circle" onClick={() => {setProduct({...product, qty : product.qty + 1})}}></i></td>
                        <td>{product.price}</td>
                        <td>{product.qty * product.price}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
           </>
}
export default Product