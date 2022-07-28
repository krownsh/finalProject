import React, { Component } from 'react';
import Navbar from './repeatability/Navbar';
import './css/orderdetails.css';
import axios from 'axios';
import Footer from './repeatability/Footer';
import FirebaseIndex from '../kangComponent/firebase/firebaseIndex';
import Accordion from "react-bootstrap/Accordion";
class OrderDetails extends Component {
  state = {
    details: {
      water: '',
      menu: [
        { amount: "", cost: "", dish: "", sum: "" }
      ],
      sums: '',
    },
    time: [], //給於一個空的時間值
    timeleft: '',
  }


  componentDidMount = async () => {
    alert("付款成功!您的訂單正在路上");
    let url = "http://localhost/ourPHPFinalproject/RjieProject/details.php"
    await axios.get(url)
      .then(res => {
        this.state.details = res.data;
        this.state.length = this.state.details.menu.length; //長度等於菜單清單的筆數
        this.setState({});
      });
    this.state.time[0] = new Date(this.state.details.water * 1000).toLocaleTimeString();
    //流水號 轉回時間 
    this.state.time[1] = new Date(this.state.details.water * 1000 + 20 * 60 * 1000).toLocaleTimeString();
    //流水號 轉回時間 並加上配送時間
    console.log(this.state.time);
    console.log(this.state.timeleft);
    this.setState({});




    const timeleft = Date.now();
    console.log(timeleft);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="mt-5 text-center">
          <h4>外送訂單資訊</h4>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 container'>
                <div className='card'>
                  <div className='row'>
                    <div className='col-11 text-center'>
                      <h4>預計外送時間:00分00秒</h4>
                      ({this.state.time[0]})-({this.state.time[1]})
                    </div>
                    {/* 讀取外送時間 */}
                    <div className='col-12'>
                      <p className='display-3'></p>
                    </div>
                    <div className='col-12'>
                      <div className='thispic'></div>
                    </div>
                  </div>
                  {/* 再送達後更改內容 */}
                  <div className='col-11 text-center'>
                    <h4>{0 == 0 ? "餐點已送達!謝謝光臨" : "餐點準備中"}</h4>

                  </div>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 container' >
                <div className='card'>
                  <h3>訂單詳情</h3>
                  <br />
                  <h5>訂單編號：{this.state.details.water}</h5>
                  <br />
                  <h5>訂單配送來自：{ }</h5>
                  <br />
                  <h5>送餐地址：51號 21 公益路二段 Taichung City 408</h5>
                  <br />
                  <h5>總計：$ {this.state.details.sums}</h5>
                  {/* 撈資料庫產生 */}
                  <Accordion style={{ borderTop: "1px solid black", marginTop: "20px", fontSize: "15px", }}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="mt-3 font-weight-bold " style={{ fontSize: "22px" }}>
                        <span>查看品項細節({this.state.length}個品項)</span>
                        <span className="ml-2">
                          <i class="fa-solid fa-angles-down"></i>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <ul className="list-group mt-4 ">
                            <div className="container-fluid">
                              <div className="row d-flex ">
                                <div className="col-3 ">品項</div>
                                <div className='col-2'></div>
                                <div className="col-1 text-nowrap">數量</div>
                                <div className="col-4 text-nowrap">單價</div>
                                <div className="col-2 text-nowrap">總額</div>
                              </div>
                            </div>
                            {this.state.details.menu.map((menui, index) => {
                              return (
                                <li key={index} className="list-group-item d-flex  ">
                                  <div className="container-fluid">
                                    <div className="row d-flex text-left border-bottom">
                                      <div className="col-5 ">{menui.dish}</div>
                                      <div className="col-1 text-nowrap ">{menui.amount}份</div>
                                      <div className="col-2 ml-5 text-nowrap">${menui.cost}元</div>
                                      <div className="col-1 ml-5 text-nowrap font-weight-bolder">${menui.sum}元</div>
                                    </div>
                                  </div>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  {/* 選擇器跑出來的內容 */}
                  <br />
                  <FirebaseIndex />
                  <br />
                  {/* C:\Users\bgkon\Desktop\康峻軒final_project(0628)\project\src\kangComponent\firebase\firebaseIndex.jsx */}
                </div>
                <div className='col-md-12 container mt-2'>
                  <div className='row card cardshadow'>
                    <div className='col-12'>
                      <h4>需要幫助嗎 ?</h4>
                      <h6>有需要的話聯絡我們</h6>
                      <button className="btn btn-outline-danger">客服中心</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default OrderDetails;