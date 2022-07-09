import React from "react"
import facebookIcon from "../assests/Web/facebook.svg"
import twitterIcon from "../assests/Web/twitter.svg"
import paypal from "../assests/Web/Paypal.svg"
import masterCard from "../assests/Web/master_card.svg"
import westernUnion from "../assests/Web/Western_union.svg"
import visa from "../assests/Web/visa.svg"


const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="footer__topRow">
          <div className="footer__child">
            <h1 className="footer__shop-title">E-Shopping</h1>
            <p>
              This is the Best in market E shopping destination.
            </p>
          </div>
          <div className="footer__child">
            <h2 className="footer__follow-title ">Follow Us</h2>
            <p>
              Do Follow and Keep Shopping
            </p>
            <div className="footer__follow-icons">
              <img src={facebookIcon} alt="facebook" />
              <img src={twitterIcon} alt="twitter" />
            </div>
          </div>
          <div className="footer__child">
            <h2 className="footer__contact-title">Contact Us</h2>
            <p>Office: Raipur, Chhattisgarh 124</p>
            <p>Call us: 0123-456-789 </p>
            <p>Email: support@eshopping.com</p>
          </div>
        </div>
      </div>
      <div className="footer__payments">
        <img src={westernUnion} alt="western-union" />
        <img src={masterCard} alt="master-card" />
        <img src={paypal} alt="paypal" />
        <img src={visa} alt="visa" />
      </div>
    </>
  )
}

export default Footer
