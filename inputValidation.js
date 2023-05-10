//pass is targeting the inner text of the paragraph with ID pass
let pass=document.getElementById("pass")
//pass is targeting the inner text of the paragraph with ID pass1
let pass1=document.getElementById("pass1")
//
let nameValidate=document.getElementById("name")
//SetTimeout is used for reloading a window
//handleclick() is a onclick function for the button
function handleclick(){
    let nameLength=document.getElementById("Name").value
    let Pass=document.getElementById("Pass").value
    let copass=document.getElementById("CoPass").value
    if((nameLength.length<8)){
        nameValidate.innerText="Must be 8 or more characters" 
        console.log(nameLength.length)

        setTimeout(function() {
            window.open("http://127.0.0.1:5500/index.html", "_self");
          }, 1000);     
    }
    if(Pass.length<8){
        pass.innerText="Password be 8 or more characters" 
        setTimeout(function() {
            window.open("http://127.0.0.1:5500/index.html", "_self");
          }, 1000);  
    }   
    if(copass!=Pass){
        pass1.innerText="Password must equal confirm password"
        setTimeout(function() {
            window.open("http://127.0.0.1:5500/index.html", "_self");
        }, 1000);
    }
}
//a function that check every value in the input box
function handleInputName(){
    //nameLength is the value of the input box NAme
    let nameLength=document.getElementById("Name").value
    if(nameLength.length<8){
        nameValidate.innerText="Must be 8 or more characters"     
    }
    else{
         nameValidate.innerText=" " 
        
    }
    
}
//a function that check every value in the input box
function handleInputPassowrd(){
    //Pass is the value of the input box Password
    var Pass=document.getElementById("Pass").value
    //checking the amount of characters in the input box
    if(Pass.length<8){
        pass.innerText="Must be 8 or more characters"     
    }
    else{
      pass.innerText=" " 
        
    }
}
//a function that check every value in the input box
function handleConfirm(){
    var Pass=document.getElementById("Pass").value
    //copass is the vaalue of the input box Confirm Password
    var copass=document.getElementById("CoPass").value
    //checking to see if confirm password and password are equal
    if(copass!=Pass){
        pass1.innerText="Password must equal confirm password"
    }
    else{
        pass1.innerText=""
    }
}
