import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  return(
    <div className = "main-footer text-white" style={{ backgroundColor: "#20232a" }}> 
        <div className='container'>
              <div className='row'>
              {/*Column1*/}
              <div className="col-md-3 col-sm-6">
                <h4>SHOP BOOK OLINE</h4>
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" width={"150px"} alt="" />
              </div>
              {/*Column2*/}
              <div className="col-md-3 col-sm-6">
                <h4>Company</h4>
                <ul className='list-unstyled'>
                  <li>About Us</li>
                  <li>Our Service</li>
                  <li>Privacy Policy</li>
                  <li>Afiliate Program</li>
                </ul>
              </div>{/*Column3*/}
              <div className="col-md-3 col-sm-6">
                <h4>Get Help</h4>
                <ul className='list-unstyled'>
                  <li>FAQ</li>
                  <li>Shipping</li>
                  <li>Order Status</li>
                  <li>Lorem</li>
                </ul>
              </div>{/*Column4*/}
              <div className="col-md-3 col-sm-6">
                <h4>Folow Us</h4>
                <ul className='list-unstyled'>
                  <li> Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh. </li>
                  <li>(0123) 426789</li>
                  <li>bookstore.com</li>
                  <li></li>
                </ul>
              </div>
              </div>
              {/* Footer Bottom*/}
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} Chưa Biết Tên Gì - All Rights
                </p>
              </div>
        </div>
    
    </div>
  )
}
export default Footer
