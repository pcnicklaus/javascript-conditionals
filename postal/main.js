var zip = prompt("What is your postal code?")
if(zip.length === 5 || zip.charAt(5) === "-") {
  alert("That looks right")
}  else {
  alert("That doesn't look right. Are you sure that's your zip code?")
}
