var state = prompt("What is your state code")
state.toUpperCase()
if(state.length === 2) {
  alert("That looks right")
}  else {
  alert("That doesn't look right. Are you sure that's your state abbreviation?")
}
