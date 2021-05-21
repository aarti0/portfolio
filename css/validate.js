

function validate()
{ 
   if( document.Registration.v_firstname.value == "" )
   {
     alert( "Please provide your Name!" );
     document.Registration.v_firstname.focus() ;
     return false;
   }
   if( document.Registration.v_middlename.value == "" )
   {
     alert( "Please provide your Father Name!" );
     document.Registration.v_middlename.focus() ;
     return false;
   }
    if( document.Registration.v_lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.Registration.v_lastname.focus() ;
     return false;
   }
   if( document.Registration.v_address.value == "" )
   {
     alert( "Please provide your Address!" );
     document.Registration.v_address.focus() ;
     return false;
   }
   
   if( document.Registration.v_age.value == "" ||
           isNaN( document.Registration.v_age.value) ||
           document.Registration.v_age.value.length >= 3 )
   {
     alert( "Please provide your Age in number format!" );
     document.Registration.v_age.focus() ;
     return false;
   }  
   if( document.Registration.v_contact.value == "" ||
           isNaN( document.Registration.v_contact.value) ||
           document.Registration.v_contact.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.Registration.v_contact.focus() ;
     return false;
   }
   
    var email = document.Registration.v_email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.Registration.v_email.focus() ;
     return false;
 }
 if( document.Registration.v_username.value == "" )
   {
     alert( "Please provide your User Name!" );
     document.Registration.v_username.focus() ;
     return false;
   }
    if( document.Registration.pass1.value == "" )
   {
     alert( "Please provide your Password!" );
     document.Registration.pass1.focus() ;
     return false;
   } if( document.Registration.pass2.value == "" )
   {
     alert( "Please provide your Comfirm Password!" );
     document.Registration.pass2.focus() ;
     return false;
   }
   
   var password =document.Registration.pass1.value;
      var cpassword = document.Registration.pass2.value;
   
   if( password!=cpassword)
   {
     alert( "Password And Comfirm Password Doesn't Match!" );
     document.Registration.pass1.focus() ;
     return false;
   }   
   
 

  if( document.Registration.v_answer.value == "" )
   {
     alert( "Please provide your answer!" );
     document.Registration.v_answer.focus() ;
     return false;
   }
  
   return( true );
}
