$("#countries-list-container > div").each((element, s) => {
  s.remove();
});

setTimeout(() => {
  window["ik_countries"].forEach((country) => {
    const newDiv = document.createElement("div");

    newDiv.addEventListener("click", () => {
      ChangeSelectedCountry(country);
    });
    newDiv.className = "country";
    const img = document.createElement("img");
    img.setAttribute("src", country.flag);
    img.classList.add("flag");
    img.style.width = "40px";

    const h6 = document.createElement("h6");

    h6.textContent = country.name;

    newDiv.appendChild(img);
    newDiv.appendChild(h6);

    document.querySelector("#countries-list-container").appendChild(newDiv);
  });
  $("#loading").css("display", "none");
  $("main").css("opacity", 1);
}, 1500);

function ChangeSelectedCountry(country_from_db) {
  if (country_from_db) {
    $("#specific-country-img").attr("src", country_from_db.flag);
    $("#specific-country-map").attr("src", country_from_db.map);
    $("#specific-country-name").text(
      country_from_db.name + " (" + country_from_db.code + ")"
    );
    $("#specific-country-national-sport a").text(
      country_from_db.nationalSport.name
    );

    $("#specific-country-national-sport a").attr(
      "href",
      "./Pages/sport.html?sport=" + country_from_db.nationalSport.name
    );

    if (country_from_db.nationalSport.official == "Yes") {
      $("#specified-country-national-sport-declared-as-national").text(
        "( Declared as “Official National Sport” )"
      );
    } else {
      $("#specified-country-national-sport-declared-as-national").text(
        "( Not Declared as “Official National Sport” )"
      );
    }

    $("#specific-country-famous-sports-container > a").each((element, s) => {
      s.remove();
    });

    let sports = country_from_db.mostPlayedSports.split(", ");

    sports.forEach((sport) => {
      $("<a/>", {
        text: sport,
        href: "./Pages/sport.html?sport=" + sport,
      }).appendTo("#specific-country-famous-sports-container");
    });

    $("#no-country-selected").css("display", "none");
    $("#specific-country").css("display", "flex");
  }
}
