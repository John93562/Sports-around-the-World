$("#museums-container > div").each((element, s) => {
  s.remove();
});
$("#stadiums-container > div").each((element, s) => {
  s.remove();
});

setTimeout(() => {
  window["ik_sport_museums"].forEach((museum) => {
    const newDiv = document.createElement("div");

    newDiv.className = "museum";

    const divLeftPart = document.createElement("div");

    divLeftPart.className = "left-part";

    const h4 = document.createElement("h4");

    h4.textContent = museum.name;

    const img = document.createElement("img");
    img.setAttribute("src", museum.image);

    divLeftPart.appendChild(h4);
    divLeftPart.appendChild(img);

    const divRightPart = document.createElement("div");

    divRightPart.className = "right-part";

    const divFirstRow = document.createElement("div");

    divFirstRow.className = "first-row";

    const divdivFirstRow = document.createElement("div");

    const img_2 = document.createElement("img");
    img_2.setAttribute("src", "../Images/location.svg");

    const h6 = document.createElement("h6");

    h6.textContent = museum.location;

    divdivFirstRow.appendChild(img_2);
    divdivFirstRow.appendChild(h6);

    const h6_2 = document.createElement("h6");

    h6_2.textContent = "Established Date: " + museum.establishedDate;

    divFirstRow.appendChild(divdivFirstRow);
    divFirstRow.appendChild(h6_2);

    const h6_3 = document.createElement("h6");

    h6_3.textContent = museum.significance;

    const divOtherProperties = document.createElement("div");

    divOtherProperties.className = "other-properties";

    let div_1 = createTwoh6ElementsWithDIV("Highlights:", museum.highlights);
    let div_2 = createTwoh6ElementsWithDIV("Sport:", museum.sport);

    const div3_manual = document.createElement("div");

    const a_from_div_3 = document.createElement("h6");

    a_from_div_3.textContent = "Website:";

    const a_from_div_3_2 = document.createElement("a");

    a_from_div_3_2.setAttribute("href", museum.website);
    a_from_div_3_2.textContent = museum.website;
    a_from_div_3_2.setAttribute("target", "_blank");

    div3_manual.appendChild(a_from_div_3);

    div3_manual.appendChild(a_from_div_3_2);

    const div4_manual = document.createElement("div");

    const a_from_div_4 = document.createElement("h6");

    a_from_div_4.textContent = "Wikipedia:";

    const a_from_div_4_2 = document.createElement("a");

    a_from_div_4_2.setAttribute("href", museum.wikipediaLink);
    a_from_div_4_2.setAttribute("target", "_blank");
    a_from_div_4_2.textContent = museum.wikipediaLink;

    div4_manual.appendChild(a_from_div_4);

    div4_manual.appendChild(a_from_div_4_2);

    let div_5 = createTwoh6ElementsWithDIV("Founder:", museum.founder);
    let div_6 = createTwoh6ElementsWithDIV("Exhibits:", museum.exhibitsCount);
    let div_7 = createTwoh6ElementsWithDIV(
      "Annual Visitors:",
      museum.annualVisitors
    );
    let div_8 = createTwoh6ElementsWithDIV(
      "Admission Fee:",
      museum.admissionFee
    );
    let div_9 = createTwoh6ElementsWithDIV(
      "Special Events:",
      museum.specialEvents
    );

    divOtherProperties.appendChild(div_1);
    divOtherProperties.appendChild(div_2);
    divOtherProperties.appendChild(div3_manual);
    divOtherProperties.appendChild(div4_manual);
    divOtherProperties.appendChild(div_5);
    divOtherProperties.appendChild(div_6);
    divOtherProperties.appendChild(div_7);
    divOtherProperties.appendChild(div_8);
    divOtherProperties.appendChild(div_9);

    divRightPart.appendChild(divFirstRow);
    divRightPart.appendChild(h6_3);
    divRightPart.appendChild(divOtherProperties);

    newDiv.appendChild(divLeftPart);
    newDiv.appendChild(divRightPart);

    document.querySelector("#museums-container").appendChild(newDiv);
  });

  window["ik_stadiums"].forEach((stadium) => {
    const newDiv = document.createElement("div");

    newDiv.className = "stadium";

    const divStadiumTitle = document.createElement("div");

    divStadiumTitle.className = "stadium_title";

    const divDivStadiumTitle = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", "../Images/location.svg");
    img.setAttribute("width", 24);

    const h6 = document.createElement("h6");

    h6.textContent = stadium.location;

    divDivStadiumTitle.appendChild(img);
    divDivStadiumTitle.appendChild(h6);

    const h4 = document.createElement("h4");

    h4.textContent = stadium.name;

    const divSecondDivStadiumTitle = document.createElement("div");

    const h6_2 = document.createElement("h6");

    h6_2.textContent = "Opened Date: " + stadium.openedDate;

    const img_2 = document.createElement("img");
    img_2.setAttribute("src", "../Images/champagne.svg");
    img_2.setAttribute("width", 24);

    divSecondDivStadiumTitle.appendChild(h6_2);
    divSecondDivStadiumTitle.appendChild(img_2);

    divStadiumTitle.appendChild(divDivStadiumTitle);
    divStadiumTitle.appendChild(h4);
    divStadiumTitle.appendChild(divSecondDivStadiumTitle);

    const img_3 = document.createElement("img");
    img_3.setAttribute("src", stadium.image);

    const h6_3 = document.createElement("h6");

    h6_3.textContent = stadium.significance;

    const h6_4 = document.createElement("h6");

    h6_4.textContent = stadium.famousEvent;

    const divOtherProperties = document.createElement("div");

    divOtherProperties.className = "stadium-properties";

    const img_4 = document.createElement("img");
    img_4.setAttribute("src", "../Images/stadium_background.svg");

    let div_1 = createTwoh6ElementsWithDIV("Capacity:", stadium.capacity);
    let div_2 = createTwoh6ElementsWithDIV("Sport:", stadium.sport);

    let div_5 = createTwoh6ElementsWithDIV("Architect:", stadium.architect);
    let div_6 = createTwoh6ElementsWithDIV("Owner:", stadium.owner);
    let div_7 = createTwoh6ElementsWithDIV(
      "Primary Tenants:",
      stadium.primaryTenants
    );
    let div_8 = createTwoh6ElementsWithDIV(
      "Record Attendance:",
      stadium.recordAttendance
    );
    let div_9 = createTwoh6ElementsWithDIV(
      "Events Hosted:",
      stadium.eventsHosted
    );

    let div_10 = createTwoh6ElementsWithDIV(
      "Ticket Price:",
      stadium.ticketPrice
    );
    //

    const div3_manual = document.createElement("div");

    const a_from_div_3 = document.createElement("h6");

    a_from_div_3.textContent = "Website:";

    const a_from_div_3_2 = document.createElement("a");

    a_from_div_3_2.setAttribute("href", stadium.website);
    a_from_div_3_2.textContent = stadium.website;
    a_from_div_3_2.setAttribute("target", "_blank");

    div3_manual.appendChild(a_from_div_3);

    div3_manual.appendChild(a_from_div_3_2);

    const div4_manual = document.createElement("div");

    const a_from_div_4 = document.createElement("h6");

    a_from_div_4.textContent = "Wikipedia:";

    const a_from_div_4_2 = document.createElement("a");

    a_from_div_4_2.setAttribute("href", stadium.wikipediaLink);
    a_from_div_4_2.setAttribute("target", "_blank");
    a_from_div_4_2.textContent = stadium.wikipediaLink;

    div4_manual.appendChild(a_from_div_4);

    div4_manual.appendChild(a_from_div_4_2);

    divOtherProperties.appendChild(img_4);
    divOtherProperties.appendChild(div_1);
    divOtherProperties.appendChild(div_2);
    divOtherProperties.appendChild(div3_manual);
    divOtherProperties.appendChild(div4_manual);
    divOtherProperties.appendChild(div_5);
    divOtherProperties.appendChild(div_6);
    divOtherProperties.appendChild(div_7);
    divOtherProperties.appendChild(div_8);
    divOtherProperties.appendChild(div_9);
    divOtherProperties.appendChild(div_10);

    newDiv.appendChild(divStadiumTitle);

    newDiv.appendChild(img_3);
    newDiv.appendChild(h6_3);
    newDiv.appendChild(h6_4);
    newDiv.appendChild(divOtherProperties);

    document.querySelector("#stadiums-container").appendChild(newDiv);
  });

  $("#loading").css("display", "none");
  $("main").css("opacity", 1);
}, 1000);

function createTwoh6ElementsWithDIV(text_content_1, text_content_2) {
  const divForH6 = document.createElement("div");

  const h6_4 = document.createElement("h6");

  h6_4.textContent = text_content_1;

  const h6_5 = document.createElement("h6");

  h6_5.textContent = text_content_2;

  divForH6.appendChild(h6_4);

  divForH6.appendChild(h6_5);

  return divForH6;
}
