const shoppingForm = document.querySelector(".content-form");
const contentName = document.querySelector(".content-name");
const contentCount = document.querySelector(".content-count");
const contentList = document.querySelector(".content-ul");

function deleteContent(event) {
  const li = event.target.parentElement;
  li.remove();
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
  makeLi(newContent);
}

shoppingForm.addEventListener("submit", addContent);
