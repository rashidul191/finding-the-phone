// see all btn
const seeAllBtn = document.getElementById("see-all-btn");
seeAllBtn.style.display = "none";
// spinner
const spinner = document.getElementById("spinner");
spinner.style.display = "none";

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

// call display all phone
const callDisplayAllPhone = (phone) => {
  // console.log(phone.phone_name);
  const div = document.createElement("div");
  div.classList.add("col");
  return (div.innerHTML = `
      <div class="card">
        <img class="img-fluid h-25" src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
        <div class="text-center">
            <button onclick="loadPhoneDetails(${phone.slug})" class="btn btn-info mb-4">Show Details</button>
        </div>         
        </div>      
      </div>
`);
};

// display all phone
const displayPhone = (phones) => {
  const section = document.getElementById("display-phone");
  // clear pre data
  section.textContent = "";
  // spinner block
  spinner.style.display = "block";
  let count = 0;
  for (const phone of phones) {
    console.log(phone);
    count++;
    if (count < 20) {
      const div = document.createElement("div");
      div.classList.add("col");
      // div.innerHTML = `
      //     <div onclick="loadPhoneDetails(${phone.slug})" class="card">
      //         <img class="img-fluid h-25" src="${phone.image}" class="card-img-top" alt="...">
      //         <div class="card-body">
      //            <h5 class="card-title">${phone.phone_name}</h5>
      //           <p class="card-text">${phone.brand}</p>
      //         </div>
      //     </div>
      // `;
      div.innerHTML = callDisplayAllPhone(phone);
      section.appendChild(div);
      // spinner none
      spinner.style.display = "none";
    } else if (count == 20) {
      const div = document.createElement("div");
      // div.classList.add("col");
      //     div.innerHTML = `
      //         <div class="card">
      //         <img class="img-fluid h-25" src="${phone.image}" class="card-img-top" alt="...">
      //         <div class="card-body">
      //             <h5 class="card-title">${phone.phone_name}</h5>
      //             <p class="card-text">${phone.brand}</p>
      //         </div>
      //         </div>
      // `;
      div.innerHTML = callDisplayAllPhone(phone);
      section.appendChild(div);
      spinner.style.display = "none";

      seeAllBtn.style.display = "block";
      // console.log(count);
    }
  }
};

// Load Phone Details
const loadPhoneDetails = (phoneId) => {
  console.log("load phone details click done.", phoneId);

  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  console.log(url);
  // const res = await fetch(url);
  // const data = await res.json()
  // console.log(data)
};
