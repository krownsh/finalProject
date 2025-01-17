import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import CheckCart from '../../chattyComponents/components item/checkCart';
import "./css/navbar.css";
import $ from 'jquery';

var getemail = localStorage.getItem('email');
var getcemail = localStorage.getItem('cemail');

class Navbar extends Component {
  state = {
    cartNum: 0
  }

  initCartNum = () => {
    Axios.get("http://localhost/ourPHPFinalproject/ChtProject/cart/getallcart1.php").then((res) => {
      // console.log(res.data);
      const carts = res.data || [];
      const cartNum = carts.map(cart => parseInt(cart.mount)).reduce((a, value) => a + value, 0);
      // console.log(cartNum);
      this.setState({ cartNum: cartNum });
      // return cartNum;
      // console.log(carts[0]);
    })
  }

  doLogout() {
    // 登出
    localStorage.clear();
    window.location = "http://localhost:3000/";

  }
 
  cartClick = () => {
    // console.log(this.state.cartNum);
    var num = parseInt(document.getElementById('cartNum').innerText);
    
    if (this.state.cartNum == 0 && num == 0) {
      alert('目前購物車是空的，請前往選購！');
      window.location = 'http://localhost:3000/sunsuafooddelivery';
    }
    else {
      window.location = 'http://localhost:3000/cart';
    }
  }

  async componentDidMount() {
    if (getemail) {
      //消費者登入狀態
      $('#login').attr('style', 'display:none');
      $('#logout').attr('style', 'display:block');
    }
    else if(getcemail) {
      // 廠商登入狀態
      $('#login').attr('style', 'display:none');
      $('#cartBar').attr('style', 'display:none');
      $('#logoutButton').attr('style', 'display:block');
      
    }
    else {
      $('#logout').attr('style', 'display:none');
      $('#login').attr('style', 'display:block');
    }
    // console.log('ok');
    var result = await Axios.get("http://localhost/ourPHPFinalproject/ChtProject/storeCards/getStoreItems.php");
    this.setState({
      menuList: result.data,
      restaurantName: result.data[0].restaurantName 
    })
    // console.log(this.state.menuList)
    this.initCartNum();
  }

  render() {
    return (
      <React.Fragment>
        {/* 固定導覽列在最上方 */}
        {/* expand 節點 */}
        <nav className="nav-bg navbar navbar-expand-lg flex-top navbar-light" id='navbar'>
          <div className="container-fluid">
            <NavLink to='/'>
              <a><img className="navbar-brand logoImg" src='../image/logo.png' /></a>
            </NavLink>
            {/* menu */}
            <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> menu
            </button>
            {/* 內容 */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='container-fluid'>
                {/* <ul></ul> */}
                <ul className="navbar-nav">
                  <li id='navSunsua' className="nav-item active pl-5" >
                    {/* <NavLink to='/sunsua'> */}
                    <a className="nav-link settext" href='/sunsua'><span className="sr-only "></span><i></i>順弁團購</a>
                    {/* </NavLink> */}
                  </li>
                  <li id='accompany' className="nav-item active pl-5" style={{ display: 'none' }}>
                    <a className="nav-link settext" href='#textCity'><span className="sr-only"></span>配合合作店家</a>
                  </li>
                  <li id='latestNews' className="nav-item active pl-5" style={{ display: 'none' }}>
                    <a className="nav-link settext" href='#news'><span className="sr-only"></span>最新消息</a>
                  </li>
                  <li id='contact' className="nav-item active pl-5" style={{ display: 'none' }}>
                    <a className="nav-link settext" href='#ff'><span className="sr-only"></span>聯絡我們</a>
                  </li>
                </ul>
                <div className="buttons">
                  <div className="row">
                    {/* 購物車 */}
                    {/* <NavLink to='/cart'> */}
                      <button id='cartBar' type="button" className='btn btn-outline-dark ml-1 rounded-pill btnsm'
                        onClick={this.cartClick}>
                          {/* <div className='row'> */}
                          <i className="fa fa-shopping-cart text-info p-1 fa-2xl"></i>
                          {/* <span> */}
                          <strong>Cart</strong>
                          {/* <span id='cartNum'>({this.state.cartNum})</span> */}
                          {/* <span className='col'> */}
                          (<span id='cartNum'>{this.state.cartNum}</span>)
                          {/* </span> */}
                          {/* <CheckCart cartNum={this.state.cartNum} /> */}
                          {/* </span> */}
                          {/* </div> */}
                      </button>
                    {/* </NavLink> */}
                    <NavLink to="/login">
                      <button id='login' type="button" className='btn btn-outline-dark ml-1 rounded-pill btnsm' style={{ display: 'block' }} 
                      // onClick={this.doLogin} 
                      >
                        <i className="fa fa-user-circle text-info p-1 fa-2xl"></i><span><b>Login</b></span>
                      </button>
                    </NavLink>

                    <NavLink to='/'>
                    <button id='logoutButton' type="button" className='btn btn-outline-dark ml-1 rounded-pill btnsm' 
                    style={{ display: 'none' }} 
                    onClick={this.doLogout}>
                        <i className="fa fa-sign-out text-info p-1 fa-2xl"></i><span><strong>Logout</strong></span>
                      </button>
                    </NavLink>

                      {/* dropdown */}
                    <div className="dropdown" id='logout' style={{ display: 'none' }} >
                      <button className="btn btn-outline-dark rounded-pill ml-1 btnsm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user-circle text-info p-1 fa-2xl"></i> <b>會員</b>
                      </button>
                      
                      <div id='dropdown-menu' className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/memberpage" style={{height:'50px'}} >會員主頁</a>
                        <a className="dropdown-item" href="/orderrecord" style={{height:'50px'}}>訂單紀錄</a>
                        <a className="dropdown-item" href="/customerMail" style={{height:'50px'}}>客服<i className='fa fa-envelope-o text-info p-1  fa-xl ml-2'></i></a>
                        <a className="dropdown-item" href="#" style={{height:'50px'}}  onClick={this.doLogout}><b>登出</b><i className="fa fa-sign-out text-info p-1 fa-xl ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;