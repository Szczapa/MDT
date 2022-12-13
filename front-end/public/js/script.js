// on page load
window.addEventListener("load", function () {
  const openButton = document.getElementsByClassName("ContisCollapse");
  const closeButton = document.getElementById("sidebarCollapse");
  let viewportwidth = document.documentElement.clientWidth;

  // if viewport is less than 768px

  if (viewportwidth < 768) {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("content").classList.add("active");
    openButton[0].style.display = "block";

    closeButton.addEventListener("click", function () {
      // toggle class active on sidebar and content
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
      //display none on open button
      openButton[0].style.display = "block";
    });

    for (let i = 0; i < openButton.length; i++) {
      openButton[i].addEventListener("click", function () {
        // toggle class active on sidebar and content
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("content").classList.toggle("active");
        //display none on open button
        openButton[0].style.display = "none";
      });
    }
  } else {
    closeButton.addEventListener("click", function () {
      // toggle class active on sidebar and content
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
      //display none on open button
      openButton[0].style.display = "block";
    });

    for (let i = 0; i < openButton.length; i++) {
      openButton[i].addEventListener("click", function () {
        // toggle class active on sidebar and content
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("content").classList.toggle("active");
        //display none on open button
        openButton[0].style.display = "none";
      });
    }
  }

  //window resize
  window.addEventListener("resize", function () {
    let viewportwidth = document.documentElement.clientWidth;
    let sidebar = document.getElementById("sidebar");
    if (viewportwidth < 768) {
      if ((openButton[0].style.display = "none")) {
        openButton[0].style.display = "block";
        document.getElementById("sidebar").classList.add("active");
        document.getElementById("content").classList.add("active");
      }
      // si clic hors du menu alors fermer le menu
    } else {
      if ((openButton[0].style.display = "block")) {
        openButton[0].style.display = "none";
        document.getElementById("sidebar").classList.remove("active");
        document.getElementById("content").classList.remove("active");
      }
    }
  });
});
