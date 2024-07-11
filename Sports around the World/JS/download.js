$("#loading").css("display", "none");
$("main").css("opacity", 1);

document.querySelectorAll(".countries_download").forEach((element) => {
  element.addEventListener("click", function () {
    const xmlFilePath = "/XML/countries.xml"; // Replace with the actual path to your XML file
    const link = document.createElement("a");
    link.href = xmlFilePath;
    link.download = "countries.xml"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.querySelectorAll(".sports_download").forEach((element) => {
  element.addEventListener("click", function () {
    const xmlFilePath = "/XML/sports.xml"; // Replace with the actual path to your XML file
    const link = document.createElement("a");
    link.href = xmlFilePath;
    link.download = "sports.xml"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.querySelectorAll(".athletes_download").forEach((element) => {
  element.addEventListener("click", function () {
    const xmlFilePath = "/XML/athletes.xml"; // Replace with the actual path to your XML file
    const link = document.createElement("a");
    link.href = xmlFilePath;
    link.download = "athletes.xml"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.querySelectorAll(".sports_daily_lives_download").forEach((element) => {
  element.addEventListener("click", function () {
    const xmlFilePath = "/XML/sports_daily_lives.xml"; // Replace with the actual path to your XML file
    const link = document.createElement("a");
    link.href = xmlFilePath;
    link.download = "sports_daily_lives.xml"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.querySelectorAll(".sport_museums_download").forEach((element) => {
  element.addEventListener("click", function () {
    const xmlFilePath = "/XML/sport_museums.xml"; // Replace with the actual path to your XML file
    const link = document.createElement("a");
    link.href = xmlFilePath;
    link.download = "sport_museums.xml"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

document.querySelectorAll(".stadiums_download").forEach((element) => {
  element.addEventListener("click", function () {
    const xmlFilePath = "/XML/stadiums.xml"; // Replace with the actual path to your XML file
    const link = document.createElement("a");
    link.href = xmlFilePath;
    link.download = "stadiums.xml"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
