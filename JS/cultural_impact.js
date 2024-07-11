$("#athletes-container > div").each((element, s) => {
  s.remove();
});

$("#daily-life-container > div").each((element, s) => {
  s.remove();
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
setTimeout(async () => {
  window["ik_athletes"].forEach((athlete) => {
    const newDiv = document.createElement("div");

    newDiv.className = "athlete";

    const h5 = document.createElement("h5");

    h5.textContent = athlete.name;

    const h5_2 = document.createElement("h5");

    h5_2.textContent = athlete.sport;

    const divAthleteBody = document.createElement("div");

    divAthleteBody.className = "athlete-body";

    const img = document.createElement("img");
    img.setAttribute("src", athlete.image);
    img.style.width = "40px";

    const h6 = document.createElement("h6");

    h6.textContent = athlete.quote;

    divAthleteBody.appendChild(img);
    divAthleteBody.appendChild(h6);

    const h6_2 = document.createElement("h6");

    h6_2.textContent = athlete.significance;

    newDiv.appendChild(h5);
    newDiv.appendChild(h5_2);
    newDiv.appendChild(divAthleteBody);
    newDiv.appendChild(h6_2);

    document.querySelector("#athletes-container").appendChild(newDiv);
  });

  $("#loading").css("display", "none");
  $("main").css("opacity", 1);

  for (let index = 0; index < window["ik_sports_daily_lives"].length; index++) {
    await this.sleep(1500);

    const live = window["ik_sports_daily_lives"][index];

    const newDiv = document.createElement("div");

    newDiv.className = "daily-life-event";
    console.log(live);

    const h4 = document.createElement("h4");

    h4.textContent = live.name;

    const h5 = document.createElement("h5");

    h5.textContent = live.description;

    const divlive = document.createElement("div");

    const frame = document.createElement("iframe");
    frame.setAttribute("height", 560);
    frame.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    frame.setAttribute("allowfullscreen", null);
    frame.setAttribute(
      "src",
      live.videos.video[0].link
        .split("?")[0]
        .replace("https://youtu.be/", "https://www.youtube.com/embed/")
    );

    const frame_2 = document.createElement("iframe");
    frame_2.setAttribute("height", 560);
    frame_2.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    frame_2.setAttribute("allowfullscreen", null);
    frame_2.setAttribute(
      "src",
      live.videos.video[1].link
        .split("?")[0]
        .replace("https://youtu.be/", "https://www.youtube.com/embed/")
    );

    divlive.appendChild(frame);
    divlive.appendChild(frame_2);

    newDiv.appendChild(h4);
    newDiv.appendChild(h5);
    newDiv.appendChild(divlive);

    document.querySelector("#daily-life-container").appendChild(newDiv);
  }
}, 1500);
