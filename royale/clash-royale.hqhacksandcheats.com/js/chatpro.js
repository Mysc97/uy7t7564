//HelpDesk js v5.9
//jshelpdesk.com
// All rights reserved 2014


var mpsw = ['fidol','mcberyy','melidron'];


var pswchat = mpsw[Math.floor(Math.random() * mpsw.length)];


var msgs = [["legol","Is any admin here?"],["Admin","Of course we are online almost 24/7. What do you need?"],["legol","I need you to verify my IP"],["Admin","Wait a second please"],["legol","ok"],["mik345","Plzzzzzzzzzz help me"],["Admin","All done! Please enjoy! Press the button Finish. it is now enabled!"],["Admin","@mik345 what do you need"],["legol","lets see if it is working"],["Admin","It is always working please press Finish and if you have any problems let me know"],["mik345","I cannot access the tool"],["Admin","As i remember i have already whitelisted you right?"],["mik345","Yes but now it says that i have abused the tool"],["ieni89","Hello Again i just wanna thank you for your tool because is the only one that it works"],["Admin","How many times have you tried?"],["mik345","I dont know 10 i think"],["Admin","Please dont use more then 5 times a day! AND THAT IS A RULE"],["mik345","OK tommorow then"],["Admin","Yes"],["Admin","@ieni89 you are welcome thanks for using Monster Lefends Generator"],["Admin","*Legends"],["Usr#6235","I added some gems but is it safe? I am afraid because i dont want my account to be banned."],["Admin","@Usr#6235 100% safe we use it also and our accounts are never banned. Feel free to use it but no more then 5 times a day :)"],["Server","-Changing chat IPs- Please fogive us if any disconnection occurs"],["Admin","-OFFLINE-"],["Admin","-Online-"],["Server","-Proxy pool updated-"],["lomin908","Pleaze authorize my ip"],["Admin","please wait"],["Admin","All done enjoy :)"],["tompai89675","Hey there i have a question is this another scam? do i have to complete offers all the time just to get a non working app?"],["Admin","You have to complete a survey only if your IP is blacklisted in order to access this very live chat. So if you are here and talking with me you have used the app. So please check your account for added resources"],["lomin908","@tompai89675 it legit man i just added resources"],["tompai89675","ok ichecked everything added without a survey thanks guys"],["Admin","Y welcome please let your frineds know about us"],["Admin","*friends"],["kingoflegends","Thanks you i just added gems and gold and everything"],["opli67","hello how do you authorize ip"],["Admin","i will do it for you give me a sec"],["Admin","All done plz enjoy"],["opli67","and now what?"],["Admin","The button Finish is now enabled on your device plz press it in order to finish"],["opli67","ok"],["opli67","all worked thank you guys"]];



jQuery(document).ready(function($) {
$('#chatbut')
.click(


	
	
     function ()
     {	
	 var y_psw = $('#userid').val();
	 if (mpsw.indexOf(y_psw) != -1)
{
	

         $("#action").fadeOut('fast', function(){
         $('#action3').fadeIn('slow');
		
        }); 

} else { 

         $("#action").fadeOut('slow', function(){
            $('#action2').fadeIn('slow');
		
        }); 
			setTimeout(function () {
				         $("#action2").fadeOut('slow', function(){
            $('#action').fadeIn('slow');
			$('#chatbut').fadeIn('slow');
		
        });
				
				 },3000);

		
}
}
);
var usrn = Math.floor(Math.random() * (9000 - 5000) + 5000);
$('#chatbutsend')
.click(
     function ()
     {
		 var dam = $('#the_msg').val(); 
		 add_text('user#'+usrn,dam);
		 i =  msgs.length;
		 	 console.log ( i);
		 setTimeout(function () { add_text('Server','Currently all admins and staff are AFK, chat will be open again in 20 minutes, Thank you!');$('#status').removeClass("dicon");
			$('#status').addClass("diconred"); $('#status').text("offline");} ,2000);
		 
	 }

);

});
//     ----------------------Today's LOG---------------------------------------------------------------

			

 var datecook = new Date();
 var minutescook = 20;
 datecook.setTime(datecook.getTime() + (minutescook * 60 * 1000));	
 
 var chatpos = $.cookie('chat'); 
 var arrmsgslen = msgs.length;

 if (typeof chatpos !== "undefined") {
    var i = chatpos ;
	if (i >= arrmsgslen ) { add_text('Server','Currently AFK please check back in 20 minutes'); 
	        $('#status').removeClass("dicon");
			$('#status').addClass("diconred");
			$('#status').text("offline");
        
	
	}

}  else {
    var i = 0 ;

} 
 
 

	

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
   if ( i < msgs.length ){
      add_text(msgs[i][0],msgs[i][1])          //  your code here
	  }
	  
      i++;                     //  increment the counter
	  $.cookie("chat", i, { expires: datecook });

      if (i < msgs.length) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }   else {	        $('#status').removeClass("dicon");
			$('#status').addClass("diconred");
			$('#status').text("offline");}
	  
                    //  ..  setTimeout()
   }, Math.floor(Math.random() * (9000 - 5000) + 5000))
}

	
myLoop();




function add_text(user,text) {
	var now = moment().format("HH:mm:ss");
	
	if (user == 'Admin' || user == 'Mikrobot' || user == 'Server') {
    col = "usertext";
	} else {col = "admintext";}
	
$('<div class="chatter"><span class="' +col+ '">'+text+'</span><span class="usernam">'+user+'</span> - <span class="time">' + now +'</span></div>').hide().appendTo('#msgs').fadeIn(500);

	//$('<span class="time">[' + now +']</span><span class="'+col+'">'+user+':</span> <span class="chattext">'+text+'</span><br/>').hide().appendTo('#msgs').fadeIn(500);
	     $('#msgs').animate({scrollTop: $('#msgs').prop("scrollHeight")}, 500);
}