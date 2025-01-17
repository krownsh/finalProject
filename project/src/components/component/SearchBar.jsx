import React from "react";
class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex"
          style={{
            maxWidth: "900px",
            height: "120PX",
            boxShadow: "3px 3px 15px grey ",
          }}
        >
          <div className="input-group d-flex align-items-center justify-content-between">
            <span
              style={{
                position: "absolute",
                zIndex: "1",
                marginLeft: "60%",
                cursor: "pointer",
              }}
              className="icon "
            >
              <i class="fa fa-location"></i>
            </span>
            <input
              type="text"
              className="form-control m-2"
              placeholder="輸入您欲送達的位置"
              style={{
                height: "70px",
                Width: "600px",
                borderRadius: "10px",
              }}
            />
            <div className="input-group-append" id="button-addon4">
              <button className="btn btn-danger m-2" type="button" style={{ height: "80px", width: "120px", borderRadius: "10px" }}>→</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;