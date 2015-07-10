var birth = prompt("What is your birthday? please put it in xx/xx/xxxx format")
if(birth.charAt(2) === '/' && birth.charAt(5) === '/') {
   alert("That looks right.")
 } else {
   alert("That looks a little off. Wanna try again")
 }

 if(married === "Yes" || married === "YES" || married === "yes" || married === "No" || married === "NO" || married === "no") {
   alert("Congrats, if that's a good thing! If not, my apologies ;)")
 }  else {
   alert("That doesn't look right. Are you sure you're married or are you wishing you weren't?")
 }

 var phone = prompt("Please enter your phone number in the xxx-xxx-xxxx format")
    if(phone.charAt(3) === '-' && phone.charAt(7) === '-') {
       alert("Your phone is correct")
     } else {
       alert("Your phone number doesn't look like a phone number")
     }

     var zip = prompt("What is your postal code?")
     if(zip.length === 5 || zip.charAt(5) === "-") {
       alert("That looks right")
     }  else {
       alert("That doesn't look right. Are you sure that's your zip code?")
     }

     var state = prompt("What is your state code")
     state.toUpperCase()
     if(state.length === 2) {
       alert("That looks right")
     }  else {
       alert("That doesn't look right. Are you sure that's your state abbreviation?")
     }
