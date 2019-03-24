$(document).ready(function(){
	$('.form').submit(function(){
				name = $('.name').val();
				email = $('.pass-login').val();
				date = $('.date').val();
				noguest = $('.noguest').val();
				address = $('.address').val();
				if (name == "") {
					alert("name must be filled in");
					return false;
				}else if(email == ""){
					alert("email must be filled in");
					return false;
				}
				else if(date == ""){
					alert("date must be filled in");
					return false;
				}
				else if(noguest == ""){
					alert("No of Guest must be filled in");
					return false;
				}
				else if(address == ""){
					alert("address must be filled in");
					return false;
				}
				return true;
	});
})