


function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">MERN eCommerce</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          <div className="card">
            <a href="product.html">
              {/* <!-- image size: 680px by 830px --> */}
              <img className="medium" src="./images/product-1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Slim Shirts</h2>
              </a>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
              </div>
              <div className="price">$120</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All right reseerved</footer>
    </div>
  );
}

export default App;
