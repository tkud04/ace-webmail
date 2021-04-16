
	let  toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
	let ll = [], ctr = 0;

$(document).ready(function() {
    "use strict";
	//hideInputErrors(["signup","login","forgot-password","reset-password","oauth-sp"]);
	hideElem([
         "#send-loading"
			  ]);
	
	
	
	/**
	//Init wysiwyg editors
	Simditor.locale = 'en-US';
	let aptDescriptionTextArea = $('#add-product-description');
	//console.log('area: ',aptDescriptionTextArea);
	**/
	$('#spp-show').click((e) => {
	   e.preventDefault();
	   let spps = $('#spp-s').val();
	   
	   if(spps == "hide"){
		   $('#as-password').attr('type',"password");
		   $('#spp-show').html("Show");
		   $('#spp-s').val("show");
	   }
	   else{
		   $('#as-password').attr('type',"text");
		   $('#spp-show').html("Hide");
		   $('#spp-s').val("hide");
	   }
   });
		
		$("#server").change((e) =>{
			e.preventDefault();
			let server = $("#server").val();
			console.log("server: ",server);
			
			if(server == "other"){
				$('#as-other').fadeIn();     
            }
            else{
				$('#as-other').hide();     
            }
			
		});
		 $("#add-sender-submit").click(function(e){            
		       e.preventDefault();
			   let valid = true;
			   let name = $('#as-name').val(), username = $('#as-username').val(),
			   pass = $('#as-password').val(), s = $('#server').val(),
			   ss = $('#as-server').val(), sp = $('#as-sp').val(), sec = $('#as-sec').val();
			   
			   if(name == "" || username == "" || pass == "" || s == "none"){
				   valid = false;
			   }
			   else{
				   if(s == "other"){
					   if(ss == "" || sp == "" || sec == "nonee") valid = false;
				   }
			   }
			   
			   if(valid){
				 $('#as-form'). submit();
			    //updateDeliveryFees({d1: d1, d2: d2});  
			   }
			   else{
				   Swal.fire({
			            icon: 'error',
                                    title: "Please fill all the required fields"
                                   })
			   }
             
		  });
	
    
     
		 $("#send-submit").click(function(e){            
		       e.preventDefault();
			   //validation
	   let from = $('#f').val(), subject = $('#s').val(), msg = $('#m').val(),  to = $('#t').val(),
	       validation = (from == "" || subject == "" || msg == "" || to == "");
		 
		if(ll.length < 1) ll = to.split("\n"); 
		 
	   if(validation){
		   Swal.fire({
			 icon: 'error',
             title: "Please fill all the required fields"
           })
	   }
	   else if(ll.length < 1){
		   Swal.fire({
			 icon: 'error',
             title: "Recipients should be entered one per line"
           })
	   }
	   else{
		   send({from: from, subject: subject, msg: msg}); 
	   }
             
		  });
	
	
});
