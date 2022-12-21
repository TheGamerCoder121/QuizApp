document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    console.log("loading");
    document.querySelector("#loader").style.display = "visible";

    document.querySelector("#main").style.visibility = "hidden";


  } else {
    console.log("loaded");
    setTimeout(function () {

    document.querySelector("#main").style.visibility = "visible";

    document.querySelector("#loader").style.display = "none";
    }, 3000);
  }
};
