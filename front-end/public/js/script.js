// on page load
window.addEventListener("load", function () {
  const openButton = document.getElementsByClassName("ContisCollapse");
  const closeButton = document.getElementById("sidebarCollapse");
  let viewportwidth = document.documentElement.clientWidth;

  // if viewport is less than 768px
  if (viewportwidth < 768) {
    // hide sidebar
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("content").classList.remove("active"); // display open button
    //event on click
    openButton[0].addEventListener("click", function () {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
      displayButton(openButton);
    });
  } else {
    closeButton.addEventListener("click", function () {
      console.log("click");
      // toggle class active on sidebar and content
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("content").classList.toggle("active");
      displayButton(openButton);
    });
  }
});

function displayButton(openButton) {
  for (let i = 0; i < openButton.length; i++) {
    //if display is none
    if (openButton[i].style.display === "none") {
      openButton[i].style.display = "block";
      //envent listener for each button
      openButton[i].addEventListener("click", function () {
        console.log("click2");
        // toggle class active on sidebar and content
        document.getElementById("sidebar").classList.remove("active");
        document.getElementById("content").classList.remove("active");
        openButton[i].style.display = "none";
      });
    } else {
      console.log("ici");
      openButton[i].style.display = "none";
      document.getElementById("sidebar").classList.add("active");
      document.getElementById("content").classList.add("active");
      const closeButton = document.getElementById("sidebarCollapse");
      closeButton.addEventListener("click", function () {
        console.log("click");
        // toggle class active on sidebar and content
        document.getElementById("sidebar").classList.remove("active");
        document.getElementById("content").classList.remove("active");
        displayButton(openButton);
      });
    }
  }
}
