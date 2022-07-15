import React, { Component } from 'react';
import Axios from 'axios';
import StoreCard from '../components item/storeCards';
import CheckCart from '../components item/checkCart';

class StorePage extends Component {
    state = {
        menuList: []
    }

    async componentDidMount() {
        // var result = await Axios.get("http://localhost:8000/todo/list");
        var result = await Axios.get("http://localhost/PHP/storeCards/getStoreItems.php");
        this.setState({
            menuList: result.data
        })
        console.log(this.state.menuList)
    }
    render() {
        return (
            <div>
                <CheckCart cartNum={this.state.cartNum}/>
                {this.state.menuList.map((p) => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="column is-3 col-6" key={p.menuItemId}>
                                    <StoreCard
                                        StoreCard={p} />
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        );
    }
}

export default StorePage;