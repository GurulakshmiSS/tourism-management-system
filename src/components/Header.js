import React from 'react';
import { useEffect,useState } from 'react';
import { BrowserRouter as Router,Routs,Route,useNavigate} from 'react-router-dom';
import logo from './logo.png';
import Navigation  from './Navigation';

function Header() {
  let navigate = useNavigate();
  const [auth,setAuth] = useState('');
  const [user,setUser] = useState('');
 
  const Logout =()=>{
    localStorage.removeItem('email');
    localStorage.clear();
    navigate("/login");
}
const handleLogin = () => {
  // Perform your login logic here

  // If login is successful, navigate to the MemberProfile page
  navigate('/');
};

/* const testUser = async (auth, user) => {
const isValid = await validateUser(auth, user);
    if(!isValid)
      navigate('/login')
}
 */
useEffect(()=>{
  var auth     = localStorage.getItem("email");
  var user     = localStorage.getItem('first_name');
  setAuth(auth);
  setUser(user);

  //testUser(auth, user);  
},[])

  return (
    <header>
      {/*  <div id="preloader-active">
                <div class="preloader d-flex align-items-center justify-content-center">
                    <div class="preloader-inner position-relative">
                        <div class="preloader-circle"></div>
                        <div class="preloader-img pere-text">
                        <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>  */}
   
       <div class="header-area">
            <div class="main-header ">
                <div class="header-top top-bg d-none d-lg-block">
                   <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-8">
                            <div class="header-info-left">
                                <ul>                          
                                    <li>needhelp@gotrip.com</li>
                                    <li>666 569 025077</li>
                                    <li>broklyn street new york</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="header-info-right f-right">
                                <ul class="header-social">    
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                   <li> <a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                       </div>
                   </div>
                </div>
               <div class="header-bottom  header-sticky">
                    <div class="container">
                        <div class="row align-items-center">
                         
                            <div class="col-xl-2 col-lg-2 col-md-1">
                                <div class="logo">
                                  {/* <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a> */}
                                <img src ={logo}/>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-10">
                              
                                <div class="main-menu f-right d-none d-lg-block">
                                    <Navigation />
                                   {/*  <nav>               
                                        <ul id="navigation">                                                                                                                                     
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About US</a></li>
                                            <li><a href="packages.html">Package</a></li>
                                            <li><a href="packages.html">Tour Booking</a></li>
                                            {/* <li><a href="blog.html">Blog</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li> 
                                            <li><a href="#">Pages</a>
                                                <ul class="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </nav> */}
                                </div>
                            </div>
                          
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
    
    </header>
  );
}

export default Header;
