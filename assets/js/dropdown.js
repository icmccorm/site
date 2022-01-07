window.addEventListener('load', () => {
  document.getElementById("profile-contact-toggle").addEventListener("click", () => {
    var x = document.getElementById("profile-contact");
    if (x.style.height === "0em" || x.style.height === "") {
      x.style.height = "17em";
      x.style.marginTop = "1em";
      x.style.marginBottom = "1em";

    } else {
      x.style.height = "0em";
      x.style.marginTop = "0em";
      x.style.marginBottom = "0em";
    }
})
})
