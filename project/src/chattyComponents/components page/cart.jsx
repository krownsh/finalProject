import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import Navbar from '../../components/repeatability/Navbar';
import axios from 'axios';
import Cartcard from '../components item/cartcard';
import '../css/cart.css';
// import img from '../../img/'

var getemail = localStorage.getItem('email');
class Cart extends Component {
    state = {
        cart: [],
        restaurantName: ''
    }

    totalPrice = () => {
        const totalPrice = this.state.cart.map(cartt => cartt.mount * parseInt(cartt.cost))
            .reduce((a, value) => a + value, 0)
        return totalPrice
    }

    stateChg = async () => {
        await axios.get("http://localhost//ourPHPFinalproject/ChtProject/cart/getallcart1.php").then((response) => {
            this.setState({
                cart: response.data,
            });

        })
        console.log(this.state.cart);

    }

    doPayment = () => {
        if (getemail) {
            try {
                const ordert = {
                    restaurantId: this.state.cart[0].restaurantId,
                    uid: localStorage.getItem('uid'),
                    cost: $('#cartTotal').text(),
                    freight: $('#freight').text(),
                    orderdetails: this.state.cart
                }
                // console.log(ordert);
                // const { id, menuItemId, restaurantId, restaurantName, dish, type, picture, cost } = this.props.cart;
                axios.post("http://localhost//ourPHPFinalproject/ChtProject/order/inorder.php", ordert)
                    .then((response) => {
                        console.log(response.data);
                        // localStorage.setItem()
                        window.location = `http://localhost:3000/payment/${response.data}`;
                    })
                // window.location = "http://localhost:3000/payment";
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('請先登入!')
            window.location = 'http://localhost:3000/loginComsumer';
        }
    }

    // isempty() {
    //     alert(' 目前購物車是空的! 請前往選購 ! ');
    //     window.location = 'http://localhost:3000/foodpandapage';
    // }

    async componentDidMount() {
        $('#cartBar').hide();
        await axios.get("http://localhost/ourPHPFinalproject/ChtProject/cart/getallcart1.php").then((response) => {
            this.setState({
                cart: response.data,
                restaurantName: response.data[0].restaurantName
            });

        })
        console.log(this.state.cart);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <br /><br /><br />
                <div className="container p-5" style={{border:'3px solid rgb(0, 40, 79)',borderRadius:'50px'}}>
                    <div className='text-center'>
                        <span className='h1 '><strong >購物車</strong></span><br></br><br></br>
                        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        <span className='h4 mt-2'><u>{this.state.restaurantName}</u></span>
                    </div>
                    <div className='menutailBar row text-right mt-4'>
                        <div className='col-2'>品項快照</div>
                        <div className='col-3'>品項</div>
                        <div className='col-2'>單價</div>
                        <div className='col-2'>數量</div>
                        <div className='col-2'>金額</div>
                        <div className='col-1'></div>
                    </div>
                    <hr />

                    <div>
                        {this.state.cart.map((c) => {
                            return (
                                <Cartcard
                                    key={c.id}
                                    cart={c}
                                    func={this.stateChg}
                                />
                            )
                        })}

                    </div>

                </div>

                {/* 小計 */}
                <div className='container'>
                    <div className="row">
                        <div className="col-10 text-right">
                            <p><span>小計：</span></p>
                            <p><span>外送服務費：</span></p>
                            <p><span>總計：</span></p>
                        </div>
                        <div className="col text-right">
                            <p>$<span>{this.totalPrice()}</span></p>
                            <p>$<span id='freight'>39</span></p>
                            <p>$<span id='cartTotal'>{this.totalPrice() + 39}</span></p>
                        </div>
                        <div className='col-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col' ></div>
                        <div className="col-2  ">
                            {/* <NavLink to="/payment"> */}
                            <button className='fancy btn-block'
                                onClick={this.doPayment}>
                                <span className="top-key"></span>
                                <span className="text text-center">點我結帳</span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>

                            </button>
                            {/* </NavLink> */}
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
                
                <div id='cartfooter'></div>

                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default Cart;