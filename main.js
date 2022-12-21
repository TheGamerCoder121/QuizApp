document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    console.log("loading");
    document.querySelector("#loader").style.display = "visible";
    setTimeout(function () {
    document.querySelector("body").style.visibility = "hidden";
    }, 3000);

  } else {
    console.log("loaded");
    setTimeout(function () {

    document.querySelector("body").style.visibility = "visible";

    document.querySelector("#loader").style.display = "none";
    }, 3000);
  }
};
