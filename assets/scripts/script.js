//#region responsivlik

// window.onload = function () {

//   let x = window.matchMedia("(max-width: 450px)");
//   let y = window.matchMedia("(min-width: 1150px)");

//   if (x) {
//     document.getElementById('phone').innerHTML = ``;
//     document.getElementById('phone').innerHTML = `
    
//     <div class="loader_keeper d-none" id="reload_">
//     <div class="loader "></div>
// </div>

//     <header id="phone_header">
//         <div class="container">
//             <div class="row covid_mob_keeper">
//                 <div class="col-12 covid_mob">
//                     <p>Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
//                 </div>
//             </div>

//             <div class="row all">

//                 <div class="col-3 left">
//                     <i id="phone_menu" class="klbth-icon-menu-thin"></i>
//                 </div>

//                 <div class="col-3 middle">
//                     <a href="index.html">
//                         <img class="img-fluid" src="./assets/images/bacola-logo-mobile.png" alt="">
//                     </a>
//                 </div>

//                 <div class="col-3 right">
//                     <a href="basket.html" class="bag">

//                         <span class="money col-5" id="total_header_cost">
//                             $0.00
//                         </span>

//                         <i class="klbth-icon-shopping-bag col-5 bag_icon">
//                             <span id="cartcount" class="amount">0</span>
//                         </i>
//                     </a>
//                 </div>

//             </div>
//         </div>
//     </header>

//     <section id="phone_first">
//         <div class="container">
//             <div class="row all">
//                 <div class="top">

//                     <div class="slide1 col-12">
//                         <div class="slide1_content">
//                             <div class="col-10">
//                                 <p class="first_p">EXCLUSIVE OFFER <span>-20% OFF</span></p>
//                                 <h5>Feed your family the best</h5>
//                                 <p class="second_p">Only this week. Don't miss...</p>
//                                 <p class="third_p">from <span>$7.99</span></p>
//                                 <button class="">Shop Now<i class="fa-solid fa-arrow-right-long"></i></button>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="slide2 col-12">
//                         <img class="slide2_content" src="assets/images/sidebar-banner.gif" alt="">
//                     </div>

//                 </div>

//                 <div class="bottom flex-wrap">

//                     <div class="slide3 col-12">

//                         <div class="slide3_content">
//                             <p class="first_p">Everything is so fresh</p>
//                             <p class="second_p">only in Bacola</p>
//                             <p class="third_p">Bacola Weekend Discount</p>
//                             <button>Shop Now</button>
//                         </div>

//                     </div>


//                     <div class="slide4 col-12">

//                         <div class="slide4_content">
//                             <p class="first_p">Big discount on</p>
//                             <p class="second_p">organic legumes</p>
//                             <p class="third_p">Bacola Weekend Discount</p>
//                             <button>Shop Now</button>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_second">
//         <div class="container">
//             <div class="row all">

//                 <div class="top">

//                     <div class="top_left">
//                         <h5>Best Sellers</h5>
//                         <p>Do not miss the current offers until the end of March.</p>
//                     </div>

//                     <div class="top_right">
//                         <button>
//                             View All
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>

//                 </div>

//                 <div class="bottom slider1">

//                     <div class="slider_keeper product_html" id="1">
//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/product-image-48-346x310.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>All Natural Italian-style Chicken Meatballs</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$4.09</span>
//                                     <span>$</span>
//                                     <span>1.85</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="2">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/1.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Home made Kartoflu and Etli Perashki</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$4.09</span>
//                                     <span>$</span>
//                                     <span>2.59</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>

//                     </div>
//                     <div class="slider_keeper product_html" id="3">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/2.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Field Roast Chao Cheese Creamy Original</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$8.09</span>
//                                     <span>$</span>
//                                     <span>5.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="4">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/3.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Nenemin Tendiri Meat edition With Zeferan</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$36.09</span>
//                                     <span>$</span>
//                                     <span>33.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="5">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/4.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Lule Kabab And Basdirma edition barbeque</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$16.79</span>
//                                     <span>$</span>
//                                     <span>13.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="6">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/5.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>


//                             <ul>
//                                 <li>Caspian sea Salmon Catched in Nardaran</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$21.09</span>
//                                     <span>$</span>
//                                     <span>17.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="7">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/6.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Azerbaijani Dolma made with love of Gulshan khala</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$16.09</span>
//                                     <span>$</span>
//                                     <span>14.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="8">

//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/7.jpg" class="card-img-top img-fluid">

//                             </a>

//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Three sisters Dolma made at Sovetski houses</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$16.09</span>
//                                     <span>$</span>
//                                     <span>14.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="9">

//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/8.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Dushbere named delicacy cooked at Kubinka</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$17.09</span>
//                                     <span>$</span>
//                                     <span>16.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="10">

//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/9.jpg" class="card-img-top img-fluid">

//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <ul>
//                                 <li>Gurze with special oil and seasoning</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$26.09</span>
//                                     <span>$</span>
//                                     <span>19.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="11">

//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/10.jpg" class="card-img-top img-fluid">

//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <ul>
//                                 <li>Pomidor Yumurta made by Gulchichek khala at Icerisheher</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$18.09</span>
//                                     <span>$</span>
//                                     <span>14.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     </section>

//     <section id="phone_third">
//         <div class="container">
//             <div class="row all">
//                 <div class="all1">
//                     <div class="col-12 top">
//                         <h6><span>100% Secure delivery</span> without contacting the courier</h6>
//                     </div>
//                     <div class="col-12 middle">
//                         <button class="btn btn-success">Shop Now</button>
//                     </div>
//                     <div class="col-12 bottom">
//                         <img src="./assets/images/banner-box2.jpg" alt="">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_third_fourth">
//         <div class="container">
//             <div class="row all">
//                 <div class="top">

//                     <div class="top_left">
//                         <h5>FRUIT & VEGETABLES</h5>
//                         <p>The freshest greengrocer products are waiting for you</p>
//                     </div>

//                     <div class="top_right">
//                         <button>
//                             View All
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_fourth">
//         <div class="container">
//             <div class="row all">

//                 <div class="top col-12">

//                     <div class="top_top col-12">
//                         <p>
//                             Weekly Discounts on
//                             <span>Fruits and Vegetables</span>
//                             <span>Bacola Weekend Discount</span>
//                         </p>
//                         <button>View All</button>

//                     </div>

//                     <div class="top_bottom col-12">

//                         <div class="up">

//                             <div class="left col-lg-6 ahrefs">
//                                 <a href="">Herbs & Seasonings</a>
//                                 <a href="">Party Trays</a>
//                                 <a href="">Exotic Fruits & Veggies</a>
//                                 <a href="">Fresh Vegetables</a>
//                             </div>

//                             <div class="right col-lg-4-4 ahrefs">
//                                 <a href="">Packaged Produce</a>
//                                 <a href="">Cuts & Sprouts</a>
//                                 <a href="">Fresh Fruits</a>
//                             </div>

//                         </div>

//                         <div class="down">
//                             <a href="">Shop All Fruits & Vegetables
//                             </a>
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </div>

//                     </div>
//                 </div>

//                 <div class="products col-12">
//                     <div class="col-6 product_html product" id="12">
//                         <div class="product_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/18.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul class="korotkiy">
//                                 <li>Organic Sweet Lime</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$7.00</span>
//                                     <span>$</span>
//                                     <span>5.49</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="13">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/11.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul>
//                                 <li>Fresh Organic Broccoli Crowns</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$8.00</span>
//                                     <span>$</span>
//                                     <span>6.19</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="14">
//                         <div class="product_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/12.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul>
//                                 <li>Organic Brown Coconut</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$2.00</span>
//                                     <span>$</span>
//                                     <span>1.49</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product radiuslutop-sag" id="15">
//                         <div class="product_card radiuslutop-sag">
//                             <a href="product.html">
//                                 <img src="./assets/images/13.jpg" class="card-img-top img-fluid">

//                             </a>
//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>


//                             <ul>
//                                 <li>Fresh Cavendish Bananas</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$3.40</span>
//                                     <span>$</span>
//                                     <span>2.49</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="16">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/14.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul class="korotkiy">
//                                 <li>Fresh Organic Kiwi</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$11.00</span>
//                                     <span>$</span>
//                                     <span>5.79</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="17">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/15.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>Fresh Organic Green Grapevines</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$1.00</span>
//                                     <span>$</span>
//                                     <span>0.79</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="18">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/16.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>Texas Rio Red Grapefruit </li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$9.00</span>
//                                     <span>$</span>
//                                     <span>6.99</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product radiuslubottom-sag" id="19">
//                         <div class="product_card radiuslubottom-sag">
//                             <a href="product.html">
//                                 <img src="./assets/images/17.jpg" class="card-img-top img-fluid">

//                             </a>
//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>Fresh Organic Strawberry</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$7.40</span>
//                                     <span>$</span>
//                                     <span>5.30</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_fifth">
//         <div class="container">
//             <div class="row all">
//                 <div class="all1">
//                     <span class="col-12">Super discount for your <span>first purchase</span></span>
//                     <span class="col-5">FREE25BAC</span>
//                     <span class="col-12">Use discount code in checkout!</span>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_fifth_sixth">
//         <div class="container">
//             <div class="row all">
//                 <div class="top">

//                     <div class="top_left">
//                         <h5>Breakfast & Dairy</h5>
//                         <p>The freshest greengrocer products are waiting for you</p>
//                     </div>

//                     <div class="top_right">
//                         <button>
//                             View All
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_sixth">
//         <div class="container">
//             <div class="row all">

//                 <div class="top col-12">

//                     <div class="top_top col-12">
//                         <p>
//                             Weekly Discounts on
//                             <span>Fruits and Vegetables</span>
//                             <span>Bacola Weekend Discount</span>
//                         </p>
//                         <button>View All</button>

//                     </div>

//                     <div class="top_bottom col-12">

//                         <div class="up">

//                             <div class="left col-lg-6 ahrefs">
//                                 <a href="">Herbs & Seasonings</a>
//                                 <a href="">Party Trays</a>
//                                 <a href="">Exotic Fruits & Veggies</a>
//                                 <a href="">Fresh Vegetables</a>
//                             </div>

//                             <div class="right col-lg-4-4 ahrefs">
//                                 <a href="">Packaged Produce</a>
//                                 <a href="">Cuts & Sprouts</a>
//                                 <a href="">Fresh Fruits</a>
//                             </div>

//                         </div>

//                         <div class="down">
//                             <a href="">Shop All Fruits & Vegetables
//                             </a>
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </div>

//                     </div>
//                 </div>

//                 <div class="products col-12">

//                     <div class="col-6 product_html product" id="20">
//                         <div class="product_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/20.jpg" class="card-img-top img-fluid">

//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul>
//                                 <li>Blueberries - 1 Pint Package</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$8.00</span>
//                                     <span>$</span>
//                                     <span>4.12</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="21">
//                         <div class="product_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/21.jpg" class="card-img-top img-fluid">

//                             </a>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>Chobani Complete Vanilla Greek Yogurt</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$6.09</span>
//                                     <span>$</span>
//                                     <span>6.51</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="22">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/22.jpg" class="card-img-top img-fluid">
//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>American Cheese Singles</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$6.09</span>
//                                     <span>$</span>
//                                     <span>5.89</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product radiuslutop-sag" id="23">
//                         <div class="product_card radiuslutop-sag">
//                             <a href="product.html">
//                                 <img src="./assets/images/23.jpg" class="card-img-top img-fluid">

//                             </a>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>Challenge Spreadable Butter </li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$3.09</span>
//                                     <span>$</span>
//                                     <span>2.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="24">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/24.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul>
//                                 <li>FairLife Lactose-Free 2% Milk</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$5.99</span>
//                                     <span>$</span>
//                                     <span>5.79</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="25">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/25.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul>
//                                 <li>Nestle Original Mate Creamer</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$7.49</span>
//                                     <span>$</span>
//                                     <span>6.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product" id="26">
//                         <div class="product_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/26.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>
//                             <ul>
//                                 <li>Organic Grade A Large Brown...</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$3.99</span>
//                                     <span>$</span>
//                                     <span>2.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="col-6 product_html product radiuslubottom-sag" id="27">
//                         <div class="product_card radiuslubottom-sag">
//                             <a href="product.html">

//                                 <img src="./assets/images/27.jpg" class="card-img-top img-fluid">
//                             </a>
//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <span></span>

//                             <ul>
//                                 <li>Vital Parms Pasture- Raised Egg Bites...</li>
//                                 <li><span>1 kg</span> IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$6.00</span>
//                                     <span>$</span>
//                                     <span>4.59</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_seventh">
//         <div class="container">
//             <div class="row all">
//                 <div class="all1">
//                     <div class="col-12">
//                         <span>WEEKEND DISCOUNT 20%</span>
//                         <h4>NATURAL EGGS</h4>
//                         <span class="spanspan">Eat one every day</span>
//                         <button>Shop Now</button>
//                     </div>

//                     <div class="col-12">
//                         <span>WEEKEND DISCOUNT 40%</span>
//                         <h4>TASTE THE BEST</h4>
//                         <span class="spanspan">Shine the morning</span>
//                         <button>Shop Now</button>
//                     </div>

//                     <div class="col-12">
//                         <span>WEEKEND DISCOUNT 30%</span>
//                         <h4>DITCH THE JUNK</h4>
//                         <span class="spanspan">Breakfast made better</span>
//                         <button>Shop Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="phone_eighth">
//         <div class="container">

//             <div class="row all">

//                 <div class="col-12 eat1">
//                     <img src="assets/images/baverages-1.jpg" alt="">
//                     <p>Beverages</p>
//                     <p>11 Items</p>
//                 </div>

//                 <div class="col-12 eats">

//                     <div class="col-6 eat">
//                         <div class="col-12">
//                             <img src="assets/images/31.jpg" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Biscuits & Snacks</span>
//                             <span>6 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat">
//                         <div class="col-12">
//                             <img src="assets/images/32.jpg" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Breads & Bakery</span>
//                             <span>5 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat">
//                         <div class="col-12">
//                             <img src="assets/images/33.jpg" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Breakfast & Dairy</span>
//                             <span>16 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat posledniy1">
//                         <div class="col-12">
//                             <img src="assets/images/34.png" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Frozen Foods</span>
//                             <span>6 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat">
//                         <div class="col-12">
//                             <img src="assets/images/35.jpg" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Fruits & Vegetables</span>
//                             <span>12 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat">
//                         <div class="col-12">
//                             <img src="assets/images/36.png" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Grocery & Staples</span>
//                             <span>9 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat">
//                         <div class="col-12">
//                             <img src="assets/images/37.jpg" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Household Needs</span>
//                             <span>2 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-6 eat posledniy2">
//                         <div class="col-12">
//                             <img src="assets/images/38.jpg" alt="">
//                         </div>
//                         <div class="col-12 nadpis">
//                             <span>Meats & Seafood</span>
//                             <span>10 Items</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </section>

//     <section id="phone_nineth">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-12 top">

//                     <p>$20 discount for your first order</p>
//                     <p>Join our newsletter and get...</p>
//                     <p>Join our email subscription now to get updates on promotions and coupons.</p>

//                     <div class="middle">
//                         <i class="klbth-icon-mail"></i>
//                         <input placeholder="Your eMail address" type="email">
//                         <button>Subscribe</button>
//                     </div>

//                 </div>


//             </div>
//         </div>
//         <div class="col-10 photo_relative">
//             <img src="assets/images/coupon.png" alt="">
//         </div>
//     </section>

//     <section id="phone_tenth">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-12 ">
//                     <i class="klbth-icon-milk-box"></i>
//                     <span>Everyday fresh products</span>
//                 </div>

//                 <div class="col-12 ">
//                     <i class="klbth-icon-delivery-truck-2"></i>
//                     <span>Free delivery for order over $70</span>
//                 </div>

//                 <div class="col-12">
//                     <i class="klbth-icon-discount-outline"></i>
//                     <span>Daily Mega Discounts</span>
//                 </div>

//                 <div class="col-12">
//                     <i class="klbth-icon-dollar"></i>
//                     <span>Best price on the market</span>
//                 </div>

//             </div>
//         </div>
//     </section>

//     <footer id="phone_footer">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-6 footer_keeper">
//                     <h6>
//                         FRUIT & VEGETABLES
//                     </h6>
//                     <a href="">Fresh Vegetables</a>
//                     <a href="">Herbs & Seasonings</a>
//                     <a href="">Fresh Fruits</a>
//                     <a href="">Cuts & Sprouts</a>
//                     <a href="">Exotic Fruits & Veggies</a>
//                     <a href="">Packaged Produce</a>
//                     <a href="">Party Trays</a>
//                 </div>

//                 <div class="col-5 footer_keeper1">
//                     <h6>
//                         BREAKFAST & DAIRY
//                     </h6>
//                     <a href="">Milk & Flavoured Milk</a>
//                     <a href="">Butter and Margarine</a>
//                     <a href="">Cheese</a>
//                     <a href="">Eggs Substitutes</a>
//                     <a href="">Honey</a>
//                     <a href="">Marmalades</a>
//                     <a href="">Sour Cream and Dips</a>
//                     <a href="">Yogurt</a>
//                 </div>

//                 <div class="col-6 footer_keeper">
//                     <h6>
//                         MEAT & SEAFOOD
//                     </h6>
//                     <a href="">Breakfast Sausage</a>
//                     <a href="">Dinner Sausage</a>
//                     <a href="">Beef</a>
//                     <a href="">Chicken</a>
//                     <a href="">Sliced Deli Meat</a>
//                     <a href="">Shrimp</a>
//                     <a href="">Wild Caught Fillets</a>
//                     <a href="">Crab and Shellfish</a>
//                     <a href="">Farm Raised Fillets</a>
//                 </div>

//                 <div class="col-5 footer_keeper1">
//                     <h6>
//                         BEVERAGES
//                     </h6>
//                     <a href="">Water</a>
//                     <a href="">Sparkling Water</a>
//                     <a href="">Soda & Pop</a>
//                     <a href="">Coffee</a>
//                     <a href="">Milk & Plant-Based Milk</a>
//                     <a href="">Tea & Kombucha</a>
//                     <a href="">Drink Boxes & Pouches</a>
//                     <a href="">Craft Beer</a>
//                     <a href="">Wine</a>
//                 </div>

//                 <div class="col-5 footer_keeper">
//                     <h6>
//                         BREADS & BAKERY
//                     </h6>
//                     <a href="">Milk & Flavoured Milk</a>
//                     <a href="">Butter and Margarine</a>
//                     <a href="">Cheese</a>
//                     <a href="">Eggs Substitutes</a>
//                     <a href="">Honey</a>
//                     <a href="">Marmalades</a>
//                     <a href="">Sour Cream and Dips</a>
//                     <a href="">Yogurt</a>
//                 </div>

//             </div>
//         </div>
//     </footer>

//     <section id="phone_eleventh">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-12 left">

//                     <div>
//                         <i class="klbth-icon-phone-call"></i>
//                     </div>
//                     <div class="left_right">
//                         <span>8 800 555-55</span>
//                         <span>Working 8:00 - 22:00</span>
//                     </div>

//                 </div>

//                 <div class="col-12 right">

//                     <div class="right_left">
//                         <span>Download App on Mobile :</span>
//                         <span>15% discount on your first purchase</span>
//                     </div>

//                     <div class="right_middle">

//                         <a href="apple.com">
//                             <img src="assets/images/app-store.png" alt="">
//                         </a>
//                         <a href="google.com">
//                             <img src="assets/images/google-play.png" alt="">
//                         </a>

//                     </div>

//                     <div class="right_right">

//                         <a href="https://facebook.com">
//                             <i class="klbth-icon-facebook"></i>
//                         </a>

//                         <a href="https://instagram.com">
//                             <i class="klbth-icon-instagram"></i>
//                         </a>

//                         <a href="https://twitter.com">
//                             <i class="klbth-icon-twitter"></i>
//                         </a>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     </section>

//     <section id="phone_twelfth">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-12">
//                     <p class="text-center">Copyright 2022 © Bacola Theme. All rights reserved. Powered by </p>
//                     <p class="text-center">Vasif Aliyev</p>
//                 </div>

//                 <div class="col-8 privacy_ph d-flex justify-content-between align-items-center">
//                     <a href="">Privacy Policy</a>
//                     <a href="">Terms and Conditions</a>
//                     <a href="">Cookie</a>
//                 </div>

//             </div>
//         </div>
//     </section>
//     `;
//     // document.getElementById('comp').innerHTML = '';
//   }
//   else if(!y) {
//     document.getElementById('phone').innerHTML = ``;
//     // document.getElementById('comp').innerHTML = ``;
//     document.getElementById('comp').innerHTML = `
    
    
//     <div class="loader_keeper d-none" id="reload_">
//         <div class="loader "></div>
//     </div>


//     <section id="modal_location" style="display: none;">
//         <div class="col-lg-3-8 location_div">
//             <div class="top">

//                 <h5>Choose your Delivery Location</h5>
//                 <p>Enter your address and we will specify the offer for your area.</p>

//                 <div class="inputarea">
//                     <i class="fas fa-search"></i>
//                     <input id="location_search" onfocus="" placeholder="Search your area" type="search">
//                 </div>

//                 <span id="close_location">X</span>
//             </div>

//             <div class="bottom">
//                 <p class="local"><span class="locations">Select a location</span> <span>Clear all</span></p>
//                 <p class="local"><span class="locations">Baku</span> <span>Min: $100</span></p>
//                 <p class="local"><span class="locations">Alabama</span> <span>Min: $120</span></p>
//                 <p class="local"><span class="locations">Alaska</span> <span>Min: $110</span></p>
//                 <p class="local"><span class="locations">Arizona</span> <span>Min: $90</span></p>
//                 <p class="local"><span class="locations">California</span> <span>Min: $140</span></p>
//                 <p class="local"><span class="locations">Colorado</span> <span>Min: $150</span></p>
//                 <p class="local"><span class="locations">Florida</span> <span>Min: $110</span></p>
//                 <p class="local"><span class="locations">Georgia</span> <span>Min: $60</span></p>
//                 <p class="local"><span class="locations">Kanzas</span> <span>Min: $80</span></p>
//                 <p class="local"><span class="locations">Minnesota</span> <span>Min: $180</span></p>
//                 <p class="local"><span class="locations">New York</span> <span>Min: $210</span></p>
//                 <p class="local"><span class="locations">Washington</span> <span>Min: $130</span></p>
//             </div>

//         </div>
//     </section>

//     <header id="header">

//         <div class="top">
//             <div class="container">
//                 <div class="row all">
//                     <p>Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
//                 </div>
//             </div>
//         </div>

//         <div class="middle">
//             <div class="container">
//                 <div class="row all">
//                     <div class="col-lg-4-4 middle_left">
//                         <a href="about.html">About Us</a>
//                         <a href="">My Account</a>
//                         <a href="">Wishlist</a>
//                         <a href="">Order Tracking</a>
//                     </div>

//                     <div class="col-lg-7 middle_right">
//                         <i class="klbth-icon-secure"></i>

//                         <p style="padding-left: 5px;">100% Secure delivery without contacting the courier</p>

//                         <p>
//                             Need help? Call Us:
//                             <a href="tel:+0020500">+ 0020 500</a>
//                         </p>

//                         <div class="language_currency">

//                             <div class="lang">
//                                 English
//                                 <i class="fa-solid fa-angle-down angle"></i>
//                                 <div class="languages">
//                                     <span>English</span>
//                                     <span>Russian</span>
//                                     <span>German</span>
//                                 </div>
//                             </div>

//                             <div class="cur">
//                                 USD
//                                 <i class="fa-solid fa-angle-down angle"></i>

//                                 <div class="currencies">
//                                     <span>USD</span>
//                                     <span>RUB</span>
//                                     <span>AZN</span>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="bottom">
//             <div class="container">
//                 <div class="row all">

//                     <div class="bottom_top">

//                         <div class="col-lg-2">
//                             <a href="index.html">
//                                 <img src="assets/images/bacola-logo.png" alt="">
//                                 <span>
//                                     Online Grocery Shopping Center
//                                 </span>
//                             </a>
//                         </div>

//                         <div class="col-lg-2">
//                             <div class="select_location" id="location">
//                                 <div class="col-lg-10">
//                                     <p>Your Location</p>
//                                     <p id="set_location">Select a Location</p>
//                                 </div>
//                                 <div class="col-lg-2 asd">
//                                     <i class="fa-solid fa-angle-down"></i>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="col-lg-5-5 search_engine">
//                             <input placeholder="Search For Products..." type="text">
//                             <span class="d-none">X</span>
//                             <i class="fa-solid fa-magnifying-glass"></i>
//                         </div>

//                         <div class="col-lg-1-8 money_user">
//                             <a class="userikon" style="text-decoration: none; color:#666;" href="login.html"><i
//                                     class="klbth-icon-user"></i></a>

//                             <a href="basket.html" class="bag">

//                                 <span class="money" id="total_header_cost">
//                                     $0.00
//                                 </span>

//                                 <i class="klbth-icon-shopping-bag bag_icon">
//                                     <span id="cartcount" class="amount">0</span>
//                                 </i>

//                                 <div class="bag_div">

//                                     <div id="pustoy_basket" class="pustoy">
//                                         <div class="image">
//                                             <svg class="img-fluid" xmlns="http://www.w3.org/2000/svg"
//                                                 viewBox="0 0 280.028 280.028" width="280.028" height="80.028">
//                                                 <path class="c-01" d="M35.004 0h210.02v78.758H35.004V0z" fill="#b7343e">
//                                                 </path>
//                                                 <path class="c-02"
//                                                     d="M262.527 61.256v201.27c0 9.626-7.876 17.502-17.502 17.502H35.004c-9.626 0-17.502-7.876-17.502-17.502V61.256h245.025z"
//                                                     fill="#f04652"></path>
//                                                 <path class="c-03"
//                                                     d="M35.004 70.007h26.253V26.253L35.004 0v70.007zm183.767-43.754v43.754h26.253V0l-26.253 26.253z"
//                                                     fill="#f04652"></path>
//                                                 <path class="c-04"
//                                                     d="M61.257 61.256V26.253L17.503 61.256h43.754zm157.514-35.003v35.003h43.754l-43.754-35.003z"
//                                                     fill="#ab212b"></path>
//                                                 <path class="c-05"
//                                                     d="M65.632 105.01c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c0-5.25-3.5-8.751-8.751-8.751zm148.764 0c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c.001-5.25-3.501-8.751-8.751-8.751z"
//                                                     fill="#c13942"></path>
//                                                 <path class="c-06"
//                                                     d="M65.632 121.637c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001-.001.874-6.126 6.124-6.126z"
//                                                     fill="#c13942"></path>
//                                                 <path class="c-07"
//                                                     d="M65.632 112.886c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001 0 .874-6.126 6.124-6.126z"
//                                                     fill="#fdfbf7"></path>
//                                             </svg>
//                                         </div>

//                                         <p class="firstp">No products in the cart.</p>

//                                         <p class="secondp">We reduce shipping prices to only 2.49 €!</p>

//                                     </div>

//                                     <div id="polniy_basket" class="polniy d-none">
//                                         <div id="small_basket_innner" class="polniy_top">

//                                         </div>

//                                         <div class="polniy_bottom">

//                                             <div class="subtotal_bag_div" id="subtotal_bag_div">
//                                                 <span class="subsub">Subtotal</span>
//                                                 <span class="dollar1">
//                                                     <span>$</span>
//                                                     <span id="subtotal_right_countprice"></span>
//                                                 </span>
//                                             </div>
//                                             <button class="checkout_">Checkout</button>
//                                             <p class="secondp_">We reduce shipping prices to only 2.49 €!</p>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>

//                         </div>

//                     </div>

//                     <div class="bottom_bottom">

//                         <div class="col-lg-2 categories">
//                             <div id="categories">
//                                 <i class="fas fa-bars"></i>
//                                 <p>
//                                     ALL CATEGORIES
//                                     <span>TOTAL 63 PRODUCTS</span>
//                                 </p>
//                                 <i class="fa-solid fa-angle-down"></i>
//                             </div>
//                         </div>

//                         <div class="col-lg-2-7" id="all_categories">

//                             <div class="continued" id="continued">

//                                 <div class="dla_hovera categories_click_element">
//                                     <i class="klbth-icon-apple-juice ikon"></i>
//                                     <p class="mainmainmain">
//                                         Fruits & Vegetables
//                                     </p>
//                                     <i class="fa-solid fa-angle-right ikon"></i>
//                                 </div>

//                                 <div class="col-lg-12 leftmenu" id="categories_all2">
//                                     <p>Cuts & Sprouts</p>
//                                     <p>Exotic Friuits & Veggies</p>
//                                     <p>Fresh Fruits</p>
//                                     <p>Fresh Vegetables</p>
//                                     <p>Herbs & Seasonings</p>
//                                     <p>Packaged Produce</p>
//                                     <p>Party Trays</p>
//                                 </div>

//                             </div>

//                             <p class="categories_click_element">
//                                 <i class="klbth-icon-meat ikon"></i>
//                                 <span>
//                                     Meats & Seafood
//                                 </span>
//                             </p>

//                             <p class="categories_click_element">
//                                 <i class="klbth-icon-boiled-egg ikon"></i>
//                                 <span>
//                                     Breakfast & Dairy
//                                 </span>
//                             </p>

//                             <div class=" col-lg-12 continued" id="continued1">

//                                 <div class="dla_hovera1 categories_click_element">
//                                     <i class="klbth-icon-cup ikon"></i>
//                                     <p class="mainmainmain">
//                                         Beverages
//                                     </p>
//                                     <i class="fa-solid fa-angle-right ikon"></i>
//                                 </div>


//                                 <div class="col-lg-12 leftmenu" id="categories_all3">
//                                     <p>Coffee</p>
//                                     <p>Craft Beer</p>
//                                     <p>Drink Boxes & Pouches</p>
//                                     <p>Milk & Plant-Based Milk</p>
//                                     <p>Soda & Pop</p>
//                                     <p>Sparkling Water</p>
//                                     <p>Tea & Kombutca</p>
//                                     <p>Water</p>
//                                     <p>Wine</p>
//                                 </div>

//                             </div>

//                             <p class="categories_click_element">
//                                 <i class="klbth-icon-biscuit ikon"></i>
//                                 <span>
//                                     Breads & Bakery
//                                 </span>
//                             </p>

//                             <p class="categories_click_element">
//                                 <i class="klbth-icon-snowflake ikon"></i>
//                                 <span>
//                                     Frozen Foods
//                                 </span>
//                             </p>

//                             <p class="categories_click_element">
//                                 <i class="klbth-icon-candy ikon"></i>
//                                 <span>
//                                     Biscuits & Snacks
//                                 </span>
//                             </p>

//                             <p class="categories_click_element posledniy">
//                                 <i class="klbth-icon-vegan ikon"></i>
//                                 <span>
//                                     Grocery & Staples
//                                 </span>
//                             </p>

//                             <hr>

//                             <div class="bot">
//                                 <p>Value of the Day</p>
//                                 <p>Top 100 Offers</p>
//                                 <p>New Arrivals</p>
//                             </div>

//                         </div>

//                         <div class="col-lg-8 navigation">

//                             <div class="megamenu1keeper">
//                                 <a href="index.html">
//                                     <p>
//                                         <span> HOME</span>
//                                         <i class="fa-solid fa-angle-down"></i>
//                                     </p>

//                                 </a>

//                                 <div class="megamenu1">
//                                     <div class="all">
//                                         <p>Home 1</p>
//                                         <p>Home 2</p>
//                                         <p>Home 3</p>
//                                         <p>Home 4</p>
//                                         <p>Home 5</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div class="megamenu2keeper">
//                                 <a href="shop.html">
//                                     <p>
//                                         <span>SHOP</span>
//                                         <i class="fa-solid fa-angle-down"></i>
//                                     </p>
//                                 </a>

//                                 <div class="megamenu2">
//                                     <div class="all">
//                                         <div class="col-lg-2-2 footer_keeper">
//                                             <h6>
//                                                 FRUIT & VEGETABLES
//                                             </h6>
//                                             <a href="">Fresh Vegetables</a>
//                                             <a href="">Herbs & Seasonings</a>
//                                             <a href="">Fresh Fruits</a>
//                                             <a href="">Cuts & Sprouts</a>
//                                             <a href="">Exotic Fruits & Veggies</a>
//                                             <a href="">Packaged Produce</a>
//                                             <a href="">Party Trays</a>
//                                         </div>

//                                         <div class="col-lg-2-2 footer_keeper">
//                                             <h6>
//                                                 BREAKFAST & DAIRY
//                                             </h6>
//                                             <a href="">Milk & Flavoured Milk</a>
//                                             <a href="">Butter and Margarine</a>
//                                             <a href="">Cheese</a>
//                                             <a href="">Eggs Substitutes</a>
//                                             <a href="">Honey</a>
//                                             <a href="">Marmalades</a>
//                                             <a href="">Sour Cream and Dips</a>
//                                             <a href="">Yogurt</a>
//                                         </div>

//                                         <div class="col-lg-2-2 footer_keeper">
//                                             <h6>
//                                                 MEAT & SEAFOOD
//                                             </h6>
//                                             <a href="">Breakfast Sausage</a>
//                                             <a href="">Dinner Sausage</a>
//                                             <a href="">Beef</a>
//                                             <a href="">Chicken</a>
//                                             <a href="">Sliced Deli Meat</a>
//                                             <a href="">Shrimp</a>
//                                             <a href="">Wild Caught Fillets</a>
//                                             <a href="">Crab and Shellfish</a>
//                                             <a href="">Farm Raised Fillets</a>
//                                         </div>

//                                         <div class="col-lg-2-2 footer_keeper">
//                                             <h6>
//                                                 BEVERAGES
//                                             </h6>
//                                             <a href="">Water</a>
//                                             <a href="">Sparkling Water</a>
//                                             <a href="">Soda & Pop</a>
//                                             <a href="">Coffee</a>
//                                             <a href="">Milk & Plant-Based Milk</a>
//                                             <a href="">Tea & Kombucha</a>
//                                             <a href="">Drink Boxes & Pouches</a>
//                                             <a href="">Craft Beer</a>
//                                             <a href="">Wine</a>
//                                         </div>

//                                         <div class="col-lg-1-8 footer_keeper">
//                                             <h6>
//                                                 BREADS & BAKERY
//                                             </h6>
//                                             <a href="">Milk & Flavoured Milk</a>
//                                             <a href="">Butter and Margarine</a>
//                                             <a href="">Cheese</a>
//                                             <a href="">Eggs Substitutes</a>
//                                             <a href="">Honey</a>
//                                             <a href="">Marmalades</a>
//                                             <a href="">Sour Cream and Dips</a>
//                                             <a href="">Yogurt</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <p class="nav_p">
//                                 <i class="klbth-icon-meat"></i>
//                                 MEAT & SEAFOOD
//                             </p>

//                             <p class="nav_p">
//                                 <i class="klbth-icon-biscuit"></i>
//                                 BAKERY
//                             </p>

//                             <p class="nav_p">
//                                 <i class="klbth-icon-cup"></i>
//                                 BEVERAGES
//                             </p>

//                             <a class="nav_p" href="blog.html">BLOG</a>

//                             <a class="nav_p" href="contact.html">CONTACT</a>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     </header>

//     <section id="first">
//         <div class="container">
//             <div class="row all">

//                 <div class="top">

//                     <div class="col-lg-7-7 slide1 col-12">
//                         <div class="slide1_content">
//                             <div class="col-lg-8 col-6">
//                                 <p class="first_p">EXCLUSIVE OFFER <span>-20% OFF</span></p>
//                                 <h1>Feed your family the best</h1>
//                                 <p class="second_p">Only this week. Don't miss...</p>
//                                 <p class="third_p">from <span>$7.99</span></p>
//                                 <button class="">Shop Now<i class="fa-solid fa-arrow-right-long"></i></button>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="col-lg-4 slide2 col-12">
//                         <img class="slide2_content" src="assets/images/sidebar-banner.gif" alt="">
//                     </div>

//                 </div>

//                 <div class="bottom flex-wrap">

//                     <div class="col-lg-5-8 slide3 col-12">

//                         <div class="col-lg-6 slide3_content">
//                             <p class="first_p">Everything is so fresh</p>
//                             <p class="second_p">only in Bacola</p>
//                             <p class="third_p">Bacola Weekend Discount</p>
//                             <button>Shop Now</button>
//                         </div>

//                     </div>


//                     <div class="col-lg-5-8 slide4 col-12">

//                         <div class="col-lg-6 slide4_content">
//                             <p class="first_p">Big discount on</p>
//                             <p class="second_p">organic legumes</p>
//                             <p class="third_p">Bacola Weekend Discount</p>
//                             <button>Shop Now</button>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="second">
//         <div class="container">
//             <div class="row all">

//                 <div class="top">
//                     <div class="top_left">
//                         <h4>Best Sellers</h4>
//                         <p>Do not miss the current offers until the end of March.</p>
//                     </div>
//                     <div class="top_right">
//                         <button>
//                             View All
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>

//                 </div>

//                 <div class="bottom slider1">

//                     <div class="slider_keeper product_html" id="1">
//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/product-image-48-346x310.jpg" class="card-img-top img-fluid">

//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>All Natural Italian-style Chicken Meatballs</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$4.09</span>
//                                     <span>$</span>
//                                     <span>1.85</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="2">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/1.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Home made Kartoflu and Etli Perashki</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$4.09</span>
//                                     <span>$</span>
//                                     <span>2.59</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>

//                     </div>
//                     <div class="slider_keeper product_html" id="3">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/2.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Field Roast Chao Cheese Creamy Original</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$8.09</span>
//                                     <span>$</span>
//                                     <span>5.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="4">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/3.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Nenemin Tendiri Meat edition With Zeferan</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$36.09</span>
//                                     <span>$</span>
//                                     <span>33.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="5">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/4.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Lule Kabab And Basdirma edition barbeque</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$16.79</span>
//                                     <span>$</span>
//                                     <span>13.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="6">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/5.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>


//                             <ul>
//                                 <li>Caspian sea Salmon Catched in Nardaran</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$21.09</span>
//                                     <span>$</span>
//                                     <span>17.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="7">
//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/6.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>



//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Azerbaijani Dolma made with love of Gulshan khala</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$16.09</span>
//                                     <span>$</span>
//                                     <span>14.29</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="8">

//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/7.jpg" class="card-img-top img-fluid">

//                             </a>

//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Three sisters Dolma made at Sovetski houses</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$16.09</span>
//                                     <span>$</span>
//                                     <span>14.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="9">

//                         <div class="card slider_card">
//                             <a href="product.html">

//                                 <img src="./assets/images/8.jpg" class="card-img-top img-fluid">
//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>

//                             <ul>
//                                 <li>Dushbere named delicacy cooked at Kubinka</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$17.09</span>
//                                     <span>$</span>
//                                     <span>16.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="10">

//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/9.jpg" class="card-img-top img-fluid">

//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>


//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <ul>
//                                 <li>Gurze with special oil and seasoning</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$26.09</span>
//                                     <span>$</span>
//                                     <span>19.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div class="slider_keeper product_html" id="11">

//                         <div class="card slider_card">
//                             <a href="product.html">
//                                 <img src="./assets/images/10.jpg" class="card-img-top img-fluid">

//                             </a>


//                             <span>
//                                 <span class="percentage">
//                                     23%
//                                 </span>

//                                 <span class="recommend">
//                                     Recommended
//                                 </span>
//                             </span>

//                             <span class="size">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path
//                                         d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                     </path>
//                                 </svg>
//                             </span>

//                             <span class="heart">
//                                 <i class="fa-solid fa-heart"></i>
//                             </span>
//                             <ul>
//                                 <li>Pomidor Yumurta made by Gulchichek khala at Icerisheher</li>
//                                 <li>IN STOCK</li>
//                                 <li>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <i class="fa-solid fa-star"></i>
//                                     <span>1</span>
//                                 </li>
//                                 <li>
//                                     <span>$18.09</span>
//                                     <span>$</span>
//                                     <span>14.69</span>
//                                 </li>
//                                 <li class="hovered_btn">
//                                     <button class="addtocart">
//                                         Add to cart
//                                     </button>

//                                     <div class="top_counter d-none">
//                                         <button id="decrease" class="decrease">
//                                             -
//                                         </button>

//                                         <span id="result_count">
//                                             1
//                                         </span>

//                                         <button id="increase" class="increase">
//                                             +
//                                         </button>
//                                     </div>
//                                 </li>
//                             </ul>

//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="third">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-lg-6 left">
//                     <h6><span>100% Secure delivery</span> without contacting the courier</h6>
//                 </div>
//                 <div class="col-lg-4 middle">
//                     <img src="./assets/images/banner-box2.jpg" alt="">
//                 </div>
//                 <div class="col-lg-2 right">
//                     <button class="btn btn-success">Shop Now</button>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="third_fourth">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-lg-12 fourth_head">

//                     <div class="top_left">
//                         <h6>FRUIT & VEGETABLES</h6>
//                         <p>The freshest greengrocer products are waiting for you</p>
//                     </div>
//                     <div class="top_right">
//                         <button>
//                             View All
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="fourth">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-lg-4 first">
//                     <p>
//                         Weekly Discounts on
//                         <span>Fruits and Vegetables</span>
//                         <span>Bacola Weekend Discount</span>
//                     </p>
//                     <button>View All</button>

//                 </div>

//                 <div class="col-lg-2 product_html product" id="12">
//                     <div class="product_card">
//                         <a href="product.html">
//                             <img src="./assets/images/18.jpg" class="card-img-top img-fluid">
//                         </a>


//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul class="korotkiy">
//                             <li>Organic Sweet Lime</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$7.00</span>
//                                 <span>$</span>
//                                 <span>5.49</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="13">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/11.jpg" class="card-img-top img-fluid">
//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul>
//                             <li>Fresh Organic Broccoli Crowns</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$8.00</span>
//                                 <span>$</span>
//                                 <span>6.19</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="14">
//                     <div class="product_card">
//                         <a href="product.html">
//                             <img src="./assets/images/12.jpg" class="card-img-top img-fluid">

//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul class="korotkiy">
//                             <li>Organic Brown Coconut</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$2.00</span>
//                                 <span>$</span>
//                                 <span>1.49</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product radiuslutop-sag" id="15">
//                     <div class="product_card radiuslutop-sag">
//                         <a href="product.html">
//                             <img src="./assets/images/13.jpg" class="card-img-top img-fluid">

//                         </a>
//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul class="korotkiy">
//                             <li>Fresh Cavendish Bananas</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$3.40</span>
//                                 <span>$</span>
//                                 <span>2.49</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>

//                 <div class="col-lg-4 second">

//                     <div class="up">

//                         <div class="left col-lg-6 ahrefs">
//                             <a href="">Herbs & Seasonings</a>
//                             <a href="">Party Trays</a>
//                             <a href="">Exotic Fruits & Veggies</a>
//                             <a href="">Fresh Vegetables</a>
//                         </div>

//                         <div class="right col-lg-4-4 ahrefs">
//                             <a href="">Packaged Produce</a>
//                             <a href="">Cuts & Sprouts</a>
//                             <a href="">Fresh Fruits</a>
//                         </div>

//                     </div>

//                     <div class="down">
//                         <a href="">Shop All Fruits & Vegetables
//                         </a>
//                         <i class="fa-solid fa-arrow-right-long"></i>
//                     </div>

//                 </div>

//                 <div class="col-lg-2 product_html product" id="16">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/14.jpg" class="card-img-top img-fluid">
//                         </a>


//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul class="korotkiy">
//                             <li>Fresh Organic Kiwi</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$11.00</span>
//                                 <span>$</span>
//                                 <span>5.79</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="17">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/15.jpg" class="card-img-top img-fluid">
//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul>
//                             <li>Fresh Organic Green Grapevines</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$1.00</span>
//                                 <span>$</span>
//                                 <span>0.79</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="18">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/16.jpg" class="card-img-top img-fluid">
//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul class="korotkiy">
//                             <li>Texas Rio Red Grapefruit </li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$9.00</span>
//                                 <span>$</span>
//                                 <span>6.99</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product radiuslubottom-sag" id="19">
//                     <div class="product_card radiuslubottom-sag">
//                         <a href="product.html">
//                             <img src="./assets/images/17.jpg" class="card-img-top img-fluid">

//                         </a>
//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul class="korotkiy">
//                             <li>Fresh Organic Strawberry</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$7.40</span>
//                                 <span>$</span>
//                                 <span>5.30</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>

//             </div>
//         </div>
//     </section>

//     <section id="fifth">
//         <div class="container">
//             <div class="row all">
//                 <span class="col-lg-3-5">Super discount for your <span>first purchase</span></span>
//                 <span class="col-lg-1-5">FREE25BAC</span>
//                 <span class="col-lg-2-5">Use discount code in checkout!</span>
//             </div>
//         </div>
//     </section>

//     <section id="fifth_sixth">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-lg-12 sixth_head">

//                     <div class="top_left">
//                         <h6>BREAKFAST & DAIRY</h6>
//                         <p>The freshest greengrocer products are waiting for you</p>
//                     </div>
//                     <div class="top_right">
//                         <button>
//                             View All
//                             <i class="fa-solid fa-arrow-right-long"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="sixth">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-lg-4 first">
//                     <p>
//                         Weekly Discounts on
//                         <span>Breakfast and Diary</span>
//                         <span>Bacola Weekend Discount</span>
//                     </p>
//                     <button>View All</button>
//                 </div>

//                 <div class="col-lg-2 product_html product" id="20">
//                     <div class="product_card">
//                         <a href="product.html">
//                             <img src="./assets/images/20.jpg" class="card-img-top img-fluid">

//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul>
//                             <li>Blueberries - 1 Pint Package</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$8.00</span>
//                                 <span>$</span>
//                                 <span>4.12</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="21">
//                     <div class="product_card">
//                         <a href="product.html">
//                             <img src="./assets/images/21.jpg" class="card-img-top img-fluid">

//                         </a>


//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul>
//                             <li>Chobani Complete Vanilla Greek Yogurt</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$6.09</span>
//                                 <span>$</span>
//                                 <span>6.51</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="22">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/22.jpg" class="card-img-top img-fluid">
//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul class="korotkiy">
//                             <li>American Cheese Singles</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$6.09</span>
//                                 <span>$</span>
//                                 <span>5.89</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product radiuslutop-sag" id="23">
//                     <div class="product_card radiuslutop-sag">
//                         <a href="product.html">
//                             <img src="./assets/images/23.jpg" class="card-img-top img-fluid">

//                         </a>

//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul>
//                             <li>Challenge Spreadable Butter </li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$3.09</span>
//                                 <span>$</span>
//                                 <span>2.29</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>

//                 <div class="col-lg-4 second">

//                     <div class="up">

//                         <div class="left col-lg-6 ahrefs">
//                             <a href="">Butter and Margarine</a>
//                             <a href="">Eggs Substitutes</a>
//                             <a href="">Marmalades</a>
//                             <a href="">Sour Cream and Dips</a>
//                         </div>

//                         <div class="right col-lg-4-4 ahrefs">
//                             <a href="">Cheese</a>
//                             <a href="">Honey</a>
//                             <a href="">Milk & Flavoured Milk</a>
//                             <a href="">Yogurt</a>
//                         </div>

//                     </div>

//                     <div class="down">
//                         <a href="">Shop All Breakfast and Dairy
//                         </a>
//                         <i class="fa-solid fa-arrow-right-long"></i>
//                     </div>

//                 </div>

//                 <div class="col-lg-2 product_html product" id="24">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/24.jpg" class="card-img-top img-fluid">
//                         </a>


//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul>
//                             <li>FairLife Lactose-Free 2% Milk</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$5.99</span>
//                                 <span>$</span>
//                                 <span>5.79</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="25">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/25.jpg" class="card-img-top img-fluid">
//                         </a>


//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul>
//                             <li>Nestle Original Coffee- Mate Coffee Creamer</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$7.49</span>
//                                 <span>$</span>
//                                 <span>6.29</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product" id="26">
//                     <div class="product_card">
//                         <a href="product.html">

//                             <img src="./assets/images/26.jpg" class="card-img-top img-fluid">
//                         </a>


//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>
//                         <ul>
//                             <li>Organic Cage-Free Grade A Large Brown...</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$3.99</span>
//                                 <span>$</span>
//                                 <span>2.69</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//                 <div class="col-lg-2 product_html product radiuslubottom-sag" id="27">
//                     <div class="product_card radiuslubottom-sag">
//                         <a href="product.html">

//                             <img src="./assets/images/27.jpg" class="card-img-top img-fluid">
//                         </a>
//                         <span class="size">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                 <path
//                                     d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z">
//                                 </path>
//                             </svg>
//                         </span>

//                         <span class="heart">
//                             <i class="fa-solid fa-heart"></i>
//                         </span>
//                         <span></span>

//                         <ul>
//                             <li>Vital Parms Pasture- Raised Egg Bites...</li>
//                             <li><span>1 kg</span> IN STOCK</li>
//                             <li>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <span>1</span>
//                             </li>
//                             <li>
//                                 <span>$6.00</span>
//                                 <span>$</span>
//                                 <span>4.59</span>
//                             </li>
//                             <li class="hovered_btn">
//                                 <button class="addtocart">
//                                     Add to cart
//                                 </button>

//                                 <div class="top_counter d-none">
//                                     <button id="decrease" class="decrease">
//                                         -
//                                     </button>

//                                     <span id="result_count">
//                                         1
//                                     </span>

//                                     <button id="increase" class="increase">
//                                         +
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="seventh">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-lg-3-8">
//                     <span>WEEKEND DISCOUNT 20%</span>
//                     <h4>NATURAL EGGS</h4>
//                     <span class="spanspan">Eat one every day</span>
//                     <button>Shop Now</button>
//                 </div>

//                 <div class="col-lg-3-8">
//                     <span>WEEKEND DISCOUNT 40%</span>
//                     <h4>TASTE THE BEST</h4>
//                     <span class="spanspan">Shine the morning</span>
//                     <button>Shop Now</button>
//                 </div>

//                 <div class="col-lg-3-8">
//                     <span>WEEKEND DISCOUNT 30%</span>
//                     <h4>DITCH THE JUNK</h4>
//                     <span class="spanspan">Breakfast made better</span>
//                     <button>Shop Now</button>
//                 </div>

//             </div>
//         </div>
//     </section>

//     <section id="eighth">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-lg-2-4 left">
//                     <div>
//                         <img src="assets/images/baverages-1.jpg" alt="">
//                         <span>Beverages</span>
//                         <span>11 Items</span>
//                     </div>
//                 </div>

//                 <div class="col-lg-9-6 right">

//                     <div class="col-lg-3 eat">
//                         <div class="col-lg-4">
//                             <img src="assets/images/31.jpg" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Biscuits & Snacks</span>
//                             <span>6 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat">
//                         <div class="col-lg-4">
//                             <img src="assets/images/32.jpg" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Breads & Bakery</span>
//                             <span>5 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat">
//                         <div class="col-lg-4">
//                             <img src="assets/images/33.jpg" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Breakfast & Dairy</span>
//                             <span>16 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat posledniy1">
//                         <div class="col-lg-4">
//                             <img src="assets/images/34.png" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Frozen Foods</span>
//                             <span>6 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat">
//                         <div class="col-lg-4">
//                             <img src="assets/images/35.jpg" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Fruits & Vegetables</span>
//                             <span>12 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat">
//                         <div class="col-lg-4">
//                             <img src="assets/images/36.png" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Grocery & Staples</span>
//                             <span>9 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat">
//                         <div class="col-lg-4">
//                             <img src="assets/images/37.jpg" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Household Needs</span>
//                             <span>2 Items</span>
//                         </div>
//                     </div>

//                     <div class="col-lg-3 eat posledniy2">
//                         <div class="col-lg-4">
//                             <img src="assets/images/38.jpg" alt="">
//                         </div>
//                         <div class="col-lg-7 nadpis">
//                             <span>Meats & Seafood</span>
//                             <span>10 Items</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <section id="nineth">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-lg-6 left">

//                     <p>$20 discount for your first order</p>
//                     <p>Join our newsletter and get...</p>
//                     <p>Join our email subscription now to get updates on promotions and coupons.</p>

//                     <div class="input_keeper">
//                         <i class="klbth-icon-mail"></i>
//                         <input placeholder="Your eMail address" type="email">
//                         <button>Subscribe</button>
//                     </div>

//                 </div>

//                 <div class="col-lg-6 photo_relative">
//                     <img src="assets/images/coupon.png" alt="">
//                 </div>

//             </div>
//         </div>
//     </section>

//     <section id="tenth">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-lg-3 ">
//                     <i class="klbth-icon-milk-box"></i>
//                     <span>Everyday fresh products</span>
//                 </div>

//                 <div class="col-lg-3 ">
//                     <i class="klbth-icon-delivery-truck-2"></i>
//                     <span>Free delivery for order over $70</span>
//                 </div>

//                 <div class="col-lg-3 ">
//                     <i class="klbth-icon-discount-outline"></i>
//                     <span>Daily Mega Discounts</span>
//                 </div>

//                 <div class="col-lg-3 last">
//                     <i class="klbth-icon-dollar"></i>
//                     <span>Best price on the market</span>
//                 </div>

//             </div>
//         </div>
//     </section>

//     <footer id="footer">
//         <div class="container">
//             <div class="row all">
//                 <div class="col-lg-2-2 footer_keeper">
//                     <h6>
//                         FRUIT & VEGETABLES
//                     </h6>
//                     <a href="">Fresh Vegetables</a>
//                     <a href="">Herbs & Seasonings</a>
//                     <a href="">Fresh Fruits</a>
//                     <a href="">Cuts & Sprouts</a>
//                     <a href="">Exotic Fruits & Veggies</a>
//                     <a href="">Packaged Produce</a>
//                     <a href="">Party Trays</a>
//                 </div>

//                 <div class="col-lg-2-2 footer_keeper">
//                     <h6>
//                         BREAKFAST & DAIRY
//                     </h6>
//                     <a href="">Milk & Flavoured Milk</a>
//                     <a href="">Butter and Margarine</a>
//                     <a href="">Cheese</a>
//                     <a href="">Eggs Substitutes</a>
//                     <a href="">Honey</a>
//                     <a href="">Marmalades</a>
//                     <a href="">Sour Cream and Dips</a>
//                     <a href="">Yogurt</a>
//                 </div>

//                 <div class="col-lg-2-2 footer_keeper">
//                     <h6>
//                         MEAT & SEAFOOD
//                     </h6>
//                     <a href="">Breakfast Sausage</a>
//                     <a href="">Dinner Sausage</a>
//                     <a href="">Beef</a>
//                     <a href="">Chicken</a>
//                     <a href="">Sliced Deli Meat</a>
//                     <a href="">Shrimp</a>
//                     <a href="">Wild Caught Fillets</a>
//                     <a href="">Crab and Shellfish</a>
//                     <a href="">Farm Raised Fillets</a>
//                 </div>

//                 <div class="col-lg-2-2 footer_keeper">
//                     <h6>
//                         BEVERAGES
//                     </h6>
//                     <a href="">Water</a>
//                     <a href="">Sparkling Water</a>
//                     <a href="">Soda & Pop</a>
//                     <a href="">Coffee</a>
//                     <a href="">Milk & Plant-Based Milk</a>
//                     <a href="">Tea & Kombucha</a>
//                     <a href="">Drink Boxes & Pouches</a>
//                     <a href="">Craft Beer</a>
//                     <a href="">Wine</a>
//                 </div>

//                 <div class="col-lg-1-8 footer_keeper">
//                     <h6>
//                         BREADS & BAKERY
//                     </h6>
//                     <a href="">Milk & Flavoured Milk</a>
//                     <a href="">Butter and Margarine</a>
//                     <a href="">Cheese</a>
//                     <a href="">Eggs Substitutes</a>
//                     <a href="">Honey</a>
//                     <a href="">Marmalades</a>
//                     <a href="">Sour Cream and Dips</a>
//                     <a href="">Yogurt</a>
//                 </div>

//             </div>
//         </div>
//     </footer>

//     <section id="eleventh">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-lg-2 left">

//                     <div>
//                         <i class="klbth-icon-phone-call"></i>
//                     </div>
//                     <div class="left_right">
//                         <span>8 800 555-55</span>
//                         <span>Working 8:00 - 22:00</span>
//                     </div>

//                 </div>

//                 <div class="col-lg-6 right">

//                     <div class="right_left">
//                         <span>Download App on Mobile :</span>
//                         <span>15% discount on your first purchase</span>
//                     </div>

//                     <div class="right_middle">

//                         <a href="apple.com">
//                             <img src="assets/images/app-store.png" alt="">
//                         </a>
//                         <a href="google.com">
//                             <img src="assets/images/google-play.png" alt="">
//                         </a>

//                     </div>

//                     <div class="right_right">

//                         <a href="https://facebook.com">
//                             <i class="klbth-icon-facebook"></i>
//                         </a>

//                         <a href="https://instagram.com">
//                             <i class="klbth-icon-instagram"></i>
//                         </a>

//                         <a href="https://twitter.com">
//                             <i class="klbth-icon-twitter"></i>
//                         </a>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     </section>

//     <section id="twelfth">
//         <div class="container">
//             <div class="row all">

//                 <div class="col-lg-5-5">
//                     <p>Copyright 2022 © Bacola Theme. All rights reserved. Powered by Vasif Aliyev</p>
//                 </div>

//                 <div class="col-lg-6-5 last">
//                     <a href="">Privacy Policy</a>
//                     <a href="">Terms and Conditions</a>
//                     <a href="">Cookie</a>
//                     <img src="assets/images/payments.jpg" alt="">
//                 </div>

//             </div>
//         </div>
//     </section>

    
//     `;

//   }

// }






//#endregion responsivlik

//acmayin

// #region slider1 slick
$('.slider1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576, //bunu 480 idi 576 eledim 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// #endregion slider1 slick

//#region select location

$(document).ready(function () {

  $('#location_search').focus();

  $("#location").click(function () {
    $('#modal_location').fadeIn(300);
  })

  var modal = document.getElementById('modal_location');

  document.onclick = function (e) {

    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

  $('#close_location').click(function () {
    $('#modal_location').fadeOut(300);
  })

  let locations = document.querySelectorAll('.locations');
  let set_location = document.querySelector('#set_location');
  let locals = document.querySelectorAll('.local');
  //sheherin adini saxlayan <p> uchun
  for (let local of locals) {
    local.onclick = function (e) {

      set_location.innerHTML = e.target.children[0].innerHTML;

      $('#modal_location').fadeOut(300);

    }
  }
  //sheherin adi uchun span uchun
  for (let location of locations) {
    location.onclick = function (e) {
      set_location.innerHTML = e.target.innerHTML;
      $('#modal_location').fadeOut(300);
    }
  }

  //bunu storage versem sheher ilishsin qalsin orda


});

//#endregion select location

//#region categories

$(document).ready(function () {

  $("#categories").click(function () {
    $('#all_categories').slideToggle(220);
  })

});

//#endregion categories

//#region login js

$(document).ready(function () {
  let lon = $('#login_username');
  let lop = $("#login_password");
  let ren = $("#reg_username");
  let rep = $("#reg_password");

  $('#login').click(function () {

    if (lon.val().length < 8 || lop.val().length < 8) {
      $('#error').slideDown(200);
      $('#error_p').html('Your Login and Password must contain at least 8 characters!')
    }
    else {
      $('#error').slideUp(200);
    }

  })

  $('#register').click(function () {

    if (ren.val().length < 8 || rep.val().length < 8) {
      $('#error').slideDown(200);
      $('#error_p').html('Your Login and Password must contain at least 8 characters!')
    }
    else {
      $('#error').slideUp(200);
    }

  })
});

//#endregion login js

//#region contact

$(document).ready(function () {

  let inputs = document.querySelectorAll('.requiredinputfield')

  $('#send_message').click(function () {

    for (let input of inputs) {
      if (input.value.length < 1) {
        input.nextElementSibling.style.display = 'block';
      }
      else {
        input.nextElementSibling.style.display = 'none';
      }
    }

    // if ($('#inp_n').val().length > 0 && $('#inp_s').val().length > 0 && $('#inp_su').val().length > 0) {
    //   $('#bye').css('display', 'block');
    // }
    // else {
    //   $('#bye').css('display', 'none');
    // }

    //yashayiiiiiiiishhhhh

    $('#inp_n').val().length > 0 && $('#inp_s').val().length > 0 && $('#inp_su').val().length > 0 ? $('#bye').css('display', 'block') : $('#bye').css('display', 'none');

  })
});

//#endregion contact

//#region sorting


$(document).ready(function () {

  $("#sortby").click(function () {
    $('#sortingdiv').toggle();
  })

  $("#datasort").click(function () {
    $('#sortdata').toggle();
  })

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //qiraga basanda baglansin

});


//#endregion sorting

//#region product html contact

$(document).ready(function () {

  let prod_inputs = document.querySelectorAll('.inputfield1');

  $('#send_message_product').click(function () {
    console.log('dsdasda')
    for (let inp1 of prod_inputs) {
      if (inp1.value.length < 1) {
        inp1.nextElementSibling.style.display = 'block';
      }
      else {
        inp1.nextElementSibling.style.display = 'none';
      }
    }

  });

});


//#endregion product html contact

//#region tabmenu toggle

let tabclicks = document.querySelectorAll('.tabclick');
let tab_contents = document.querySelectorAll('.tab_content');

for (let tab of tabclicks) {

  tab.onclick = function () {
    tab.classList.add('chosen');

    for (let cont of tab_contents) {

      if (tab.id == cont.id) {
        cont.classList.remove('d-none');
      }
      else {
        cont.classList.add('d-none');
      }
    }
  }
}


//#endregion tabmenu toggle

//#region photo producthtml slider

//burda elemek lazimdi ki, hansi image click olunsa, onun src-sini gotursun set elesin boyuk img-nin srcsinin yerine. Amma evvelce boyuyunkunu '' elemek lazimdi

//#endregion photo producthtml slider

//#region product html datalari getirmek



//burda umumiyyetle set etmek olmayacaq, local storageye atmag lazimdi butun produktlari, sonra da id-ile yoxlamaq hansina klik olunub, onu da getirmek product.htmla

//gerek shekilleri salim fora, hansina klik olunsa onun melumatlarini atim storage-ya, ve product.html acilanda hemin melumatlari set edim muvafiq yerlere



//#endregion product html datalari getirmek

//#region bag_div click olunmasin

let bag_div = document.querySelector('.bag_div');

bag_div.onclick = function (e) {
  e.preventDefault()
}

//#endregion bag_div click olunmasin

//#region bag div and its max height

let bag_div1 = document.querySelector('.bag_div');

if (bag_div1.clientHeight > 300) {
  bag_div1.classList.add('overflowscroll');
}
else {
  bag_div1.classList.remove('overflowscroll');
}

//#endregion bag div and its max heigth

//#region shopping cartin ustundeki span

function CountBasketLength() {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let cartcount = shopcart.length;
  document.querySelector('#cartcount').innerHTML = cartcount;
}

//#endregion shopping cartin ustundeki span




//#region add to basket



$(document).ready(function () {

  if (localStorage.getItem('shopcart') === null) {
    localStorage.setItem('shopcart', JSON.stringify([])); //local storagede arrayimizi yaratdiq
  }
  CountBasketLength();

  // birinci basketi yaratdim, array kimi. Sonra dedim ki productlar for-a salinsin, hansina klik olunsa onun datasini getirsin.

  let addtocartbtn = document.querySelectorAll('.addtocart');

  for (let btntoadd of addtocartbtn) {

    btntoadd.addEventListener('click', function () {
      let reload_ = document.getElementById('reload_');

      let shopcart = JSON.parse(localStorage.getItem('shopcart'));
      //basketimizi getirdim, parse eledim. S-S qaydasi yani ki Set-Stringify, baskete nese gonderende set edirik stringify ile, getirende ise parse edirik.

      let prod_id = this.parentElement.parentElement.parentElement.parentElement.id
      let prod_img_src = this.parentElement.parentElement.parentElement.children[0].children[0].src;

      let prod_name = this.parentElement.parentElement.children[0].innerHTML

      let prod_cost = this.parentElement.previousElementSibling.children[2].innerHTML;

      //butun melumatlari goturdum

      let prodexists = shopcart.find(x => x.Id == prod_id);
      //burda deyirikki, shopkartda X axtarsin, hansi X? id-si bizim almaq istediyimiz produktun id-sine. Tapmasa, elave ede biler, tekrarcilig olmasin deye, eyni produktlar almasinlar.

      if (prodexists == undefined) {
        shopcart.push({
          Id: prod_id,
          Name: prod_name,
          Src: prod_img_src,
          Price: prod_cost,
          Count: 1
        });
      }
      else {
        prodexists.Count++;
      }

      //dedik ki bes eyni id-li mehsul tapilsa, onda countunu artirsin

      localStorage.setItem('shopcart', JSON.stringify(shopcart));
      //hemishe set eliyirik obratno

      setTimeout(() => {

        location.reload();
        reload_.classList.remove('d-none');
        return false;

      }, 500);

      reload_.classList.add('d-none');

      //set edirik obratno v nash basket
      CountBasketLength();

      //set eliyen kimi getsin spanin icindeki regemi deyishsin
      CountBasketCost();

      //set olunan kimi de avtomatik refresh elesin balaca basketi
      AddToLittleBasket();
    })
  }
});

//#endregion add to basket




//#region countbasket kimi burda da balaca baskete add edirem, ki ozu refreshsiz add elesin, fuksiya ozu ashagidadir


function AddToLittleBasket() {

  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let little_filled_basket = document.querySelector('#polniy_basket')
  let little_empty_basket = document.querySelector('#pustoy_basket')

  //basketimizi cagirdig, parse eledik
  // bosh olanda yaradilan sectionu basket boshdursa gostereceyik

  if (shopcart.length != 0) {

    little_empty_basket.classList.add('d-none');
    little_filled_basket.classList.remove('d-none');

    let pr_small = '';
    let small_basket_inner = document.querySelector('#small_basket_innner');

    for (let product of shopcart) {

      pr_small +=
        `
              <div class="product_bag_div">

                  <div class="left col-lg-3">
                      <img src="${product.Src}">
                      <span id="remove_prod_basket" class="remove_x_small_basket remove_prod_basket">
                          x
                      </span>
                  </div>

                  <div class="right col-lg-9">

                      <div class="top">
                          ${product.Name}
                      </div>

                      <div class="bottom">
                          <span>${product.Count} pcs.</span>
                          <span>x</span>
                          <span>${product.Price}$</span>
                      </div>

                  </div>

              </div>
          `
      small_basket_inner.innerHTML = pr_small;
    }

  }
  else {
    little_empty_basket.classList.remove('d-none');
    little_filled_basket.classList.add('d-none');
  }

}

//#endregion countbasket kimi burda da balaca baskete add edirem, ki ozu refreshsiz add elesin, fuksiya ozu ashagidadir








//#region yoxlayirig basket boshdu ya yox ve yigirig baskete

$(document).ready(function () {

  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let little_filled_basket = document.querySelector('#polniy_basket')
  let little_empty_basket = document.querySelector('#pustoy_basket')

  //basketimizi cagirdig, parse eledik
  // bosh olanda yaradilan sectionu basket boshdursa gostereceyik

  if (shopcart.length != 0) {

    little_empty_basket.classList.add('d-none');
    little_filled_basket.classList.remove('d-none');

    let pr_small = '';
    let small_basket_inner = document.querySelector('#small_basket_innner');

    for (let product of shopcart) {

      pr_small +=
        `
              <div class="product_bag_div" id="${product.Id}">

                  <div class="left col-lg-3">
                      <img src="${product.Src}">
                      <span id="remove_prod_basket" class="remove_x_small_basket remove_prod_basket">
                          x
                      </span>
                  </div>

                  <div class="right col-lg-9">

                      <div class="top">
                          ${product.Name}
                      </div>

                      <div class="bottom">
                          <span>${product.Count} pcs.</span>
                          <span>x</span>
                          <span>${product.Price}$</span>
                      </div>

                  </div>

              </div>
          `
      small_basket_inner.innerHTML = pr_small;
    }

  }
  else {
    little_empty_basket.classList.remove('d-none');
    little_filled_basket.classList.add('d-none');
  }

});


//#endregion yoxlayirig basket boshdu ya yox




//#region CountBasketCost hemin funksiyadi, prosto bilmirem niye ozu ozunu cagirmir, funksiya ozu ashagidakidi

function CountBasketCost() {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let total = 0;
  let subtotal_inner = document.querySelector('#subtotal_right_countprice');
  let total_header_cost = document.querySelector('#total_header_cost');

  for (let product of shopcart) {
    total += product.Price * product.Count
  }

  subtotal_inner.innerHTML = Math.round(total * 100) / 100;

  total_header_cost.innerHTML = `$${Math.round(total * 100) / 100}`;

  if (total == 0) {
    document.getElementById('subtotal_right_countprice').innerHTML = '$0.00';
    document.getElementById('total_header_cost').innerHTML = '$0.00';
  }
}


//#endregion CountBasketCost hemin funksiyadi, prosto bilmirem niye ozu ozunu cagirmir, funksiya ozu ashagidakidi


//#region totali hesablayirig

$(document).ready(function () {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let total = 0;
  let subtotal_inner = document.querySelector('#subtotal_right_countprice');
  let total_header_cost = document.querySelector('#total_header_cost');

  for (let product of shopcart) {
    total += product.Price * product.Count
  }

  subtotal_inner.innerHTML = Math.round(total * 100) / 100;

  total_header_cost.innerHTML = `$${Math.round(total * 100) / 100}`;

  if (total == 0) {
    document.getElementById('subtotal_right_countprice').innerHTML = '$0.00';
    document.getElementById('total_header_cost').innerHTML = '$0.00';
  }
});


//#endregion totali hesablayirig





//#region delete item 


let shopcart = JSON.parse(localStorage.getItem('shopcart'));

$(document).ready(function () {

  let shopcart = JSON.parse(localStorage.getItem('shopcart'));

  let prod_sm_bs = document.querySelectorAll('.product_bag_div');

  for (let a = 0; a < shopcart.length; a++) {

    for (let b = 0; b < prod_sm_bs.length; b++) {

      if (shopcart[a].Id == prod_sm_bs[b].id) {

        prod_sm_bs[b].children[0].children[1].onclick = function () {
          shopcart.splice(a, 1);
          localStorage.setItem('shopcart', JSON.stringify(shopcart));
          setTimeout(() => {

            location.reload();
            reload_.classList.remove('d-none');
            return false;

          }, 500);

          reload_.classList.add('d-none');
        }

      }

    }
  }

})


//#endregion delete item 




//#region counter

let prod_inc_dec = document.querySelectorAll('.top_counter')

let products_html = document.querySelectorAll('.product_html');

let addtocartbtns = document.querySelectorAll('.addtocart');

for (let i = 0; i < shopcart.length; i++) {

  for (let prod_html of products_html) {

    if (shopcart[i].Id == prod_html.id) {

      prod_html.children[0].children[4].children[4].children[0].style.display = 'none';

      prod_html.children[0].children[4].children[4].children[1].classList.remove('d-none');

      prod_html.children[0].children[4].children[4].children[1].children[1].innerHTML = shopcart[i].Count;

      prod_html.children[0].children[4].children[4].children[1].children[0].onclick = function () {

        shopcart[i].Count--;

        prod_html.children[0].children[4].children[4].children[1].children[1].innerHTML = shopcart[i].Count;

        setTimeout(() => {

          location.reload();
          reload_.classList.remove('d-none');
          return false;

        }, 500);

        reload_.classList.add('d-none');

        if (shopcart[i].Count < 1) {
          prod_html.children[0].children[4].children[4].children[1].classList.add('d-none');
          prod_html.children[0].children[4].children[4].children[0].style.display = 'block';
          shopcart.splice(i, 1);
          localStorage.setItem('shopcart', JSON.stringify(shopcart));

          setTimeout(() => {

            location.reload();
            reload_.classList.remove('d-none');
            return false;

          }, 500);

          reload_.classList.add('d-none');
        }

        localStorage.setItem('shopcart', JSON.stringify(shopcart));

      }

      prod_html.children[0].children[4].children[4].children[1].children[2].onclick = function () {

        shopcart[i].Count++;

        prod_html.children[0].children[4].children[4].children[1].children[1].innerHTML = shopcart[i].Count;

        localStorage.setItem('shopcart', JSON.stringify(shopcart));

        setTimeout(() => {

          location.reload();
          reload_.classList.remove('d-none');
          return false;

        }, 500);

        reload_.classList.add('d-none');

      }

    }

  }
}

//#endregion counter



//#region clear all

$('#clearall').click(function () {

  localStorage.setItem('shopcart', JSON.stringify([]))
  setTimeout(() => {

    location.reload();
    reload_.classList.remove('d-none');
    return false;

  }, 500);

  reload_.classList.add('d-none');

})

//#endregion refresh page


//#region clear all

$('#refresh').click(function () {

  setTimeout(() => {

    location.reload();
    reload_.classList.remove('d-none');
    return false;

  }, 500);

  reload_.classList.add('d-none');

})

//#endregion refresh page














