let map;

function initMap() {
    const loc = { lat: -34.397, lng: 150.644 };
  map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 8,
  });
  const marker = new google.maps.Marker({position: loc, map: map})
}


window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
