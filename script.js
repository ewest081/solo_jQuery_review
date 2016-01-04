/**
 * Created by lizwestberg on 1/4/16.
 */

$.ajax("data.json").then(function(doit){
   for(i=0; i<doit.length; i++){
       var $el = '';
       $id = doit[i].id;
       $gender = doit[i].gender;
       $firstName = doit[i].first_name;
       $lastName = doit[i].last_name;
       $email = doit[i].email;

       function emailFix (){
            if (doit[i].email == null){
                $email = "No email provided";
            }
           return $email;
       }

       emailFix();

       $el = '<p>ID: ' + $id + '<br/>' + 'Gender: ' + $gender + '<br/>' + 'First Name: ' + $firstName + '<br/>' + 'Last Name: ' + $lastName + '<br/>' + 'email: ' + $email + '</p>';

       $(".container").append($el);
   }
});