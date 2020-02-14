import React, { Component } from "react";
import "./shop.data";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className={"shop-page"}>
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
