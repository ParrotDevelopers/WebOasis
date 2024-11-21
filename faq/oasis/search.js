const input = document.getElementById("searchInput");
const divsList = document.getElementsByClassName("panel");
function searchFilter() {
  var filter, textVal;
  filter = input.value.toUpperCase();
  for (var i = 0; i < divsList.length; i++) {
    textVal = divsList[i].textContent;
    if (
      textVal.toUpperCase().indexOf(filter) > -1 &&
      !divsList[i].classList.contains("toggleAnswer")
    ) {
      divsList[i].style.display = "block";
    } else if (
      textVal.toUpperCase().indexOf(filter) > -1 &&
      divsList[i].classList.contains("toggleAnswer")
    ) {
      divsList[i].previousElementSibling.style.display = "block";
    } else {
      divsList[i].style.display = "none";
    }
  }
}
function clearSearch() {
  input.value = "";
  for (var j = 0; j < divsList.length; j++) {
    divsList[j].style.display = "";
  }
}
