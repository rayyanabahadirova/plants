import React from 'react'
import './Header.scss'
import flower from '../../assets/images/Heroback.png'
import flower1 from '../../assets/images/flower1.png'
import flower2 from '../../assets/images/flower2.png'
import flower3 from '../../assets/images/flower3.png'
function Header() {
  return (
    <>
        <nav>
            <h1>Plant</h1>
            <ul>
                <li className="item1">Home</li>
                <li className="item2">Services</li>
                <li className="item3">About Us</li>
                <li className="item4">Blog</li>
                <li className="item5 mr">Contact</li>
                <li className="item6">Login</li>
                <li className="item7"><button>Sign Up</button></li>
            </ul>
        </nav>
        <div className="flex_container__wrapper">
            <div className="texts__wrapper">
                <p className='hero_name'>Growing Beautiful Plants at Home</p>
                <p className='lorems'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
                <button>Learn More</button>
                <div className="prise__container">
                    <div className="wrap_prise">
                        <p className='prise'>2000+</p>
                        <p>Delivery</p>
                    </div>
                    <div className="wrap_prise">
                        <p className='prise'>1200+</p>
                        <p>Customers</p>
                    </div>
                    <div className="wrap_prise">
                        <p className='prise'>1000+</p>
                        <p>Product</p>
                    </div>
                </div>
            </div>
            <img src={flower} alt="" />
        </div>
        <div className="flowers_wrap">
            <div className="flower_texts">
                <p className="tex">We have lots of plants collection for you and your family</p>
                <p>See all collection <i class="fa-solid fa-arrow-right-long"></i></p>
            </div>
            <div className="flowers_card">
                <img src={flower1} alt="" />
                <img src={flower2} alt="" />
                <img src={flower3} alt="" />
            </div>
        </div>
    </>
  )
}

export default Header