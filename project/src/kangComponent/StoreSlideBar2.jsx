import React from "react";
import Carousel from "better-react-carousel";
// import Restaurant from "./restaurant";
import axios from "axios";

class StoreSlidrBar2 extends React.Component {
  state = {
    restaurantsList: [],
  };

  async componentDidMount() {
    var result = await axios.get("http://localhost:8050/restaurants/category/all");
    this.setState({ restaurantsList: result.data });
  }

  render() {
    return (
      <div>
        <Carousel
          cols={4}
          rows={1}
          gap={40}
          dotColorActive={"red"}
          loop
          scrollSnap
        >
          {this.state.restaurantsList.map((item, index) => {
            return (
              <Carousel.Item>
                <div key={item.id}>
                  <div className="card" style={{ maxHeight: "349px" }}>
                    <img
                      src={item.picture}
                      className="card-img-top"
                      alt={item.picture}
                      style={{
                        height: "150px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* 因為上面解構了 */}
                    <div className="card-body">
                      <span
                        className="card-headline d-flex  justify-content-between"
                        style={{ height: "50px", width: "100%" }}
                      >
                        <h5 className="card-title">
                          <b>{item.name}</b>
                        </h5>
                        <div
                          className="float-right"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <i
                            className="fa fa-star "
                            style={{ color: "pink" }}
                          ></i>
                          <span className="star-point">{item.star}</span>
                          {/* (Math.random()*(n-m) + m).toFixed(2) */}
                          <span className="comment-amount">
                            ({item.tel})
                          </span>
                        </div>
                      </span>
                      <small className="restaurant-type">
                        $$$, {item.category}
                      </small>
                      <p
                        className="card-text"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          WebkitLineClamp: "2",
                          fontSize: "12px",
                        }}
                      >
                        {item.description}
                      </p>
                      <p className="card-price ">
                        {/* $ {item.tel} 經老師建議先使用固定最低運費  */}
                        $ 39
                        <small> 最低外送服務費</small>
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default StoreSlidrBar2;
// https://github.com/devpanther/better-react-carousel?ref=reactjsexample.com
