
import { useState } from "react";

export function Menu() {


    const [show, setShow] = useState(false);
    const disdes = { display: show ? "block" : "none" };
    const [show1, setShow1] = useState(false);
    const dis = { display: show1 ? "block" : "none" };

    const btn = { fontSize: "1rem" };


    return (
        <section>

            <div className="header">


                <h2>Start Bootstrap</h2>
                <div className="dropdown">
                    <button onClick={() => setShow(!show)}><i class="fas fa-bars"></i> </button>

                </div>


            </div>
            <div className="vertical" style={disdes}>
                <ul>
                    <li ><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Shop<button onClick={() => setShow1(!show1)}><i className="fas fa-chevron-circle-down"></i></button></a>
                        <div style={dis}><ul>
                            <li><a href=" ">All Products</a></li><hr />
                            <li><a href=" ">Popular items</a></li>
                            <li><a href=" ">New Arrival</a></li>

                        </ul>
                        </div>

                        <div className="cartButton">
                            <button style={btn} ><i class="fas fa-cart-plus"></i>  cart  <span className="count">  </span></button>
                        </div>

                    </li>
                </ul>
            </div>


            <div className="Shopstyle">
                <p><h2>Shop in style</h2> <span className="home">with the shop homepage template</span></p>
            </div>
        </section>

    );
}
export function Box1() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Fancy<br /> Products</h2>
                <p>$40.00-<br />$80.00</p>
                <button className="btn1">View Options</button>
            </div>
        </div>
    );
}
export function Box2() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Special<br /> Items</h2>

                <p>⭐⭐⭐⭐⭐<br /><strike>$20.00</strike><br />$80.00</p>
                <button>View Options</button>
            </div>
        </div>
    );
}
export function Box3() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Sale Item</h2>

                <p><strike>$50.00</strike><br />$25.00</p>
                <button className="btn2"> to cart</button>
            </div >
        </div >
    );
}
export function Box4() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Popular<br /> Item</h2>

                <p>⭐⭐⭐⭐⭐<br />$40.00</p>
                <button>View Options</button>
            </div>
        </div>
    );
}
export function Box5() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Sale Item</h2>

                <p><strike>$20.00</strike><br />$25.00</p>
                <button className="btn3">Add to cart</button>
            </div>
        </div>
    );
}
export function Box6() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Fancy<br /> Products</h2>
                <p>$120.00-<br />$280.00</p>
                <button className="btn1">View Options</button>
            </div>
        </div>
    );
}
export function Box7() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Special<br /> Item</h2>

                <p>⭐⭐⭐⭐⭐<br /><strike>$20.00</strike><br />$18.00</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
}
export function Box8() {
    return (
        <div className="box">
            <div className="pic">

            </div>
            <div className="details">
                <h2>Popular<br /> Item</h2>

                <p>⭐⭐⭐⭐⭐<br />$40.00</p>
                <button className="btn1">Add to cart</button>
            </div>
        </div>
    );
}



