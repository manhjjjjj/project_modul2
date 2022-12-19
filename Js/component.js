const component = {};
component.web = `
<div class="header-container-text ">
    <div id="background-image"></div>
    <div class="header " id="header-s2">
        <div class="container">
            <div class="container-item">
                <div class="item">
                    <p class="box-title" id="address">
                        <i class="fa-solid fa-location-dot"></i>
                        Địa chỉ liên hệ
                    </p>
                <div class="header-content-holder"></div>
            </div>
                <div class="item">
                    <p class="box-title">
                        <i class="fa-solid fa-headphones"></i>
                        Hotline Trực Tuyến
                    </p>
                <div class="header-content-holder"></div>
            </div>
        </div>
        <p class="container-name-shop">KI_KI.SHOP</p>
            <div class="container-item-s2">
                <div class="item-title">
                    <i class="fa-solid fa-bullhorn"></i>
                    Tin Tức
                </div>
                <i class="fa-solid fa-user"></i>
                <div id="SignUp">Đăng kí</div>
                /
                <div id="SignIn">Đăng Nhập</div>

            </div>
        </div>
    </div>
    <div class=" header-s2">
        <div class="header-div">
            <img src="../image/background.png" alt="">
            <div class="div-list">
                <p class="title" id="category">
                    <i class="fa-solid fa-list"></i>
                    Danh Mục
                </p>
            </div>  
            <div class="div-search">
                <div class="input-search">
                    <button type="submit" class="btn-search icons"><i
                        class="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder="Bạn cần tìm gì ?">
                </div>
            </div>
            <div class="div-shop-section">
                <div class="items-iphone">
                    <i class="fa-solid fa-phone-volume"></i>
                    <div class="iphone-z">
                        Hotline: <br>
                        0398.656.930
                    </div>
                </div>
                <p class="line">|</p>
                <div class="items-i">
                    <i class="fa-solid fa-circle-info"></i>
                    <div>Hỗ trợ</div>
                </div>
                <div class="items-shop" id="shops">
                    <div class="shop-p">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>0</span>
                    </div>
                    <p class="p">Giỏ Hàng</p>
                </div>
            </div>
        </div>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../image/background-banner.png" style="width:100%; height:80%;cursor: pointer; background-color:#8f8e8ec5; border-radius: 5px">
            
                </div>
                <div class="carousel-item">
                    <img src="../image/background-banne2.png" style="width:100%; height:81%;cursor: pointer; background-color:#8f8e8ec5; border-radius: 5px">
                    
                </div>

            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
    </div>
        
            <div class="task-bar" id="menu-taskbar">
                <div class="header-div">
                    <img src="../image/background.png" alt="">
                    <div class="taskbar-menu">
                        <div class="menu-title">
                            <i class="fa-solid fa-list"></i>
                            Danh Mục
                        </div>
                    </div>  
                    <div class="div-search">
                        <div action="" class="input-search">
                            <button type="submit" class="btn-search icons"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                            <input type="text" placeholder="Bạn cần tìm gì ?">
                        </div>
                    </div>
                    <div class="taskbar-shop">
                        <div class="items-iphone">
                            <i class="fa-solid fa-phone-volume"></i>
                            <div class="iphone-z">
                                Hotline: <br>
                                0398.656.930
                            </div>
                        </div>
                        <p class="line">|</p>
                        <div class="items-i">
                            <i class="fa-solid fa-circle-info"></i>
                            <div>Hỗ trợ</div>
                        </div>
                        <div class="items-shop">
                            <div class="shop-p">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>0</span>
                            </div>
                            <div class="p">Giỏ Hàng</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="icon-mess" id="message">
                    <a href="#header-s2"><i class="fa-sharp fa-solid fa-chevron-up"></i></a>
                    <img id="iconMess"  src="../image/icon-mess.png">
            </div>
        
</div>
`
component.maps =`
<div class="form-address">
    <div class="address">
        <i class="fa-solid fa-circle-xmark" id="closed"></i>
        <h1>Địa chỉ</h1>

        <div class="adds-1">
            <i class="fa-solid fa-location-dot"></i>
            <p> Địa Chỉ:Tầng 7 Tháp A Tòa nhà Sông Đà, Đường Phạm Hùng, <br>
                Quận Nam Từ Liêm, Hà Nội, Việt Nam
            </p>
        </div>

        <div class="adds-2">
            <i class="fa-solid fa-phone"></i>
            <p> Số Điện Thoại: 0398656930</p>
        </div>

        <div class="adds-3">
            <i class="fa-solid fa-envelope"></i>
            <p> Địa Chỉ Email: KIKISHOP@gmail.com</p>
        </div>

        <p class="opentime"> Thời gian mở cửa: 8h30 - 21h30</p>
    </div>

    <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.386442773998!2d105.77797432417023!3d21.017218038176946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab30540137%3A0x35ac90387f094f93!2zVMOyYSBuaMOgIFPDtG5nIMSQw6A!5e0!3m2!1svi!2s!4v1670228882985!5m2!1svi!2s" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
</div>
`
component.boxChat = `
<form class="message-box" id="message-boxs">
    <div class="user-mess">
        <p class="user">addmin</p>
        <i id="closeTap" class="fa-solid fa-xmark"></i>
    </div>
    <div class="box-mess">
        <div class="mess">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem illum at perferendis quos porro accusantium unde maxime cupiditate officiis deleniti, sint dolores et itaque ex dolorum debitis, odit saepe optio, natus repellat. Facere eum corporis obcaecati cumque minus inventore vel. Quos mollitia atque eos maiores est sint voluptates placeat velit, accusamus aspernatur non nisi libero quidem totam, accusantium quis. Odit quam numquam soluta omnis corporis veritatis maxime id voluptatibus distinctio fugiat maiores animi, voluptates earum quasi iusto! Delectus repellat dignissimos nisi at asperiores dolor totam illum, nostrum atque officia repellendus ducimus placeat dicta ex modi soluta harum corrupti molestias.</div>
    </div>
    <div class="send-in">
        <input type="summit" placeholder="Enter your message here!!">
        <button><i class="fa-solid fa-paper-plane"></i></button>
    </div>
</form>
`
component.register = `
    <div class="container-register">
        <div class="box-register">
            <i class="fa-solid fa-arrow-left" id="backregister"></i>
            <h1>Register</h1>
            <form id="registerFrom">
                <div class="firstandlast-name">
                    <div class="lastname-box">
                        <label>last name</label> <br>
                        <input type="text" placeholder="input last name" name="lastName">
                        <div class="error" id="lastName"> </div>
                    </div>
                    <div class="firstname-box">
                        <label>first name</label> <br>
                        <input type="text" placeholder="input first name" name="firstName">
                        <div class="error" id="firstName">  </div>
                    </div>
                </div>
                <div class="conten-box">
                    <div class="conten-email">
                        <label>email</label> <br>
                        <input id="inputs" type="text" placeholder="input email" name="email">
                        <div class="error" id="email"> </div>
                    </div>
                    <div class="conten-password">
                        <label>password</label> <br>
                        <input type="text" placeholder="input password" name="passWord">
                        <div class="error" id="password"> </div>
                    </div>
                    <div class="conen-passwordconfirm">
                        <label>confirmpassword</label> <br>
                        <input type="text" placeholder="confirmPassword" name="confirmPassword">
                        <div class="error" id="confirmPassword">  </div>
                    </div>
                </div>
                <div class="buttonclick">
                    <button id="" type="submit">register</button>
                </div>
                <div class="log"><p id="login"> Đăng nhập </p>Nếu bạn đã có tài khoản !!!</div>
            </form>
        </div>
    </div>
`
component.login = `
    <div class="container-login">
        <div class="box-login">
            <i class="fa-solid fa-arrow-left" id="backlogin"></i>
            <h1>login</h1> 
            <form id="loginForm">
                    <div class="conten-box">
                        <div class="conten-email">
                            <label>email</label> <br>
                            <input type="text" placeholder="input email" name="email">
                            <div class="error" id="email"> </div>
                        </div>
                        <div class="conten-password">
                            <label>password</label> <br>
                            <input type="text" placeholder="input password" name="passWord">
                            <div class="error" id="password"> </div>
                        </div>
                    </div>
                <div class="buttonclick">
                    <button id="login">login</button>
                </div>
                <div class="log"><p id="register"> Đăng Kí </p>Nếu bạn chưa có tài khoản !!!</div>
            </form>
        </div>
    </div>
`

component.cart = `
    <div class="header-cart">
        <div class="information-divs1">
            <p class="cart-information">Thông tin giỏ hàng</p>
            <div class="information">
                <p class="back-shop">
                    <i class="fa-solid fa-chevron-left"></i>
                    Chọn tiếp sẳn phẩm khác
                </p>
                <p class="delete-cart">xóa giỏ hàng</p>
            </div>
        </div>
        <div class="information-divs2">
            <div class="productss">sẳn phẩm</div>
            <div class="unit-price">Đơn giá</div>
            <div class="amount">Số lượng</div>
            <div class="prices">Số tiền</div>
            <div class="manipulation">Thao tác</div>
        </div>
        <div class="information-divs3">
            <div class="elment-productss">
                <img src="../image/anh1.jpg">
                <p>MÔ HÌNH CHIBI NGỒI LUFFY</p>
            </div>
            <div class="element-unit-price">90.000</div>
            <div class="element-amount">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <div class="element-prices">90.000</div>
            <div class="element-manipulation">
                <i class="fa-solid fa-trash-can"></i>
                <p>Xóa</p>
            </div>
        </div>
    </div>
`