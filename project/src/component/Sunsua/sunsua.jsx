import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SunsuaProposal from './sunsuaProposal';
import SunsuaOrder from './sunsuaOrder';
import Navi from '../navigation.jsx';

import "./css/sunsua.css";

class Sunsua extends Component {
    state = {
        innerContent: null
        // innerContent: <SunsuaOrder></SunsuaOrder>
    }
    innerContentChange = () => {
        // console.log(window.location.pathname);
        switch (window.location.pathname) {
            case "/sunsua/proposal":
                this.state.innerContent = <SunsuaProposal></SunsuaProposal>
                break;
            case "/sunsua/order":
                this.state.innerContent = <SunsuaOrder></SunsuaOrder>
                break;
        }
        this.setState({});
    }
    render() {
        return (
            <div id="sunsua">
                <Navi></Navi>
                <div className='header'>
                    <h1 >順弁</h1>
                </div>
                <p><?=$hello?></p>
                <div className='container'>

                    <div className='row'>
                        {/* 左側 點選列表 */}
                        <div className='col-2'>
                            <ul>
                                <li onClick={this.innerContentChange}><Link to="/sunsua/proposal" >提案</Link></li>
                                <li onClick={this.innerContentChange}><Link to="/sunsua/order" >查詢訂單</Link></li>
                            </ul>
                            <hr />
                        </div>
                        {/* 右側顯示列表 */}
                        <div className="col-10">
                            {this.state.innerContent}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Sunsua;