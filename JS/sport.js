function getQueryParams(qs) {
  qs = qs.split("+").join(" ");

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

var query = getQueryParams(document.location.search);

if (!query.sport) {
  $("#loading").css("display", "none");
  $("main").css("opacity", 1);

  $("#sport_not_found_text").text("Sport Not Found!");
  $("main").css("display", "none");
  $("#sport_not_found").css("display", "flex");
} else {
  setTimeout(async () => {
    let sport = window["ik_sports"].find((e) => e.name == query.sport);
    if (!sport) {
      $("#loading").css("display", "none");
      $("main").css("opacity", 1);
      $("#sport_not_found_text").text(query.sport + " Not Found");
      $("main").css("display", "none");
      $("#sport_not_found").css("display", "flex");
      return;
    }
    $("#sport_name").text(sport.name);

    $("#sport_description").text(sport.description);

    $("#sport_match_video_url").attr(
      "src",
      sport.matchVideo
        .split("?")[0]
        .replace("https://youtu.be/", "https://www.youtube.com/embed/")
    );

    $("#official-sports-container > div").each((element, s) => {
      s.remove();
    });

    $("#famous-sports-container > div").each((element, s) => {
      s.remove();
    });

    let officialCountries = sport.officialCountries.split(", ");

    officialCountries.forEach((country) => {
      const newDiv = document.createElement("div");
      newDiv.className = "country";

      let country_db_found = window["ik_countries"].find(
        (e) => e.name == country
      );

      if (country_db_found) {
        const img = document.createElement("img");
        img.setAttribute("src", country_db_found.flag);
        img.classList.add("flag");
        img.style.width = "40px";

        const h6 = document.createElement("h6");

        h6.textContent = country_db_found.name;

        newDiv.appendChild(img);

        newDiv.appendChild(h6);

        document
          .querySelector("#official-sports-container")
          .appendChild(newDiv);
      } else {
        const h6 = document.createElement("h6");

        h6.textContent = country;

        newDiv.appendChild(h6);

        document
          .querySelector("#official-sports-container")
          .appendChild(newDiv);
      }
    });

    let famousCountries = sport.famousCountries.split(", ");

    famousCountries.forEach((country) => {
      const newDiv = document.createElement("div");
      newDiv.className = "country";

      let country_db_found = window["ik_countries"].find(
        (e) => e.name == country
      );

      if (country_db_found) {
        const img = document.createElement("img");
        img.setAttribute("src", country_db_found.flag);
        img.classList.add("flag");
        img.style.width = "40px";

        const h6 = document.createElement("h6");

        h6.textContent = country_db_found.name;

        newDiv.appendChild(img);

        newDiv.appendChild(h6);

        document.querySelector("#famous-sports-container").appendChild(newDiv);
      } else {
        const h6 = document.createElement("h6");

        h6.textContent = country;

        newDiv.appendChild(h6);

        document.querySelector("#famous-sports-container").appendChild(newDiv);
      }
    });

    $("#sport_popularity").text(sport.totalPlayers);
    $("#sport_fans").text(sport.totalFans);

    $("#sport_famous_athletes").text(sport.famousAthletes);

    $("#sport_famous_date_creation").text(sport.inceptionDate);

    $("#sport_equipment").text(sport.equipment);

    $("#sport_genders").text(sport.genderParticipation);

    $("#sport_historical").text(sport.historicalContext);

    $("#sport_economical").text(sport.economicImpact);

    $("#sport_cultural").text(sport.culturalImpact);

    $("#sport_rules").text(sport.rulesOverview);

    $("#sport_rule_video_url").attr(
      "src",
      sport.rulesVideo
        .split("?")[0]
        .replace("https://youtu.be/", "https://www.youtube.com/embed/")
    );

    $("#sport_wikipedia").text(sport.wikipediaLink);

    $("#sport_wikipedia").attr("href", sport.wikipediaLink);

    // let image = await this.getRandomImageBasedOnInput(query.sport);

    // $("#background-image").css("backgroundImage", 'url("' + image + '")');

    $("#loading").css("display", "none");
    $("main").css("opacity", 1);
  }, 1000);
}

// Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API access key
const accessKey = "9ysuYAEEeXMlx6AXXlQOl01f456KcyYrDD_9WxZ040A";

async function getRandomImageBasedOnInput(query) {
  const apiUrl = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
    query
  )}&client_id=${accessKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.urls.regular;
    return imageUrl;
  } catch (error) {
    console.error("Error fetching the random image:", error);
  }
  return null;
}
