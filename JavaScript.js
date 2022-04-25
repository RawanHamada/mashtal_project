		/*Email validtion with alert*/
		function validateForm(){
			var username =document.forms["myForm"]["text"].value;
			if (username == "" || username == null) {
				window.alert("Username must be filled out");
				return false;
			}
			var email=document.forms["myForm"]["email"].value;
			var lowercase = /[a-z]/g;
			var uppercase =/[A-Z]/g;
			var numbers = /[0-9]/g;
			// var sign="@" + ".";
			// && email.match(sign)
			//  ,sign
			if (email == "" || email == null) {
				window.alert("password must be filled out");
				return false;
			}
			else if(!( (email.match(lowercase) || email.match(uppercase)|| email.match(numbers) ) 
				 && email.length >=11 )){
				window.alert("Email must contain lowercase, uppercase letters ,numbers and minimum 11 characters");
				return false;
			}
		}
		
		var topBtn=document.getElementById('topBtn');
		function backToTop(){
			document.body.scrollTop=0;
			document.documentElement.scrollTop=0;
		}

		window.onscroll = function(){scrollWin();myFunction()};
		function scrollWin(){
			if (document.body.scrollTop >20 || document.documentElement.scrollTop >20) {
				topBtn.style.display ="block";
			}
			else{
				topBtn.style.display ="none";
			}
		}	

// scrollIndocator
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//end scroolIndi
			var side=document.getElementById("mySidebar");
		function openNav() {
 			 document.getElementById("mySidebar").style.width = "250px";
 		 // document.getElementById("main").style.marginLeft = "250px";
 		 document.getElementById("mySidebar").innerHTML=document.getElementById("nav").innerHTML;
 		  
		}
		function closeNav() {
 		 document.getElementById("mySidebar").style.width = "0";
 		 document.getElementById("main").style.marginLeft= "0";
 		 // side.innerHTML=nav.innerHTML;
		}



	// Get the modal
	var modal = document.getElementById("myModal");


	var box1 = document.getElementById("oneSec");
	var modalBox = document.getElementById("modal-content");	

	box1.onclick = function(){
 	 modal.style.display = "block";
 	 modalBox.innerHTML = this.innerHTML;
 	 modalBox.style.width="250px"; 
 	 modalBox.style.backgroundColor="#e67e22";
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
 	 modal.style.display = "none";
	}

	var box2 = document.getElementById("twoSec");
	box2.onclick = function(){
 	 modal.style.display = "block";
 	 modalBox.innerHTML = this.innerHTML;
 	 modalBox.style.backgroundColor = "#e67e22";
	}
	var box3 = document.getElementById("threeSec");
	box3.onclick = function(){
 	 modal.style.display = "block";
 	 modalBox.innerHTML = this.innerHTML;
 	 modalBox.style.backgroundColor = "#e67e22";
	}


		// js dott 
	
			var dott1 = document.getElementById("dott1");
			dott1.onclick = function(){
				// document.getElementById("dott1").style.fontSize="200px";
				document.getElementById("img2box").style.backgroundColor="#1db1f7";
				document.getElementById("btn2").style.backgroundColor="#1db1f7";

				document.getElementById("img3box").style.backgroundColor="#1db1f7";
				document.getElementById("btn3").style.backgroundColor="#1db1f7";

				document.getElementById("img1box").style.backgroundColor="#3742fa";
				document.getElementById("btn1").style.backgroundColor="#3742fa";
			}
			var dott2 = document.getElementById("dott2");
			dott2.onclick = function(){
				document.getElementById("img1box").style.backgroundColor="#1db1f7";
				document.getElementById("btn1").style.backgroundColor="#1db1f7";

				document.getElementById("img3box").style.backgroundColor="#1db1f7";
				document.getElementById("btn3").style.backgroundColor="#1db1f7";

				document.getElementById("img2box").style.backgroundColor="#3742fa";
				document.getElementById("btn2").style.backgroundColor="#3742fa";
			}	
			var dott3 = document.getElementById("dott3");
			dott3.onclick = function(){
				document.getElementById("img2box").style.backgroundColor="#1db1f7";
				document.getElementById("btn2").style.backgroundColor="#1db1f7";

				document.getElementById("img1box").style.backgroundColor="#1db1f7";
				document.getElementById("btn1").style.backgroundColor="#1db1f7";

				document.getElementById("img3box").style.backgroundColor="#3742fa";
				document.getElementById("btn3").style.backgroundColor="#3742fa";
			}
			//end