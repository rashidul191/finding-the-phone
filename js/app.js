// see all btn
const seeAllBtn = document.getElementById("see-all-btn");
seeAllBtn.style.display = "none"
// spinner
const spinner = document.getElementById("spinner");
spinner.style.display = "none"

// search phone button
const searchPhone = () => {
  const searchFiled = document.getElementById("search-filed");
  const searchText = searchFiled.value.toLowerCase();
  if (searchText != "") {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((phone) => displayPhone(phone.data));
  } else {
    alert("Error !!! empty search filed");
  }
  // clear search filed
  searchFiled.value = "";
};



// display all phone
const displayPhone = (phones) => {
  const section = document.getElementById("display-phone");
  section.textContent = "";

  spinner.style.display = "block"
  let count = 0;
  for (const phone of phones) {
    count++;
    if (count < 20) {     
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
          <div onclick="loadPhoneDetails()" class="card">
          <img class="img-fluid h-25" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
          </div>
          </div>
  `;
      section.appendChild(div);
      spinner.style.display = "none"
    }
    else if(count == 20){     
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
          <div class="card">
          <img class="img-fluid h-25" src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
          </div>
          </div>
  `;
      section.appendChild(div);
      spinner.style.display = "none"

      seeAllBtn.style.display = "block"     
     // console.log(count);
    }
  }
};


// Load Phone Details
const loadPhoneDetails = () =>{

}