// in the same line of weekly task --> sort by priority button
// where items are sorted from most important to low importance

//array shopping list

let itemsShopping = [
  {
    // task icon type + bookmark and option (three dots button)
    itemName: "Fruits",
    image: "fruits.jpg",
    description: "apples (1 kg) , strawberries(200g), grapes(500 g)",
    importance: 0,
    deadline: "29/09/2024",
    // (icon)delete button (danger-bs) + (icon)done button(green-bs)
  },

  {
    itemName: "Bio-Juices",
    image: "bio juices.jpg",
    description: "Need 4 Bottles",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Shampoo",
    image: "shampoo.jpg",
    description: "Need to buy on Amazon",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Lamp bulb",
    image: "lamp bulb.jpg",
    description: "Need urgently to buy it for living room lamp",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Table and chairs for the balcony",
    image: "outdor table and chairs.jpg",
    description: "I have to look for it in Ikea or Momax",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Food for cats",
    image: "cat.jpg",
    description: "Need 2 packages",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Flowers boquets",
    image: "flower bouquet.jpg",
    description: "Need bouquets x 3",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Vegetables",
    image: "vegetables.jpg",
    description: "Need Carrots 1kg, Broccoli, Potatoes 1kg",
    importance: 0,
    deadline: "29/09/2024",
  },

  {
    itemName: "Bread",
    image: "bread.jpg",
    description: "need 3 Loafs from Bakery",
    importance: 0,
    deadline: "29/09/2024",
  },
];
  

// console.log(items); array displayed test worked
document.getElementById("container-list").innerHTML = "";
// displaying items with for loop
for (const item of itemsShopping) {
  

  document.getElementById("container-list").innerHTML += `
   <div>
  <div class="card bg-warning-subtle  text-danger text-opacity-75 my-4 pt-4 ">
  <div class = "d-inline-flex justify-content-end pe-3 pb-3">
  <span class="material-symbols-outlined my-0"> bookmark_add
</span> <span class="material-symbols-outlined">more_vert
</span>
</div>
  <img src="./images/${item.image}" class="card-img-top" alt="${item.itemName}">
  <div class="card-body"> 
    <h5 class="card-title">${item.itemName}</h5>
    <p class="card-text">${item.description}</p>
    <hr>
    <span>
    <p class="card-text">Priority level: <button class="btn btn-success opacity-75 text-light priorityBtn ">${item.importance}</button></p>
    </span>
    <br>
    <p class="card-text" >Deadline: ${item.deadline}</p>
    <hr>

    <button class="btn btn-danger opacity-75 text-light deleteBtn ">Delete</button>
    <button class="btn btn-warning opacity-75 text-light doneBtn">Done</button>
  </div>
</div>

   </div>
 `;
}
// for increasing button priority and changing background color
let priorityBtn = document.querySelectorAll(".priorityBtn");

priorityBtn.forEach((btn, index) => {
  // console.log(btn, index); test btnPriority worked
  btn.addEventListener("click", function () {
    if (itemsShopping[index].importance < 5) {
      // console.log(itemsShopping[index]); btn is resposive and gives info back based on the index
      itemsShopping[index].importance++;
      // console.log(itemsShopping[index]); index increases
      document.querySelectorAll(".priorityBtn")[index].innerHTML =
        itemsShopping[index].importance;
    }

    if (itemsShopping[index].importance >= 4) {
      document
        .querySelectorAll(".priorityBtn")
        [index].classList.add("bg-danger");
    } else if (itemsShopping[index].importance >= 2) {
      document
        .querySelectorAll(".priorityBtn")
        [index].classList.add("bg-warning");
    } else {
      itemsShopping[index].importance <= 1;
      document
        .querySelectorAll(".priorityBtn")
        [index].classList.add("bg-success");
    }
  });
});




// Function to sort items by the highest importance and to display them
function sortBtnAscending() {
  // itemsShopping.sort((a, b) => a.importance - b.importance);
  itemsShopping.sort((a, b) => b.importance - a.importance);

  document.getElementById("container-list").innerHTML = "";


  for (const item of itemsShopping) {
    document.getElementById("container-list").innerHTML += `
      <div>
        <div class="card bg-warning-subtle text-danger text-opacity-75 my-4 pt-4" style="height: 45rem;">
          <div class="d-inline-flex justify-content-end pe-3 pb-3">
            <span class="material-symbols-outlined my-0">bookmark_add</span>
            <span class="material-symbols-outlined">more_vert</span>
          </div>
          <img src="./images/${item.image}" class="card-img-top" alt="${item.itemName}">
          <div class="card-body">
            <h5 class="card-title">${item.itemName}</h5>
            <p class="card-text">${item.description}</p>
            <hr>
            <span>
              <p class="card-text">Priority level: <button class="btn btn-success opacity-75 text-light priorityBtn">${item.importance}</button></p>
            </span>
            <br>
            <p class="card-text">Deadline: ${item.deadline}</p>
            <hr>
            <button class="btn btn-danger opacity-75 text-light deleteBtn">Delete</button>
            <button class="btn btn-warning opacity-75 text-light doneBtn">Done</button>
          </div>
        </div>
      </div>
    `;
  }


  attachPriorityButtonListeners();
}

// Function to attach event listeners to priority buttons
function attachPriorityButtonListeners() {
  let priorityBtn = document.querySelectorAll(".priorityBtn");

  priorityBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (itemsShopping[index].importance < 5) {
        itemsShopping[index].importance++;
        document.querySelectorAll(".priorityBtn")[index].innerHTML = itemsShopping[index].importance;
      }

      if (itemsShopping[index].importance >= 4) {
        document.querySelectorAll(".priorityBtn")[index].classList.add("bg-danger");
      } else if (itemsShopping[index].importance >= 2) {
        document.querySelectorAll(".priorityBtn")[index].classList.add("bg-warning");
      } else {
        document.querySelectorAll(".priorityBtn")[index].classList.remove("bg-danger", "bg-warning");
      }
    });
  });
}

// Initial display of items
sortBtnAscending();





// sweet alert connection to button subscribe

const submitClick = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: true,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "💕Thank you for signing in 💕",
  });
};
