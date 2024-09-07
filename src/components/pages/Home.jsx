import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";
import { LiaBoxSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa6";
import { TbArrowZigZag } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import { FaArrowCircleRight } from "react-icons/fa";
// import Carousel from 'react-bootstrap/Carousel';






const Home = () => {
    return (
        <>
            <div>
                <div className="header">
                    <img src="images/logo.png" alt="..." ></img>
                    <div className="searchbar">
                        <button style={{ height: 40, width: 40, backgroundColor: '#EEF7FF', borderColor: '#EEF7FF', color: 'black', border: 'none', borderRadius: '5px 0px 0px 5px', cursor: 'pointer' }}>
                            <FaSearch />
                        </button>
                        <input type="text" placeholder="Search for Products, Brands and More" />

                    </div>
                    <div class="dropdown">

                        <button class="dropbtn"><CgProfile />     Login    <FaAngleDown className="std2" />
                        </button>
                        <div class="dropdown-content">
                            <button ><CgProfile />               My Profile</button>
                            <button ><VscVerifiedFilled />       Shopify Plus Zone</button>
                            <button ><LiaBoxSolid />             Orders</button>
                            <button ><FaRegHeart />              Wishlist</button>
                            <button ><FaGift />                  Rewards</button>
                            <button ><MdCardGiftcard />          Gifts Cards</button>
                        </div>
                    </div>
                    <div className="cart-but">
                        <button><IoCartOutline />     Cart</button>
                    </div>

                    <div className="cart-but2">
                        <button><CiShop />
                            Become a Seller</button>
                    </div>
                    <div class="dropdown2">
                        <button class="dropbtn2"><CiMenuKebab /></button>
                        <div class="dropdown-content2">
                            <button ><CiBellOn />          Notifications</button>
                            <button ><FaHeadset />         24/7 Customer Care</button>
                            <button ><TbArrowZigZag />      Advertise</button>
                            <button ><GoDownload />         Download App</button>
                        </div>
                    </div>
                </div>
                <div className="cold2">

                    <div className="row">
                        <div className="cold">
                            <img src="images/grocery.png" alt="..." ></img>
                            <div className="pre-1">
                                <button>Grocery</button>
                            </div>

                        </div>
                        <div className="cold">

                            <img src="images/mobile.png" alt="..." ></img>
                            <div className="pre-1">
                                <button>Mobiles</button>
                            </div>
                        </div>
                        <div className="cold">

                            <img src="images/faishion.png" alt="..." ></img>
                            <div className="pre-1">
                                <div class="dropdown3">
                                    <button class="dropbtn3">Faishion    <FaAngleDown className="std2" />
                                    </button>
                                    <div class="dropdown-content3">
                                        <button>Men's Top Wear</button>
                                        <button>Men's Bottom Wear</button>
                                        <button>Men Footwear</button>
                                        <button>Women Footwear</button>
                                        <button>Watches and Assecssories</button>
                                        <button>Women Western</button>
                                        <button>Bags, Suitcases & Lugguage</button>
                                        <button>Kids</button>
                                        <button>Essentials</button>
                                        <button>Winter</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cold">

                            <img src="images/furni.png" alt="..." ></img>
                            <div className="pre-1">
                                <div class="dropdown3">
                                    <button class="dropbtn3">Home & Furniture    <FaAngleDown className="std2" />
                                    </button>
                                    <div class="dropdown-content3">
                                        <button>Home Furnishing</button>
                                        <button>Furniture</button>
                                        <button>Living Room Furniture</button>
                                        <button>Kitchen & Dining</button>
                                        <button>Bedroom Furniture</button>
                                        <button>Space Saving Furniture</button>
                                        <button>Home Decor</button>
                                        <button>Tools & Utility </button>
                                        <button>Work Space Furniture</button>
                                        <button>Kids Furniture</button>
                                        <button>Lighting & Electricals</button>
                                        <button>Cleaning & Bath</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cold">

                            <img src="images/applins.png" alt="..." ></img>
                            <div className="pre-1">
                                <button>Appliances</button>
                            </div>
                        </div>
                        <div className="cold">

                            <img src="images/plane.png" alt="..." ></img>
                            <div className="pre-1">
                                <button>Travel</button>
                            </div>
                        </div>
                        <div className="cold">

                            <img src="images/toys.png" alt="..." ></img>
                            <div className="pre-1">
                                <div class="dropdown3">
                                    <button class="dropbtn3">Toys    <FaAngleDown className="std2" />
                                    </button>
                                    <div class="dropdown-content3">
                                        <button>Beauty & Personal Care</button>
                                        <button>Food & Drinks</button>
                                        <button>Men's Gromming </button>
                                        <button>Nutrition & Health Care</button>
                                        <button>Baby Care</button>
                                        <button>Toys & School Supplies</button>
                                        <button>Books</button>
                                        <button>Music</button>
                                        <button>Stationery & Office Supplies</button>
                                        <button>Auto Accessories</button>
                                        <button>Beard Oils</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cold">

                            <img src="images/wheeler.png" alt="..." ></img>
                            <div className="pre-1">
                                <div class="dropdown3">
                                    <button class="dropbtn3">Two Wheeler    <FaAngleDown className="std2" />
                                    </button>
                                    <div class="dropdown-content3">
                                        <button>Petrol</button>
                                        <button>Electric</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img width={1490} height={330} alt="#" src="images/bnn5.jpg" style={{ padding: '15px' }} />

                {/* <Carousel style={{ padding: '15px' }}>
                    <Carousel.Item>
                        <img width={1500} height={330} alt="#" src="images/bnnr1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1500} height={330} alt="#" src="images/bnnr2.jpg"  style={{ padding: '15px' }}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1500} height={330} alt="#" src="images/bnnr3.jpg" />
                    </Carousel.Item>
                </Carousel> */}



            </div>
            <div className="tie01">
                <div style={{ display: 'flex', cursor: 'pointer', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Best Deals on Smartphones</h2>
                    <div style={{ paddingLeft: '850px', paddingTop: '20px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer' }}>
                        <FaArrowCircleRight />

                    </div>
                </div>

                <div className="tie02">
                    <div className="cold3"> <img src="images/M1.png" alt="..." ></img>
                        <h3 class="product-title">Realme P1 5G</h3>
                        <p class="product-price">From ₹14,999 </p></div>
                    <div className="cold3"> <img src="images/M2.png" alt="..." ></img>
                        <h3 class="product-title">Realme P1 Pro 5G</h3>
                        <p class="product-price">From ₹20,999*</p></div>
                    <div className="cold3"> <img src="images/M3.png" alt="..." ></img>
                        <h3 class="product-title">Nothing Phone 2a</h3>
                        <p class="product-price">From ₹22,999**</p></div>
                    <div className="cold3"> <img src="images/M4.png" alt="..." ></img>
                        <h3 class="product-title">Poco M6 Pro 5G</h3>
                        <p class="product-price">From ₹9,249*</p></div>
                    <div className="cold3"> <img src="images/M5.png" alt="..." ></img>
                        <h3 class="product-title">Moto g64</h3>
                        <p class="product-price">Just ₹13,999</p></div>
                    <div className="cold4"> <img src="images/ad1.png" alt="..." ></img></div>
                </div>

            </div>
            <div className="tie05">
                <section class="layout1">
                    <div class="grow1"><img src="images/BN1.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN2.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN3.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN4.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN5.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN6.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN7.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN8.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN9.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN10.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN11.png" alt="..." ></img></div>
                    <div class="grow1"><img src="images/BN12.png" alt="..." ></img></div>
                </section>
            </div>
            <div>
                <div className="tie06">
                    <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Beauty, Food, Toys & More</h2>
                        <div style={{ paddingLeft: '1150px', paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer' }}>
                            <FaArrowCircleRight />
                        </div>
                    </div>
                    <section class="layout2">
                        <div className="grow2"> <img src="images/G1.png" alt="..." ></img>
                            <h3 class="product-title">Geared cycles</h3>
                            <p class="product-price">Up to 70% Off</p>
                        </div>
                        <div className="grow2"> <img src="images/G2.png" alt="..." ></img>
                            <h3 class="product-title">Soft Toys</h3>
                            <p class="product-price">Upto 70% Off</p>
                        </div>
                        <div className="grow2"> <img src="images/G3.png" alt="..." ></img>
                            <h3 class="product-title">Remote Control Toys</h3>
                            <p class="product-price">Up to 80% Off</p>
                        </div>
                        <div className="grow2"> <img src="images/G4.png" alt="..." ></img>
                            <h3 class="product-title">Gym Essentials</h3>
                            <p class="product-price">From ₹139</p>
                        </div>
                        <div className="grow2"> <img src="images/G5.png" alt="..." ></img>
                            <h3 class="product-title">Best of Action Toys</h3>
                            <p class="product-price">Up to 70% Off </p>
                        </div>
                        <div className="grow2"> <img src="images/G6.png" alt="..." ></img>
                            <h3 class="product-title">Dry Fruits</h3>
                            <p class="product-price">Upto 75% Off </p>
                        </div>
                        <div className="grow2"> <img src="images/G7.png" alt="..." ></img>
                            <h3 class="product-title">String Instruments</h3>
                            <p class="product-price">Up to 70% Off</p>
                        </div>


                    </section>
                </div>
            </div>
            <div>
                <div className="tie06">
                    <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Sports, Healthcare & more</h2>
                        <div style={{ paddingLeft: '1150px', paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer' }}>
                            <FaArrowCircleRight />
                        </div>
                    </div>
                    <section class="layout2">
                        <div className="grow2"> <img src="images/T1.png" alt="..." ></img>
                            <h3 class="product-title">Puzzles & cubes</h3>
                            <p class="product-price">From ₹79</p>
                        </div>
                        <div className="grow2"> <img src="images/T2.png" alt="..." ></img>
                            <h3 class="product-title">Fiction Book</h3>
                            <p class="product-price">Up to 70% Off</p>
                        </div>
                        <div className="grow2"> <img src="images/T3.png" alt="..." ></img>
                            <h3 class="product-title">Breakfast Cereal</h3>
                            <p class="product-price">Upto 75% Off</p>
                        </div>
                        <div className="grow2"> <img src="images/T4.png" alt="..." ></img>
                            <h3 class="product-title">Musical Keyboards</h3>
                            <p class="product-price">Up to 70% Off</p>
                        </div>
                        <div className="grow2"> <img src="images/T5.png" alt="..." ></img>
                            <h3 class="product-title">Self Help Books</h3>
                            <p class="product-price">Min 20% Off </p>
                        </div>
                        <div className="grow2"> <img src="images/T6.png" alt="..." ></img>
                            <h3 class="product-title">Learning & Educational</h3>
                            <p class="product-price">Up to 80% Off</p>
                        </div>
                    </section>
                </div>
            </div>
            <div>
                <div className="zero1" style={{ display: 'Flex' }}>
                    <div className="tie08">
                        <div style={{ margin: '10px' }}>
                            <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Best Gadgets & Appliances</h2>
                                <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px', }}>
                                    <FaArrowCircleRight />
                                </div>
                            </div>
                            <section class="layout4">
                                <div> <div className="grow2"> <img src="images/T01.png" alt="..." ></img>
                                    <h3 class="product-title2">Smart Watches</h3>
                                    <p class="product-price2">Min. 40%Off</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/T02.png" alt="..." ></img>
                                    <h3 class="product-title2">Headset</h3>
                                    <p class="product-price2">Min. 50%Off</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/T03.png" alt="..." ></img>
                                    <h3 class="product-title2">True Wireless</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/T04.png" alt="..." ></img>
                                    <h3 class="product-title2">Smart Lighting</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                            </section>
                        </div>
                    </div>
                    <div className="zero2">
                        <img src="images/BNL01.png" alt="..." ></img>
                    </div>

                </div>
            </div>
            <div style={{ display: 'flex', margin: '10px', justifyContent: 'space-between', }}>
                <div className="tie07">

                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Moonson-ready Style</h2>
                            <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px' }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout4">
                            <div>
                                <div className="grow2"> <img src="images/P1.png" alt="..." ></img>
                                    <h3 class="product-title2">Men's Slippers</h3>
                                    <p class="product-price2">Min. 70% Off</p>
                                </div>
                            </div>
                            <div> <div className="grow2"> <img src="images/P2.png" alt="..." ></img>
                                <h3 class="product-title2">Mens's Sports Shoes</h3>
                                <p class="product-price2">Min. 70%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P3.png" alt="..." ></img>
                                <h3 class="product-title2">Laptop Bags</h3>
                                <p class="product-price2">Min. 70%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P4.png" alt="..." ></img>
                                <h3 class="product-title2">Men's Sandals</h3>
                                <p class="product-price2">Min. 70%Off</p>
                            </div></div>
                        </section>
                    </div>
                </div>
                <div className="tie07">
                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Toys & Stationery</h2>
                            <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px' }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout4">
                            <div>
                                <div className="grow2"> <img src="images/P01.png" alt="..." ></img>
                                    <h3 class="product-title2">School Bags</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                            <div> <div className="grow2"> <img src="images/P02.png" alt="..." ></img>
                                <h3 class="product-title2">Soft Toys</h3>
                                <p class="product-price2">Min. 50% Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P03.png" alt="..." ></img>
                                <h3 class="product-title2">Battle Toys</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P04.png" alt="..." ></img>
                                <h3 class="product-title2">Electric Rideons</h3>
                                <p class="product-price2">Top Collection</p>
                            </div></div>
                        </section>
                    </div>
                </div>
                <div className="tie07">

                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Festive Faishion</h2>
                            <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px', }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout4">
                            <div> <div className="grow2"> <img src="images/P001.png" alt="..." ></img>
                                <h3 class="product-title2">Men's Kurtas</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P002.png" alt="..." ></img>
                                <h3 class="product-title2">Men's Formal Suit</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P003.png" alt="..." ></img>
                                <h3 class="product-title2">Women's Kurtas</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/P004.png" alt="..." ></img>
                                <h3 class="product-title2">Men's Jackets</h3>
                                <p class="product-price2">Special Offer</p>
                            </div></div>
                        </section>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', margin: '10px', justifyContent: 'space-between', }}>
                <div className="tie07">

                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Ganesh Chaturthi </h2>
                            <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px' }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout4">
                            <div>
                                <div className="grow2"> <img src="images/F1.png" alt="..." ></img>
                                    <h3 class="product-title2">Gas stoves</h3>
                                    <p class="product-price2">Top Sellers</p>
                                </div>
                            </div>
                            <div> <div className="grow2"> <img src="images/F2.png" alt="..." ></img>
                                <h3 class="product-title2">Speakers</h3>
                                <p class="product-price2">Min. 50% Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F3.png" alt="..." ></img>
                                <h3 class="product-title2">Smart Lighting</h3>
                                <p class="product-price2">Special Offer</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F4.png" alt="..." ></img>
                                <h3 class="product-title2">Toran</h3>
                                <p class="product-price2">Best Picks</p>
                            </div></div>
                        </section>
                    </div>
                </div>
                <div className="tie07">
                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Home Decor</h2>
                            <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '270px' }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout4">
                            <div>
                                <div className="grow2"> <img src="images/F5.png" alt="..." ></img>
                                    <h3 class="product-title2">Cups &Saucers</h3>
                                    <p class="product-price2">Most-Loved</p>
                                </div></div>
                            <div> <div className="grow2"> <img src="images/F6.png" alt="..." ></img>
                                <h3 class="product-title2">Bedsheets</h3>
                                <p class="product-price2">Special Offer</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F7.png" alt="..." ></img>
                                <h3 class="product-title2">Pillows</h3>
                                <p class="product-price2">Min. 50% Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F8.png" alt="..." ></img>
                                <h3 class="product-title2">Cookware & Sets</h3>
                                <p class="product-price2">Min. 50% Off</p>
                            </div></div>
                        </section>
                    </div>
                </div>
                <div className="tie07">

                    <div style={{ margin: '10px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Shop Your Favorites</h2>
                            <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px', }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout4">
                            <div> <div className="grow2"> <img src="images/F9.png" alt="..." ></img>
                                <h3 class="product-title2">Skin Treatment</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F10.png" alt="..." ></img>
                                <h3 class="product-title2">Dry fruits & Seeds</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F11.png" alt="..." ></img>
                                <h3 class="product-title2">Bath soap</h3>
                                <p class="product-price2">Min. 50%Off</p>
                            </div></div>
                            <div> <div className="grow2"> <img src="images/F12.png" alt="..." ></img>
                                <h3 class="product-title2">Face pack</h3>
                                <p class="product-price2">Special Offer</p>
                            </div></div>
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="tie06">
                        <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif', margin: '10px' }}><h2>Furniture Deals</h2>
                            <div style={{ paddingLeft: '1150px', paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer' }}>
                                <FaArrowCircleRight />
                            </div>
                        </div>
                        <section class="layout2">
                            <div className="grow2"> <img src="images/S1.png" alt="..." ></img>
                                <h3 class="product-title">Mattresses</h3>
                                <p class="product-price">From ₹2,990</p>
                            </div>
                            <div className="grow2"> <img src="images/S2.png" alt="..." ></img>
                                <h3 class="product-title">Sofa Sectional</h3>
                                <p class="product-price">From ₹7,999</p>
                            </div>
                            <div className="grow2"> <img src="images/S3.png" alt="..." ></img>
                                <h3 class="product-title">Office Chair</h3>
                                <p class="product-price"> From ₹1,890</p>
                            </div>
                            <div className="grow2"> <img src="images/S4.png" alt="..." ></img>
                                <h3 class="product-title">Beds</h3>
                                <p class="product-price">From ₹1,790</p>
                            </div>
                            <div className="grow2"> <img src="images/S5.png" alt="..." ></img>
                                <h3 class="product-title">TV Units</h3>
                                <p class="product-price">From ₹1,249</p>
                            </div>
                            <div className="grow2"> <img src="images/S6.png" alt="..." ></img>
                                <h3 class="product-title">Outdoor Chairs</h3>
                                <p class="product-price">From ₹990</p>
                            </div>
                            <div className="grow2"> <img src="images/S7.png" alt="..." ></img>
                                <h3 class="product-title">Sofa Beds</h3>
                                <p class="product-price">From ₹6,099</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div>
                <div className="zero1" style={{ display: 'Flex' }}>
                    <div className="tie08">
                        <div style={{ margin: '10px' }}>
                            <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Top Deals</h2>
                                <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px', }}>
                                    <FaArrowCircleRight />
                                </div>
                            </div>
                            <section class="layout4">
                                <div> <div className="grow2"> <img src="images/V1.png" alt="..." ></img>
                                    <h3 class="product-title2">Smart Watches</h3>
                                    <p class="product-price2">Min. 40%Off</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/V2.png" alt="..." ></img>
                                    <h3 class="product-title2">Headset</h3>
                                    <p class="product-price2">Min. 50%Off</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/V3.png" alt="..." ></img>
                                    <h3 class="product-title2">True Wireless</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/V4.png" alt="..." ></img>
                                    <h3 class="product-title2">Smart Lighting</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                            </section>
                        </div>
                    </div>
                    <div className="tie08">
                        <div style={{ margin: '10px' }}>
                            <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center', fontSize: '15px', fontFamily: 'sans-serif' }}><h2>Best Gadgets & Appliances</h2>
                                <div style={{ paddingTop: '15px', fontSize: '30px', color: '#6A9C89', cursor: 'pointer', paddingLeft: '200px', }}>
                                    <FaArrowCircleRight />
                                </div>
                            </div>
                            <section class="layout4">
                                <div> <div className="grow2"> <img src="images/V5.png" alt="..." ></img>
                                    <h3 class="product-title2">Smart Watches</h3>
                                    <p class="product-price2">Min. 40%Off</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/V6.png" alt="..." ></img>
                                    <h3 class="product-title2">Headset</h3>
                                    <p class="product-price2">Min. 50%Off</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/V7.png" alt="..." ></img>
                                    <h3 class="product-title2">True Wireless</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                                <div> <div className="grow2"> <img src="images/V8.png" alt="..." ></img>
                                    <h3 class="product-title2">Smart Lighting</h3>
                                    <p class="product-price2">Special Offer</p>
                                </div></div>
                            </section>
                        </div>
                    </div>
                    <div className="zero3">
                        <img src="images/BNL02.jpg" alt="..." ></img>
                    </div>

                </div>
            </div>
            {/* <--------------------Footer-------------------->   */}


            {/* <--------------------Footer-------------------->   */}
            <div style={{alignItems:'center',paddingLeft:'50%',paddingTop:'50px',paddingBottom:'50px'}}>
            <a href="{Login}">SOMETHING</a>
            </div>
        </>
        
    )
}
export default Home