import React from "react";
import './products.css'; // Assuming you store the styles in a separate CSS file

const products = [
  {
    id: 1,
    name: "12-Month GOLD Subscription",
    price: 80,
    image: "product-image1.png"
  },
  {
    id: 2,
    name: "12-Month PREMIUM Subscription",
    price: 50,
    image: "product-image2.png"
  },
  {
    id: 3,
    name: "6-Month PREMIUM Subscription",
    price: 42,
    image: "product-image3.png"
  },
  {
    id: 4,
    name: "3-Month PREMIUM Subscription",
    price: 32,
    image: "product-image4.png"
  },
  {
    id: 5,
    name: "1-Month PREMIUM Subscription",
    price: 20,
    image: "product-image5.png"
  },
  {
    id: 6,
    name: "12-Month STANDARD Subscription",
    price: 48,
    image: "product-image6.png"
  },
  {
    id: 7,
    name: "6-Month STANDARD Subscription",
    price: 38,
    image: "product-image7.png"
  },
  {
    id: 8,
    name: "3-Month STANDARD Subscription",
    price: 28,
    image: "product-image8.png"
  },
  {
    id: 9,
    name: "1-Month STANDARD Subscription",
    price: 16,
    image: "product-image9.png"
  }
];

const ProductPage = () => {
  return (
    <>
    <div class="header">
  <div class="info">
  <h4><a href="#category">UI DESIGN</a></h4>
    <h1>KEN BURNS HEADERS ARE THE BEST</h1>
    <div class="meta">
      <a  href="https://twitter.com/nodws" target="_b" class="author"></a><br />
      By <a href="https://twitter.com/nodws" target="_b">James Nodws</a> on May 30, 2019
    </div>
  </div>
</div>
<section class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl turpis, porttitor et finibus id, viverra a metus. Praesent non ante sed orci posuere varius quis sit amet dui. Cras molestie magna orci, id gravida dolor molestie in. Duis sollicitudin turpis quis tortor egestas, ut ultrices nisl elementum. Vestibulum sed ipsum eget nulla laoreet cursus in ac sem. Integer a suscipit justo, quis aliquam sapien. Maecenas et tellus nibh. Vivamus tincidunt eros id commodo pellentesque.</p>
  <p align="center"><a href="https://twitter.com/nodws" class="btn twtr" target="_b">Follow me on Twitter</a>
  </p>
</section>
    <div className="container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <a href="#" className="order-btn">Order</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductPage;
