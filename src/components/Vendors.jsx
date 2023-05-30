import { Link } from "react-router-dom";
import "../css/Homepage.css";

import vendorsData from "../data.json";
import dataVendors from "../vendorsData";

const Vendors = () => {
  return (
    <div className="vendors-section">
      <div className="vendors-head">
        <h1 className="slideInLeft">Our Vendors</h1>
      </div>

      <div className="vendors-container">
        {dataVendors &&
          dataVendors.map((vendor) => {
            return (
              <div className="ven-box" key={vendor.id}>
                <img
                  className="image-container"
                  src={vendor.image}
                  alt={vendor.title}
                />
                <strong className="ven-title">{vendor.title}</strong>

                <p className="ven-content">{vendor.content}</p>

                <p className="ven-product">
                  {vendor.heritage &&
                    vendor.heritage.map((data) => {
                      return (
                        <div key={vendor.id}>
                          <h4> {data.product} </h4>
                        </div>
                      );
                    })}
                </p>
                <div className="go-btn">
                  <button>see vendor</button>
                </div>
              </div>
            );
          })}
      </div>

      <Link className="vendors-link">See More Vendors</Link>
    </div>
  );
};
export default Vendors;
