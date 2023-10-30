let names=document.getElementById('name');
let email=document.getElementById('email');
let password=document.getElementById('password');
let password2=document.getElementById('password2');
let button=document.getElementById('btn');
let form=document.getElementById('form');



function showerror(input,msg){
  let p= input.parentElement;
  p.className='form-control error';
  const small=p.querySelector('small');
  small.innerText =msg;
  
 }
function showSucces(input){
  let p= input.parentElement;
  p.className ='form-control success';
 }

 const validateEmail = (email) => {
   const mail= ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
 if(mail.test(email.value.trim())){
  showSucces(email);
 }else{
  showerror(email,"Email is not valid");
 }
};


function checkRequied(inputArr){
  inputArr.forEach(input => {
    if(input.value.trim() === ''){
      showerror(input,`${getField(input)} is requid`);
    }else{
      showSucces(input)
    }
  });
}

function getField(input){
return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkLangth(input,min,max){
  if(input.value.length <min){
    showerror(input,`${getField(input)} must be at least ${min} characters`)
  }else if(input.value.length >max){
    showerror(input,`${getField(input)} must be less then ${max} characters`)
  }else{
    showSucces(input)
  }
}

function checkPassword(input,password){
 if(input.value!=password.value){
 showerror(password,"Password is Not Match")
 }
 else{
  showSucces(password);
 }
}

form.addEventListener('submit',function(e){ 
  e.preventDefault();

// if else uses

  // if(names.value === ''){
  //   showerror(names,'username as required');
  // }else{
  //    showSucces(names);
  // }

  // if(email.value === ''){
  //   showerror(email,'Email required');
  // }else if(!validateEmail(email.value)){
  //   showerror(email,'Email is not valid');
  // }
  // else{
  //    showSucces(email);
  // }
  
  // if(password.value === ''){
  //   showerror(password,'password required');
  // }else{
  //    showSucces(password);
  // }

  // if(password2.value === ''){
  //   showerror(password2,'password2 required');
  // }else{
  //    showSucces(password2);
  // }
  
checkRequied([names,email,password,password2]);
checkLangth(names,3,15);
checkLangth(password,8,12);
validateEmail(email);
checkPassword(password,password2);
})