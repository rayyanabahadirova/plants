import React from 'react'
import './About.scss'
import flower from '../../assets/images/about.png'
import flower1 from '../../assets/images/1-photo.png'
import flower2 from '../../assets/images/2-photo.png'
import flower3 from '../../assets/images/3-photo.png'
import flower4 from '../../assets/images/4-photo.png'
import user from '../../assets/images/user.png'
import gardener from '../../assets/images/gardener.png'
import vector from '../../assets/images/Vector.png'
import klip from '../../assets/images/klip.png'
import img1 from '../../assets/images/1-img.png'
import img2 from '../../assets/images/2-img.png'
import img3 from '../../assets/images/3-img.png'
import img4 from '../../assets/images/4-img.png'
import img5 from '../../assets/images/5-img.png'
import Rating from '@mui/material/Rating';

function About() {
  return (
    <>
        <div className="About__wrapper">
            <img src={flower} alt="" />
            <div className="About_text">
                <p><span>About Us</span></p>
                <p className="global">
                Continue to Develop to Became Global Company
                </p>
                <p className="lorems">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
                </p>
                <p className='lorem_pl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. </p>
                <button>Read More</button>
            </div>
        </div>
        <div className="product">
            <p className="product_text">Our Best Product</p>
            <ul className='product_list'>
              <li><span>New Plants</span></li>
              <li>New Arrivals</li>
              <li>Sale</li>
              
            </ul>
        </div>
        <div className="cards-wrap">
          <div className="cards__wrapper">
            <div className="card bir">
              <img src={flower1} alt="" />
              <div className="star_wrap">
                <p>Outdoor Plant</p>
                <Rating name="size-medium" defaultValue={2} />
                <p>$50.00</p>
                </div>  
            </div>

            <div className="card ikki">
              <img src={flower2} alt="" />
              <div className="star_wrap">
                <p>Monstera Plant</p>
                <Rating name="size-medium" defaultValue={2} />
                <p>$50.00</p>
              </div>
            </div>

            <div className="card uch">
              <img src={flower3} alt="" />
              <div className="star_wrap">
                <p>Pottel Plant</p>
                <Rating name="size-medium" defaultValue={2} />
                <p>$50.00</p>
              </div>
            </div>

            <div className="card tort">
              <img src={flower4} alt="" />
              <div className="star_wrap">
                <p>Indoor Plant</p>
                <Rating name="size-medium" defaultValue={2} />
                <p>$50.00</p>
              </div>
            </div>
          </div>
          <button>View All</button>
        </div>
        <div className="customer_wrap">
            <div className="customs_text__wrapper">
            <div className="custom_text">
              <h1>What Our Customers Says</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
            </div>
            <div className="green__card">
              <div className="img__user">
                <img src={user} alt="" />
                <p>Hasanul Islam <br /> Marketing CEO</p>
                
                <img className='vector vec' src={vector} alt="" />
                <img className='vector' src={vector} alt="" />
              </div>
              <p className='lorem_wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>
            </div>
          </div>
          <img className='gardener' src={gardener} alt="" />
        </div>
        <div className="email__wrapper">
          <div className="email__text">
            <p className='email_h'>Subscribe Our Newsletter</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </p>
            <input type="email" placeholder='Enter email...' className='email_inp' />
            <button>Subscribe</button>
          </div>
          <img src={klip} alt="" />
        </div>
        <div className="insta__wrapper">
          <div className="insta_text">
            <p className='folow'>Follow Us on Instagram</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus</p>
          </div>
          <div className="insta_img">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
          </div>
        </div>

        
    </>
  )
}

export default About