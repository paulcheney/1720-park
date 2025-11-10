// Importy the JSON formatted data
import { parks } from "../data/parks.mjs";
console.log(parks);

const destination = document.querySelector("#allparks");

parks.forEach((park) => {
  //Park Photo and Name
  console.log(park.name, park.photo);
  const parkcard = document.createElement("div");
  const parksection = document.createElement("section");
  const parkname = document.createElement("h2");
  const parkphoto = document.createElement("img");
  parkname.innerText = park.name;
  parkphoto.src = `images/${park.photo}`;
  parkphoto.width = "600"
  parkphoto.height = "200"
  parkphoto.alt = park.name
  parkphoto.loading = "lazy"
  parksection.appendChild(parkphoto);
  parksection.appendChild(parkname);

  //Park Description
  console.log(park.description);
  const parkdesc = document.createElement("p");
  parkdesc.innerText = park.description;

  //Park Established
  console.log(park.established);
  const parkest = document.createElement("p");
  parkest.innerHTML = `<span>ESTABLISHED:</span> ${park.established}`;

  //Park Size
  console.log(park.size_sq_mi);
  const parksize = document.createElement("p");
  parksize.innerHTML = `<span>PARK SIZE:</span> ${park.size_sq_mi} sq miles`;

  //Park Rating
  console.log(park.rating);
  const parkrating = document.createElement("p");
  switch (park.rating) {
    case 5:
      parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9733; &#9733; &#9733;";
      break;
    case 4:
      parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9733; &#9733; &#9734; ";
      break;
    case 3:
      parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9733; &#9734; &#9734;";
      break;
    case 2:
      parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9734; &#9734; &#9734;";
      break;
    case 1:
      parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9734; &#9734; &#9734; &#9734;";
      break;
    default:
      parkrating.innerHTML = "No Rating Found";
  }

  //Park Web Link
  console.log(park.url);
  const parkurl = document.createElement("a");
  parkurl.innerText="Learn More"
  parkurl.href = park.url;
  parkurl.target = "_blank"

  //Build Each Card
  parkcard.appendChild(parksection);
  parkcard.appendChild(parkdesc);
  parkcard.appendChild(parkest);
  parkcard.appendChild(parksize);
  parkcard.appendChild(parkrating);
  parkcard.appendChild(parkurl);
  destination.appendChild(parkcard);
});
