import React from "react";
import "../css/DashboardProduct.css";
import axios from "./axios";
// import "./assets/css/lib/font-awesome.min.css"
// import "./assets/css/lib/themify-icons.css"
// import "./assets/css/lib/menubar/sidebar.css"
// import "./assets/css/style.css"



class TodoIndex extends React.Component {
  state = {
    todoList: [],
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8050/todo/list");
    this.setState({ todoList: result.data });
    console.log(this.state.todoList)
  }

  render() {
    return (
      <div>
        <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
          <div className="nano">
            <div className="nano-content">
              <ul>
                <li>
                  <a href="/admin/dashboard" className="sidebar-sub-toggle">
                    <i className="ti-bar-chart-alt"></i> 儀錶板
                    <span className="sidebar-collapse-icon ti-angle-down"></span>
                  </a>
                </li>

                <li>
                  <a href="/todoIndex" style={{ color: "#03A9F5 " }}>
                    <i className="ti-email"></i> 菜單管理
                  </a>
                </li>
                <li>
                  <a href="/ordermanage">
                    <i className="ti-user"></i> 訂單紀錄
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header ">
          <div className="pull-left">
            <div className="logo">
              <a href="index.html">
                <span>店家後臺管理</span>
              </a>
            </div>
          </div>
          <div className="pull-right p-r-15">
            <ul>
              <li className="header-icon dib">
                <a href="#">
                  <i className="ti-search"></i>
                </a>
              </li>
              <li className="header-icon dib">
                <i className="ti-bell"></i>
                <div className="drop-down">
                  <div className="dropdown-content-heading">
                    <span className="text-left">通知</span>
                  </div>
                </div>
              </li>
              <li className="header-icon dib">
                <i className="ti-email"></i>
              </li>
              <li className="header-icon dib">
                <img
                  className="avatar-img"
                  src="assets/images/avatar/1.jpg"
                  alt=""
                />
                <span className="user-avatar">
                  康大哥 <i className="ti-angle-down f-s-10"></i>
                </span>
                <div className="drop-down dropdown-profile">
                  <div className="dropdown-content-heading">
                    <span className="text-left"> 簽約成特約店家</span>
                    <p className="trial-day">抽成數可減至0</p>
                  </div>
                  <div className="dropdown-content-body">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-user"></i> <span>店家資訊</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-wallet"></i> <span>店家收益</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-write"></i> <span>重要通知</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-settings"></i> <span>設定</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-help-alt"></i> <span>聯絡官方</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-power-off"></i> <span>登出</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-wrap mt-5 pt-3" style={{ backgroundColor: 'whitesmoke' }}>
          <div className="main">
            <div className="container-fluid">
              <h1 className="h1 my-4">
                菜單管理
                <a
                  href="/Todo/Create"
                  className=" btn btn-primary btn-lg float-right "
                >
                  新增品項
                </a>
              </h1>

              <div className="main-content">
                <div className="row">
                  {this.state.todoList.map((item, index) => {
                    return (
                      <div className="col-lg-4" key={index}>
                        <div className="card alert ">
                          <div className="row align-items-center card-body">
                            <div className="col-lg-5">
                              <div className="product-3-img">
                                <img src={item.picture} alt={item.dish}></img>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="product_details_3">
                                <div className="product_name">
                                  <h4 className="item_Name">{item.dish}</h4>
                                </div>
                                <div className="product_type">
                                  <p>{item.type}</p>
                                </div>
                               <div className="product_des">
                                  <p>{item.introduce}</p>
                                </div>
                                <div className="price mt-3">
                                  <p>價格：{item.cost}</p>
                                </div>
                                <div className="prdt_add_to_cart text-right">
                                  <a
                                    href={`/Todo/Edit/${item.menuItemId}`}
                                    className="btn btn-success btn-rounded mr-2"
                                  >
                                    <span className="icon edit-btn">
                                      <i className="fas fa-sliders-h"></i>
                                    </span>
                                  </a>

                                  <a
                                    href={`/Todo/Delete/${item.menuItemId}`}
                                    className="btn btn-danger btn-rounded mr-2"
                                  >
                                    <span className="icon edit-btn">
                                      <i className="fas fa-trash"></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      // ------------------------
    );
  }
}

export default TodoIndex;
