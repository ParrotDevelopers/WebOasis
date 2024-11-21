history.scrollRestoration = "manual";
let questions = document.getElementsByClassName("panel-default");
let answers = document.getElementsByClassName("toggleAnswer");
for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function (event) {
    event.preventDefault();
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      this.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  });
}

//Navigating to individual faq
let re = /#(.*)/;
if (re.exec(window.location.href)) {
  var x = re.exec(window.location.href)[1];
  let element2 = document.getElementById(x);
  element2.parentElement.previousElementSibling.scrollIntoView({
    block: "start",
  });
  element2.parentElement.style.display = "block";
}

//Expand Button
function listExpansion() {
  let expanding =
    document.getElementById("expand").getAttribute("expanding") == "true";

  let elements = document.querySelectorAll(".toggleAnswer");
  if (!expanding) {
    elements = document.querySelectorAll(".toggleAnswer");
  }

  for (let i = 0; i < elements.length; i++) {
    if (expanding) {
      elements[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
    }
  }

  let nextStatus = !expanding;
  document.getElementById("expand").innerHTML = nextStatus
    ? "Expand"
    : "Collapse";
  if (!nextStatus) {
    document.getElementById("expand").innerHTML = "Collapse";
  } else {
    document.getElementById("expand").innerHTML = "Expand";
  }

  document.getElementById("expand").setAttribute("expanding", nextStatus);
}

window.listExpansion = listExpansion;
document.getElementById("expand").setAttribute("expanding", true);

//copy link to share
function copyLink(copyButton) {
  var status = copyButton.nextElementSibling;
  status.innerHTML = "Copied!";
  var faqId = copyButton.parentElement.parentElement.id;
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = "https://weboasis.app/faq/oasis/#" + faqId;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

//mouseover copybutton
let allShareButton = document.getElementsByClassName("sharebtn");
for (i = 0; i < allShareButton.length; i++) {
  allShareButton[i].addEventListener("mouseover", function (event) {
    var status = this.nextElementSibling;
    status.style.display = "block";
  });
  allShareButton[i].addEventListener("mouseout", function (event) {
    var status = this.nextElementSibling;
    status.style.display = "none";
    status.innerHTML = "Copy";
  });
}
