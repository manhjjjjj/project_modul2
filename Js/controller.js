const controller ={};

controller.register = (data)=>{
    if(data.lastName==""){
        view.setErrorMessage("lastName","please input LastName again!");
    }else{
        view.setErrorMessage("lastName","");
    }

    if(data.firstName==""){
        view.setErrorMessage("firstName","please input FirstName again!");
    }else{
        view.setErrorMessage("firstName","");
    } 

    if (data.email=="") {
        // console.log("5555",data.email);
        view.setErrorMessage("email","please input Email again!");
    } 
    else if(data.email == validateEmail(a)){
       view.setErrorMessage("email","email khong hop le");
    } 
    else{
        view.setErrorMessage("email","");
    }

    if (data.passWord=="") {
        view.setErrorMessage("password","please input Password again!");
    // } else if(data.passord.length < 6){
    //     view.setErrorMessage("password","Password must be have mor than 6 charater ");
    } else{
        view.setErrorMessage("password","");
    }

    if (data.confirmPassword=="") {
        view.setErrorMessage("confirmPassword","please input confirmPassword again!");
    } else if(data.confirmPassword !== data.passWord){
        view.setErrorMessage("confirmPassword","Password does not match please re-enter password!");
    } else{
        view.setErrorMessage("confirmPassword","");
    }
    if(data.firstName !="" && data.lastName!="" && data.email !="" && data.passWord!="" && data.confirmPassword!=""){
        console.log("day la data",data);
        model.register(data);
    }
}
controller.login = (data)=>{
    if(data.email =="") {
        view.setErrorMessage("email","please input Email again!")
    }
    else{
        view.setErrorMessage("email","");
    }

    if (data.passWord=="") {
        view.setErrorMessage("password","please input Password again!");
    // } else if(data.passord.length < 6){
    //     view.setErrorMessage("password","Password must be have mor than 6 charater ");
    } else{
        view.setErrorMessage("password","");
    }
    if(data.email !="" && data.passWord!=""){
        console.log("day la data",data);
        model.login(data);
    }
}



// function validateEmail(data) {
//     console.log("1111111");
//     var re = /\S+@\S+\.\S+/;
//     return re.test(data);
// }
// function checkEmail() {
//     let a= document.getElementById("inputs").value;
//     console.log("66666",validateEmail(a));
//     if(validateEmail(a)==true){
//      console.log("đăng kí thành công!");
//     }else{
//      console.log("email sai định dạng!");
//     }
//  }