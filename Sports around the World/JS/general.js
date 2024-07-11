import "./hide_header_on_scroll.js";

$("main").css("opacity", 0);

// Loading all XML Files, converting them into JSON and also storing them into a global variables for all of the project
var ik_athletes = [];
var ik_countries = [];
var ik_sport_museums = [];
var ik_sports_daily_lives = [];
var ik_sports = [];
var ik_stadiums = [];

ik_athletes = await GetXMLAndConvertToJSON("athletes");
ik_countries = await GetXMLAndConvertToJSON("countries");
ik_sport_museums = await GetXMLAndConvertToJSON("sport_museums");
ik_sports_daily_lives = await GetXMLAndConvertToJSON("sports_daily_lives");
ik_sports = await GetXMLAndConvertToJSON("sports");
ik_stadiums = await GetXMLAndConvertToJSON("stadiums");

window["ik_athletes"] = ik_athletes;
window["ik_countries"] = ik_countries;
window["ik_sport_museums"] = ik_sport_museums;
window["ik_sports_daily_lives"] = ik_sports_daily_lives;
window["ik_sports"] = ik_sports;
window["ik_stadiums"] = ik_stadiums;

// Changes XML to JSON
// Modified version from here: http://davidwalsh.name/convert-xml-json
function xmlToJson(xml) {
  // Create the return object
  let obj = {};

  if (xml.nodeType === 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j += 1) {
        const attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  // If just one text node inside
  if (
    xml.hasChildNodes() &&
    xml.childNodes.length === 1 &&
    xml.childNodes[0].nodeType === 3
  ) {
    obj = xml.childNodes[0].nodeValue;
  } else if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i += 1) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName;
      if (typeof obj[nodeName] === "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push === "undefined") {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

async function GetXMLAndConvertToJSON(fileName) {
  let res = await $.ajax({
    type: "GET",
    url: "../XML/" + fileName + ".xml",
    dataType: "xml",
    error: function (e) {
      alert("An error occurred while processing XML file");
      console.log("XML reading Failed: ", e);
    },

    success: function (xmlString) {
      return xmlString;
    },
  });

  let result = xmlToJson(res);

  let real_result = [];
  for (const key in result) {
    const element = result[key];

    for (const key_2 in element) {
      if (key_2 == "#text") {
        continue;
      }
      real_result = element[key_2];
    }
  }

  real_result.sort((a, b) => a.name.localeCompare(b.name));

  return real_result;
}
