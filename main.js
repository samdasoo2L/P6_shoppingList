const shoppingForm = document.querySelector(".content-form");
const contentName = document.querySelector(".content-name");
const contentCount = document.querySelector(".content-count");
const contentList = document.querySelector(".content-ul");

const SHOPPING_KEY = "shopping";

let shoppingList = [];

function saveShoppingList() {
  // shoppingList가 변할때마다 로컬스토리지에 shoppingList를 저장해주는것이 전부!
  localStorage.setItem(SHOPPING_KEY, JSON.stringify(shoppingList));
}

function deleteContent(event) {
  const li = event.target.parentElement;
  li.remove();
  shoppingList = shoppingList.filter((item) => item.id !== parseInt(li.id));
  saveShoppingList();
}

function makeLi(newContent) {
  const li = document.createElement("li");
  li.classList.add("content-li");
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("li-name");
  const countDiv = document.createElement("div");
  countDiv.classList.add("li-count");
  const deleteDiv = document.createElement("div");
  deleteDiv.classList.add("li-delete");
  //   삭제할때 찾기위해서, class주는 느낌
  li.id = newContent.id;
  nameDiv.innerText = newContent.name;
  countDiv.innerText = newContent.count;
  deleteDiv.innerText = "X";
  deleteDiv.addEventListener("click", deleteContent);
  li.appendChild(nameDiv);
  li.appendChild(countDiv);
  li.appendChild(deleteDiv);
  contentList.appendChild(li);
}

function addContent() {
  event.preventDefault();
  const conName = contentName.value;
  contentName.value = "";
  const conCount = contentCount.value;
  contentCount.value = "";
  const newContent = {
    name: conName,
    count: conCount,
    id: Date.now(),
  };
  shoppingList.push(newContent);
  makeLi(newContent);
  saveShoppingList();
}

shoppingForm.addEventListener("submit", addContent);

const savedShoppingList = localStorage.getItem(SHOPPING_KEY);

if (savedShoppingList !== null) {
  const parsedList = JSON.parse(savedShoppingList);
  shoppingList = parsedList;
  shoppingList.forEach(makeLi);
}
