window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let candidates = document.getElementById("candidates");
    candidates.setAttribute("class", "hidden");
    let underMessage = document.getElementById("under18");
    underMessage.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      candidates.removeAttribute("class");
    } 

    else {
      underMessage.removeAttribute("class");
    }
  };
};