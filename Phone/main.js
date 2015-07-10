var phone = prompt("Please enter your phone number in the xxx-xxx-xxxx format")
   if(phone.charAt(3) === '-' && phone.charAt(7) === '-') {
      alert("Your phone is correct")
    } else {
      alert("Your phone number doesn't look like a phone number")
    }
