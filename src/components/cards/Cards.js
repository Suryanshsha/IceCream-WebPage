import React from 'react'
import "./cards.css"
import img7 from "../../assests/img7.jpg";
import img3 from "../../assests/img2.jpg";
import img4 from "../../assests/img3.jpg";
import img5 from '../../assests/img4.jpg';
import img6 from '../../assests/img6.jpg';

function Cards() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-light-emphasis"  >
                <div className=" container-fluid">

                    <a className="navbar-brand ms-5 d-sm-flex justify-content-sm-between d-md-flex fa fa-star" style={{ fontfamily: "Julee", fontsize: "29px" }}
                        href="home.html"><span className='ms-2 text-danger'><b>Vibezter</b></span></a>


                    


                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
                        <div className="searchInput d-flex flex-column  d-sm-flex flex-sm-row align-items-sm-center align-items-md-center gap-5">

                            <form className="d-flex" role="search">
                                <input className="form-control rounded-end-0 border-warning" type="search" placeholder='Search gifts,experiences and more..'
                                    aria-label="Search" />
                                <button className="btn btn-outline-warning border-start-0 rounded-start-0" type="submit">Search</button>
                            </form>
                            <a href="#"><i style={{ color: "#FFE156" }} className="fa-solid fa-cart-shopping ms-5"></i></a>
                            <a href="#"><i style={{ color: 'black' }} className="fa-solid fa fa-user"></i></a>

                        </div>

                    </div>



                </div>
            </nav>
            {//second Navbar
            }
            <nav>
                <div className="navbar navbar-expand-lg navbar-expand-sm navbar-expand  bg-body-tertiary justify-content-md-center justify-content-sm-center  justify-content-center ">

                    <ul className="navbar-nav flex-row gap-1 gap-md-4 justify-content-md-center  justify-content-center flex-wrap">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Birthday
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Anniversary
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Gifts
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Experiences
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Occasions
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Cakes
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Flowers
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Combo&Hampers
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className='card-Wrraper'>
                <div>

                    <div className=" p-5 m-3 rounded-5" >
                        <img src={img7} className='img1 card-img' alt='...' />
                    </div>
                    <div className=" p-5 m-3 rounded-5" >
                        <img src={img7} className='img1 card-img' alt='...' />
                    </div>
                    <div className=" p-5 m-3 rounded-5" >
                        <img src={img7} className='img1 card-img' alt='...' />
                    </div>
                </div>
                <div className='card-big'>
                    <div className=" p-5 m-3 rounded-5">
                        <img src={img7} className='image' alt='...' />
                    </div>
                </div>
                <div class="col-md-4 mt-5 ">
                    <div class="card mb-4 py-3">
                        <div className='ms-3'>
                            <h1><b>Chocolate Truffle</b></h1>
                        </div>
                        <div>
                            <p class="item-price"><button className='my-3 ms-4 rounded-2 bg-success px-3 py-3 text-light fa fa-star'><span className='ms-2'> 4.92</span></button><span className='ms-3 text-light-emphasis'><u>Reviews 5</u></span></p>
                        </div>
                        <div className='ms-4' style={{ fontSize: '25px' }}>
                            <p class="item-price"><span><b>$599</b></span>
                                <strike className='ms-2 text-light-emphasis'>$599</strike> <span className='ms-2 fs-5 text-success'>9%OFF</span></p>
                        </div>
                        <div className='ms-4'>
                            <p><b>Select Weight</b></p>
                            <form>
                                <span><input type='radio' className='me-2' />0.5 kg</span><span className='ms-5'><input type='radio' className='me-2 ' />1 kg</span><span className='ms-5'><input type='radio' className='me-2 ' />2 kg</span>
                                <div >
                                    <span className='ms-3'> <b>$ 599</b></span><span className='ms-5'> <b>$ 1599</b></span><span className='ms-5'> <b>$ 599</b></span>
                                </div>
                                <br />
                                <form>
                                    <span><input type='text' className='btn btn-light' placeholder='Enter Pincode' /></span><span><input type='text' className='btn btn-light ms-4' placeholder='Select Data' /></span>
                                </form>

                                <br />
                                <div>
                                    <span><input type='radio' className='me-2' />Eggless</span><span className='ms-3'><input type='radio' className='ms-4 me-2 ' />With Egg</span><span><input className=' btn btn-light ms-3' placeholder='Message on Cake' /></span>
                                </div>
                            </form>
                            <div className='mt-3'>
                                <h3>Select delivery time</h3>
                            </div>
                            <div className=''><span><button type="button" className="btn btn-light px-4" >Standard <br />free</button></span><span>
                                <button type="button" className="btn btn-light px-4">Secondary<br />$200</button></span><span><button type="button" className="btn btn-light px-4">Mid-night<br />$250</button></span></div>
                        </div>
                        <br />
                        <div class="dropdown ms-4">
                            <a class="btn btn-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Time
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div><br />
                        <div className='ms-4'><button className='btn btn-light px-4'>Add To Cart</button><button className='btn btn-danger ms-3 px-5'>Buy Now</button></div>
                        <br />
                        <br />
                        <div className='ms-4'>
                            <h2>Product Drescription</h2>
                            <p className='me-3'>No Matter how big or small the occasion is,this elegant cake will make sure that the celebrations are massive.All the guests at your party will gladly devour this moist and decadent
                                chocolate cake.It is creamy on the inside and gorgeous on the outside key attribute :
                                <div className='li'>
                                    <li>Weight : 500gm</li>
                                    <li className='ms-5'>Flavours : Chocolate</li>
                                </div>
                                <div className='li'>
                                    <li className='me-2'>Shape : Round</li>
                                    <li className='ms-5'>Country of Origin : India</li>
                                </div>
                            </p>
                            <div>
                                <h2>Disclaimer :</h2>
                                <ul >
                                    <li>Delivery Product might vary slightly from the image shown.</li>
                                    <li>This project is perishable therefore delivery will be attmpted only once</li>
                                    <li>The delivery cannot be redirected to any other address.</li>
                                </ul>
                                <div>
                                    <span className='ms-3' ><p className='fa fa-star' > </p></span>
                                    <span className='ms-1 fs-5 '><b>5.0</b></span>
                                    <span className='ms-2'>3 Reviwes</span>
                                </div>
                                <div className='me-3' >
                                    <div className="card-group" >
                                        <div className="card">
                                            <div className="card-group">
                                            <div className="card">
                                                    <img src={img6} className="card-img-top " alt="..." />
                                                    
                                                        <h5 className="card-title">Zimkitha</h5>
                                                        <p className="card-text text-light-emphasis">November2022</p>
                                                        
                                                        <small className="card-text">*Excellent experience*</small>
                                                        <p class="item-price"><button className='my-3 ms-4 rounded-2 bg-success px-4  text-light fa fa-star'><span> 4.92</span></button></p>
                                                    </div>
                                                <div className="card">
                                                    <img src={img6} className="card-img-top " alt="..." />
                                                    
                                                        <h5 className="card-title">Zimkitha</h5>
                                                        <p className="card-text text-light-emphasis">November2022</p>
                                                        
                                                        <small className="card-text">*Excellent experience*</small>
                                                        <p class="item-price"><button className='my-3 ms-4 rounded-2 bg-success px-4  text-light fa fa-star'><span> 4.92</span></button></p>
                                                
                                                </div>
                                                <div className="card">
                                                    <img src={img6} className="card-img-top " alt="..." />
                                                    
                                                        <h5 className="card-title">Zimkitha</h5>
                                                        <p className="card-text text-light-emphasis">November2022</p>
                                                        
                                                        <small className="card-text">*Excellent experience*</small>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h2 className='text-center'><b>You may also Like</b></h2>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                        <div className="carousel-inner">
                            <div className="item carousel-item active">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={img5} className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Chocolate Truffle</h4>
                                                <p className="item-price"><strike>$599</strike> <span>$599</span></p>
                                                <p>Same Day Delivery<span className='text-success ms-5'>Reviews 230</span></p>
                                                <a href="/pages/cart.html" className="btn btn-primary cart fa fa-shopping-cart bg-warning">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={img5} className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Chocolate Truffle</h4>
                                                <p className="item-price"><strike>$599</strike> <span>$599</span></p>

                                                <p>Same Day Delivery<span className='text-success ms-5'>Reviews 230</span></p>
                                                <a href="/pages/cart.html" className="btn btn-primary cart fa fa-shopping-cart bg-warning">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={img5} className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Chocolate Truffle</h4>
                                                <p className="item-price"><strike>$599</strike> <span>$599</span></p>
                                                <p>Same Day Delivery<span className='text-success ms-5'>Reviews 230</span></p>
                                                <a href="/pages/cart.html" className="btn btn-primary cart fa fa-shopping-cart bg-warning">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="thumb-wrapper">
                                            <div className="img-box">
                                                <img src={img5} className="img-responsive img-fluid" alt="" />
                                            </div>
                                            <div className="thumb-content">
                                                <h4>Chocolate Truffle</h4>
                                                <p className="item-price"><strike>$599</strike> <span>$599</span></p>
                                                <p>Same Day Delivery<span className='text-success ms-5'>Reviews 230</span></p>
                                                <a href="/pages/cart.html" className="btn btn-primary cart fa fa-shopping-cart bg-warning">Add to Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;