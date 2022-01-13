$(document).ready(function () {
  $(window).scrollTop(0);
});

function changeMode() {
  let show = document.body;
  show.classList.toggle("bodyToggle");
}

const closing = () => {
  // document.getElementById("closed").style.display = "none";
  $("#closed").slideToggle("slow");
};

const testing = () => {
  $("#closed").animate({ opacity: "show", bottom: "80" }, 500);
};

let url = "https://bishalraktim.github.io/project-docs-and-data/category.json";
let hotelUrl = "https://bishalraktim.github.io/project-docs-and-data/data.json";

function getCity() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        let element = document.createElement("option"); //<option></option>
        let text = document.createTextNode(data[i].category); // Delhi
        element.appendChild(text); //<option>Delhi</option>
        element.value = data[i].id; //<option value="1">Delhi</option>
        document.getElementById("city").appendChild(element);
        /*<select>
                <option value="1">Delhi</option>
            </select>*/
      }
    });
}

const getHotel = () => {
  const cityId = document.getElementById("city").value;
  while (hotels.length > 0) {
    hotels.remove(0);
  }
  fetch(hotelUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data...", data);
      for (i = 0; i < data.length; i++) {
        let element = document.createElement("option");
        if (data[i].category_id == cityId) {
          // console.log(typeof data[i].category_id, "i");
          // console.log(typeof cityId, "cityId");
          let text = document.createTextNode(data[i].name);
          element.appendChild(text);
          document.getElementById("hotels").appendChild(element);
        }
      }
    });
};

$(function () {
  var temp = "a";
  $("#hotels").val(temp);
});

window.onload = testing();
window.onload = getCity();
window.onload = getHotel();
