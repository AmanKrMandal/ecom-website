import React from 'react'
import "./CheckOut.css"
import doll from "../../Image/doll.png"

const CheckOut = () => {
    return (
        <main style={{ margin: "50px" }}>
            <section>
                <div style={{ textAlign: "start", fontWeight: "700", fontSize: "15px", textTransform: "uppercase", marginBottom: "20px" }}><span style={{ color: "#555555" }}>home /</span> shopping cart</div>
                <div>
                    <table >
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr className='table'></tr>
                        <tr>
                            <td><img src={doll} /></td>
                            <td style={{ color: "#555555", fontSize: "16px", fontWeight: "600" }}>Plain White Shirt</td>
                            <td>$29.00</td>
                            <td><span style={{ border: "2px solid #EBEBEB", padding: "7px 20px" }}>- 20 +</span></td>
                            <td style={{ color: "#227BFE" }}>$58.00</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section style={{ textAlign: "start", marginTop: "100px" }}>
                <div className='totals'>Cart Totals</div>
                <div>
                    <table style={{ marginLeft: "60px", color: "#555555" }}>
                        <tr>
                            <td>Subtotal</td>
                            <td>$58.00</td>
                        </tr>
                        <tr>
                            <td>Shipping Free</td>
                            <td>FREE!!!</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$58.00</td>
                        </tr>
                    </table>
                </div>
                <button className='check'>Proceed to Checkout</button>
            </section>
        </main >
    )
}

export default CheckOut
