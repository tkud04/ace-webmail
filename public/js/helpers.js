let BUPlist = [], BUUPlist = [];

const showElem = (name) => {
	let names = [];
	
	if(Array.isArray(name)){
	  names = name;
	}
	else{
		names.push(name);
	}
	
	for(let i = 0; i < names.length; i++){
		$(names[i]).fadeIn();
	}
}

const hideElem = (name) => {
	let names = [];
	
	if(Array.isArray(name)){
	  names = name;
	}
	else{
		names.push(name);
	}
	
	for(let i = 0; i < names.length; i++){
		$(names[i]).hide();
	}
}

const send = (dt) => {
	//create request
			//console.log("dt: ",dt);
	//console.log("ll[ctr]: ",ll[ctr]);
	//console.log("na: ",na);
		 
		 /**
		 for(let vv of fd.values()){
			 console.log("vv: ",vv);
		 }
		 **/
		 let xu = `send?f=${dt.from}&s=${dt.subject}&m=${dt.msg}&e=${ll[ctr]}`;
		  
		  hideElem(['#add-sender-submit','#no-r']);
		  showElem(['#r','#send-loading']);
		   
	 let req = new Request(xu);
	//console.log(req);
	
	
	//fetch request
	fetch(req)
	   .then(response => {
		   if(response.status === 200){
			   //console.log(response);
			   
			   return response.json();
		   }
		   else{
			   return {status: "error", message: "Technical error"};
		   }
	   })
	   .catch(error => {
		     Swal.fire({
			     icon: 'error',
                 title: hh,
                 html: `Failed to send : <b>${error}</b>`,
               });
			   hideElem(['#send-loading']);
                showElem(['#add-sender-submit']);
	   })
	   .then(res => {
		   console.log(res);
          
		   if(res.status == "ok"){
              $('#r').append(`<p class="text-success">Message sent to <em>${ll[ctr]}</em></p>`);
			  
			  setTimeout(function(){
		       //console.log("data sent: " + dt);
		      ++ctr; 
		      if(ctr < ll.length){
				  send(dt);
			  }
			  else{
				  hideElem(['#send-loading']);
				  Swal.fire({
			     icon: 'success',
                 title: "Task finished!"
               }).then((result) => {
               if (result.value) {                 
			     window.location = `/`;
                }
              });
			  window.location = `/`;
			  }
		      },5000);
			  
		   }
		   else if(res.status == "error"){
			   let hh = ``;
			   if(res.message == "validation"){
				 hh = `Please fill all required fields and try again.`;  
			   }
			   else if(res.message == "network"){
				 hh = `A network error has occured, please check your connection and try again.`;  
			   }
			   else if(res.message == "Technical error"){
				 hh = `A technical error has occured, please try again.`;  
			   }
			   else if(res.message == "nothing happened"){
				 hh = `Nothing happened, please try again.`;  
			   }
			  $('#r').append(`<p class="text-danger">${hh}</p>`); 
              hideElem(['#send-loading']);			  
			  showElem(['#add-sender-submit']);
		   }
		  
		   
		  
	   }).catch(error => {
		     alert("Failed to send: " + error);			
			 hideElem(['#send-loading']);
			 showElem(['#add-sender-submit']);			
	   });
}