window.addEventListener('load', () => {
  const profileContactToggle = document.getElementById("contact-toggle");
  const profileContact = document.getElementById("contact");

  profileContactToggle.addEventListener("click", () => {
    const isClosed = profileContact.style.height === "0em" || !profileContact.style.height;

    profileContact.style.height = isClosed ? "12em" : "0em";
    profileContact.style.marginTop = isClosed ? "1em" : "0em";
    profileContact.style.marginBottom = isClosed ? "1em" : "0em";
  });
});

