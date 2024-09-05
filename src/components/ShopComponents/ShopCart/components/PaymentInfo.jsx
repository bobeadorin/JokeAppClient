import "./PaymentInfoStyles.css";

export default function PaymentInfo() {
  return (
    <section className="paymentInfo-container">
      <h1 className="paymentInfo-title">Payment Info</h1>
      <div>
        <p className="paymentMethod-title">Payment Method</p>
        <div className="pickPayment-first">
          <input type="radio" name="" id="" />
          <img
            src="\shopHomePageImages\shopNavbarLogo\creditCardLogo.png"
            alt=""
            className="creditCardLogo"
          />
          <p>Credit Card</p>
        </div>
        <div className="pickPayment-second">
          <input type="radio" name="" id="" />
          <img
            src="\shopHomePageImages\shopNavbarLogo\payPalIcon.png"
            alt=""
            className="creditCardLogo"
          />
          <p>PayPal</p>
        </div>
        <p className="nameP">Name on the card</p>
        <input className="nameInput" type="text" />

        <p>Card Number</p>
        <input className="nameInput" type="password" />
        <div className="expirationAndCvvContainer">
          <div>
            <p className="ExpirationDateTitle">Expiration Date</p>
            <div className="expirationDateContainer">
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div>
            <p className="CvvTitle">CVV</p>
            <input className="cvvInput" type="text" />
          </div>
        </div>
        <button className="CheckOutBtn">Check Out</button>
      </div>
    </section>
  );
}
