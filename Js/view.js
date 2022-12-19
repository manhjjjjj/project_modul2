const view ={};
let cardProduct = {
    mousePads: [
        {
            image: "./image/card anh23.jpg",
            name: "PAD 22 PIKACHU SASUKE",
            price: "35.000",
            id: 1
        },{
            image: "./image/card anh24.jpg",
            name: "PAD 22 MANY CAT (CATS)  ",
            price: "35.000",
            id: 2
        },{
            image: "./image/card anh25.jpg",
            name: "PAD 22 KDA (OTTeam)",
            price: "35.000",
            id: 3
        },{
            image: "./image/card anh26.jpg",
            name: "PAD 83 LOGITECH (80x30)",
            price: "90.000",
            id: 4
        },{
            image: "./image/anhl1.jpg",
            name: "PAD 94 TEAM MŨ RƠM TRẮNG",
            price: "120.000",
            id: 5
        },{
            image: "./image/anhl2.jpg",
            name: "PAD 22 HASHIBIRA INOSUKE ",
            price: "35.000",
            id: 6
        },{
            image: "./image/anhl3.jpg",
            name: "PAD 22 GUNDAM XANH TRẮNG",
            price: "35.000",
            id: 7
        },{
            image: "./image/card anh29.1.jpg",
            name: "PAD 44 SLEEP BEAR",
            price: "35.000",
            id: 8
        }
    ],
    paradigm : [
        {
            image: "./image/250-2285-1.jpg",
            name: "MÔ HÌNH TÀU SUNNY CHIBI 7CM",
            price: "80.000",
            id: 9
        },{
            image: "./image/anhl4.jpg",
            name: "MÔ HÌNH CHIBI NGỒI JINBEI 10CM",
            price: "90.000",
            id: 10
        },{
            image: "./image/250-3008-9.jpg",
            name: "MÔ HÌNH LUFFY ADVENTURE 18CM",
            price: "150.000",
            id: 11
        },{
            image: "./image/250-3005-26.jpg",
            name: "MÔ HÌNH ZORO ENMA GK 28CM",
            price: "790.000",
            id: 12
        },{
            image: "./image/250-3001-20.jpg",
            name: "MÔ HÌNH TỨ HOÀNG SHANK ",
            price: "990.000",
            id: 13
        },{
            image: "./image/anhl5.jpg",
            name: "MÔ HÌNH RỒNG THẦN NAMEK",
            price: "1.090.000",
            id: 14
        },{
            image: "./image/250-2928-44.jpg",
            name: "MÔ HÌNH KAMADO TANJIRO",
            price: "290.000",
            id: 15
        },{
            image: "./image/anhl6.jpg",
            name: "MÔ HÌNH GOKU CHIBI CẦM NGỌC",
            price: "100.000",
            id: 16
        },{
            image: "./image/anhl7.jpg",
            name: "MÔ HÌNH GOJO SATORU ",
            price: "130.000",
            id: 17
        },{
            image: "./image/250-2338-vien-.jpg",
            name: "MÔ HÌNH KILLUA BM HUNTER",
            price: "650.000",
            id: 18
        },{
            image: "./image/anh1.jpg",
            name: "MÔ HÌNH CHIBI NGỒI LUFFY",
            price: "90.000",
            id: 19
        },{
            image: "./image/anh2.jpg",
            name: "MÔ HÌNH CHIBI NGỒI ACE",
            price: "90.000",
            id: 20
        },{
            image: "./image/anh3.jpg",
            name: "MÔ HÌNH CHIBI NGỒI CHOPPER",
            price: "90.000",
            id: 21
        },{
            image: "./image/250-2319-vien-.jpg",
            name: "MÔ HÌNH VEGETTO SSJ BLUE",
            price: "1.450.000",
            id: 22
        },{
            image: "./image/anhl8.jpg",
            name: "MÔ HÌNH GOKU SPIRIT BOMB LED",
            price: "120.000",
            id: 23
        },{
            image: "./image/250-2902-41.jpg",
            name: "MÔ HÌNH LUFFY GEAR 5",
            price: "690.000",
            id: 24
        }
    ],
    decorationAccessories : [
        {
            image: "./image/anhm1.png",
            name: "TRANH CÁT 3D HỌA TIẾT NÚI CAM ĐƯỜNG KÍNH 26CM",
            price: "320.000",
            id: 25
        },{
            image: "./image/anhd1.png",
            name: "ĐỒNG HỒ GƯƠNG KIÊM LOA BLUTOOTH BT501 ĐEN",
            price: "350.000",
            id: 26
        },{
            image: "./image/250-2268-3.jpg",
            name: "ĐỒNG HỒ LED BÁO THỨC RỒNG ĐÁNG YÊU XANH BIỂN",
            price: "120.000",
            id: 27
        },{
            image: "./image/card anh20.jpg",
            name: "ĐỒNG HỒ GỖ LED THÔNG MINH KHUNG NÂU LED TRẮNG",
            price: "120.000",
            id: 28
        },{
            image: "./image/250-2276-1.jpg",
            name: "ĐỒNG HỒ LẬT RETRO CLOCK",
            price: "650.000",
            id: 29
        },{
            image: "./image/anhd2.jpg",
            name: "ĐỒNG HỒ BÁO THỨC LCD DH1011",
            price: "100.000",
            id: 30
        },{
            image: "./image/card anh19.jpg",
            name: "ĐỒNG HỒ LED 3D DIGITAL ",
            price: "120.000",
            id: 31
        },{
            image: "./image/anh0.jpg",
            name: "ĐỒNG HỒ GỖ ĐEN LED TRẮNG",
            price: "120.000",
            id: 32
        }
    ]
}

view.setScreenActive = (screenName) => {
    switch (screenName) {
        case "web":
            let add = document.getElementById("app");
            add.innerHTML = component.web;
            let product = '';
            let productParadigm = '';
            let productDecorationAccessories = '';
            let showIn ='';
            
            function showProduct() {
                    for (let i = 0; i < cardProduct.mousePads.length; i++) {
                        product+=`
                            <div class="heart-card-products">
                                <div class="heart-card">
                                    <img src="${cardProduct.mousePads[i].image}">
                                    <h3>${cardProduct.mousePads[i].name}</h3>
                                    <span class="price-products">
                                        ${cardProduct.mousePads[i].price}
                                        <p class="p">đ</p>
                                    </span>
                                    <div class="icon-card">
                                        <p class="icon-like" id=${cardProduct.mousePads[i].id} ><i class="fa-regular fa-heart heart"></i></p>
                                        <p class="icon-shop"><i class='bx bx-cart'></i></p>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                    showIn = component.web+ `<div class="container-card"><h1> Lót Chuột </h1> ${product}</div>`;
                    add.innerHTML=component.web+ `<div class="container-card"><h1> Lót Chuột </h1> ${product}</div>`
                    for (let i = 0; i < cardProduct.paradigm.length; i++) {
                        productParadigm+=`
                    
                            <div class="heart-card-products list3">
                                <div class="heart-card">
                                    <img src="${cardProduct.paradigm[i].image}">
                                    <h3>${cardProduct.paradigm[i].name}</h3>
                                    <span class="price-products">
                                        ${cardProduct.paradigm[i].price}
                                        <p class="p">đ</p>
                                    </span>
                                    <div class="icon-card">
                                        <p class="icon-like item-like"><i class="fa-regular fa-heart heart" ></i></p>
                                        <p class="icon-shop"><i class='bx bx-cart'></i></p>
                                    </div>
                                </div>
                            </div>
                        `
                    }``
            add.innerHTML=add.innerHTML + `<div class="container-card"><h1> Mô Hình </h1>${productParadigm}</div>`

                    for(let i = 0; i < cardProduct.decorationAccessories.length; i++ ){
                        productDecorationAccessories+=`
                            <div class="heart-card-products">
                                <div class="heart-card">
                                    <img src="${cardProduct.decorationAccessories[i].image}">
                                    <h3>${cardProduct.decorationAccessories[i].name}</h3>
                                    <span class="price-products">
                                        ${cardProduct.decorationAccessories[i].price}
                                        <p class="p">đ</p>
                                    </span>
                                    <div class="icon-card">
                                        <p class="icon-like" ><i class="fa-regular fa-heart"></i></p>
                                        <p class="icon-shop"><i class='bx bx-cart'></i></p>
                                    </div>
                                </div>
                            </div>
                            `
                    }
                    showIn = showIn + `<div class="container-card"><h1> Mô Hình </h1>${productParadigm}</div>`;
            add.innerHTML=add.innerHTML + `<div class="container-card"><h1> Phụ kiện trang trí </h1>${productDecorationAccessories}</div>`
            }
            showIn = showIn + `<div class="container-card"><h1> Phụ kiện trang trí </h1>${productDecorationAccessories}</div>`;
            showProduct()
             
          
            window.onscroll = function() {myFunction()};
            function myFunction() {
            // console.log(document.documentElement.scrollTop);
              if (document.documentElement.scrollTop > 850) {
                //document.getElementById("myP").className = "test";
                // console.log("55555");
                let showNavbar = document.getElementById("menu-taskbar");
                showNavbar.style.display="block";
                let showIconMess=document.getElementById("message");
                showIconMess.style.display="block";
              } else if (document.documentElement.scrollTop < 850) {
                let showNavbar=document.getElementById("menu-taskbar");
                showNavbar.style.display="none";
                let showIconMess=document.getElementById("message");
                showIconMess.style.display="none";
              };
            }
            


         function boxMess() {
            document.getElementById("iconMess").addEventListener("click",()=>{
                console.log("1111");
                let listBoxMess = document.getElementById("app");
                listBoxMess.innerHTML = component.boxChat + showIn;
                view.setScreenActive("boxChat");
             })
            
         }
         boxMess()
             
        
        function SignAndLogUp() {
            document.getElementById("SignUp").addEventListener("click",()=>{
                document.getElementById("app").innerHTML = component.register;
                view.setScreenActive("register")
            })
            document.getElementById("SignIn").addEventListener("click",()=>{
                document.getElementById("app").innerHTML = component.login;
                view.setScreenActive("login")
            })
        }
        SignAndLogUp()


        function address() {
            document.getElementById("address").addEventListener("click", ()=>{
                let boxMap = document.getElementById("app");
                boxMap.innerHTML = component.maps + showIn
                console.log(showIn);
                view.setScreenActive("maps")
            })
        }
        address()
        

        function shop(){
            document.getElementById("shops").addEventListener("click", ()=>{
                let cart = document.getElementById("app")
                cart.innerHTML = component.cart + showIn
                console.log(document.getElementById("shops"));

                document.getElementById("shops").addEventListener("click", ()=>{
                    view.setScreenActive("web")
                });
            });
            
        }
        shop()

        function category(){
            document.getElementById("category").addEventListener("click", ()=>{
                let categorys = document.getElementById("app")
                categorys.innerHTML = `
                    <ul id="categorys">
                        <li class="li">LÓT CHUỘT</li>
                        <li class="li">MÔ HÌNH</li>
                        <li class="li">ĐỒ TRANG TRÍ</li>
                        <li class="li">SẢN PHẨM YÊU THÍCH</li>
                    </ul>
                ` + showIn
                let table = document.getElementById("categorys");
                table.style.height="200px";
                // let showTable = document.getElementsByClassName("li")
                // showTable.style.display="block";

                console.log(document.getElementById("category"));
                document.getElementById("category").addEventListener("click", ()=>{
                    console.log(table.style.height);
                    if(table.style.height === "200px"){
                        // table.removeAttribute('style')
                        table.style.display="none";
                    } else {
                        table.style.display="block"
                    }
                    category()
                })
                
            })
            
        }
        category()



        // let decorProduct = document.getElementsByClassName('item-like')
        // for (let i =0 ; i<decorProduct.length;i++){
        //     decorProduct[i].addEventListener('click',()=>{
        //         document.getElementsByClassName("heart1")[i].classList.add("fa-solid")
        //         document.getElementsByClassName("item-like")[i].setAttribute('style',"color:red")
                
        //         console.log(1);

        //     })
        // }
        

        break;

        case "boxChat":

            console.log(10100);
            document.getElementById("closeTap").addEventListener("click", ()=>{
                view.setScreenActive("web")
           });

        break;

        case "maps":
            console.log(11111111);
            document.getElementById("closed").addEventListener("click", ()=>{
                view.setScreenActive("web")
            })
        break;


        case "cart":

        break;


        let dataUsername ='';
        view.dataUser = (dataUser) =>{
            dataUsername = dataUser;
            console.log(data);
        }
        case "register":
            console.log(11111);
            // let app = document.getElementById("app");
            // app.innerHTML = component.register;
            
            let  registerForm = document.getElementById("registerFrom")
            registerForm.addEventListener("submit", (e)=>{
                e.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    passWord: registerForm.passWord.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                // console.log(data);
                function validateEmail(data) {
                    // console.log("1111111");
                    var re = /\S+@\S+\.\S+/;
                    return re.test(data);
                }
                function checkEmail() {
                    let a = document.getElementById("inputs").value;
                    console.log("66666",validateEmail(a));
                    if(validateEmail(a) == true){
                     console.log("đăng kí thành công!");
                     view.setErrorMessage("email","");
                    }else if(validateEmail(a) == false){
                     console.log("email sai định dạng!");
                     view.setErrorMessage("email","please input Email again!");
                    }
                 }
                checkEmail()
                 
                controller.register(data);
            })
            view.setErrorMessage = (id,content)=>{
                document.getElementById(id).innerHTML = content
            }
            view.setScreenActive("login")
           document.getElementById("login").addEventListener("click", ()=>{
                document.getElementById("app").innerHTML = component.login;
                view.setScreenActive("login");
           })

           document.getElementById("backregister").addEventListener("click", ()=>{
                view.setScreenActive("web");
           });
           
        break;

        case "login":
            // document.getElementById("app").innerHTML = component.login;
            let loginForm = document.getElementById("loginForm")
            let redirectRegister = document.getElementById("login")
            redirectRegister.addEventListener("click",(e)=>{
                e.preventDefault()
                    const data = {
                        email: loginForm.email.value,
                        passWord: loginForm.passWord.value,
                    }
                controller.login(data);
            })
            view.setErrorMessage = (id,content) =>{
                document.getElementById(id).innerHTML = content
            }


           document.getElementById("register").addEventListener("click",()=>{
                document.getElementById("app").innerHTML = component.register;
                view.setScreenActive("register");
           })

           document.getElementById("backlogin").addEventListener("click", ()=>{
                view.setScreenActive("web");
           })
          
        break;



            
        default:

            break;
    }
}
