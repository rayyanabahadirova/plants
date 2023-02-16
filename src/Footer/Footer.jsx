import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <>
      <div className="ul__wrapper">
          <ul className='list1'>
            <p className='pl'>Plant</p>
            <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet.</p>
            <div className="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i><i class="fa-brands fa-twitter"></i></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </ul>

          <ul className='list2'>
            <p>Navigation</p>
            <li>Home</li>
            <li>About</li>
            <li>Help & Support</li>
            <li>Product</li>
          </ul>

          <ul className='list2'>
            <p>About Us</p>
            <li>Konact</li>
            <li>Address</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>

          <ul className='list3'>
            <p>Help</p>
            <li>Coustomers Services</li>
            <li>FAQs</li>
            <li>We Are Hiring</li>
            <li>Returns</li>
          </ul>
        </div>
    </>
  )
}

export default Footer