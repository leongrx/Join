"use strict";

let allTasks = [];
let taskIds = [];
let taskCategoryBacklog;
let taskUrgencyBacklog;
let worker;
let taskEmail;
let board = "toDo";

const colors = {
  "Software Development": "green",
  Sale: "orange",
  Product: "blue",
  Marketing: "red",
};

setURL("https://gruppe-276.developerakademie.net/smallest_backend_ever");

async function init() {
  loadNavBar();
  setTaskId();
  await downloadFromServer();
  allTasks = JSON.parse(backend.getItem("allTasks"));
  console.log(allTasks);
  renderBacklog();
}

function renderBacklog() {
  let backlogArea = document.getElementById("backlog-area");
  backlogArea.innerHTML = "";
  if (allTasks !== null) {
    for (let i = 0; i < allTasks.length; i++) {
      document.getElementById("backlog-noTask").classList.add("d-none");
      document
        .getElementById("backlogContainerHeadline")
        .classList.remove("d-none");
      let imgName = allTasks[i].imgName;
      let emailBacklog = allTasks[i].mail;
      backlogArea.innerHTML += generateBacklogAreaHTML(
        emailBacklog,
        imgName,
        i
      );
      categoryBgColors(i);
    }
  }
}

function setTaskId() {
  let i = 0;
  allTasks.map((n) => {
    n["id"] = i;
    i++;
  });
}

async function deleteTask(i) {
  await backend.deleteItem("allTasks");
  allTasks.splice(i, 1);
  await backend.setItem("allTasks", JSON.stringify(allTasks));
  init();
}

function openDetails(i) {
  document.getElementById("backlogOpenDetails").innerHTML += openDetailsHTML(i);
  let showDetails = document.getElementById("backlogDetailsContainer");
  showDetails.classList.remove("d-none");
  openDetailLoadContent(i);
}

function closeDetails() {
  let showBacklogDetails = document.getElementById("backlogDetailsContainer");
  let showBacklogDetailsContainer =
    document.getElementById("backlogOpenDetails");
  showBacklogDetailsContainer.innerHTML = "";
  showBacklogDetails.classList.add("d-none");
}

function clickToCopy(i) {
  let mail = allTasks[i].mail;
  mail.textContent;
  navigator.clipboard.writeText(mail);
  toastCopy();
}

function openDetailLoadContent(i) {
  document.getElementById("inputDetailContainer").value = allTasks[i].title;
  document.getElementById("textareaDetailContainer").value =
    allTasks[i].description;
  document.getElementById("taskCategory").innerText = allTasks[i].category;
  document.getElementById("dateDetailContainer").value = allTasks[i].date;
  document.getElementById("urgencyDetailContainer").innerText =
    allTasks[i].urgency;
  document.getElementById("assignedToDetailContainer").innerText =
    allTasks[i].assignedAccount;
}

function openDetailGetEditContent(i) {
  let title = document.getElementById("inputDetailContainer").value;
  let description = document.getElementById("textareaDetailContainer").value;
  let category =
    taskCategoryBacklog == undefined
      ? allTasks[i].category
      : taskCategoryBacklog;
  let date = document.getElementById("dateDetailContainer").value;
  let urgency =
    taskUrgencyBacklog == undefined ? allTasks[i].urgency : taskUrgencyBacklog;
  let assignedAccount =
    worker == undefined ? allTasks[i].assignedAccount : worker;
  let imgName =
    assignedAccount == undefined
      ? allTasks[i].imgName
      : assignedAccount.split(" ").slice(0, 1).join("");
  let mail = taskEmail == undefined ? allTasks[i].mail : taskEmail;
  pushEditContent(
    title,
    description,
    category,
    date,
    urgency,
    assignedAccount,
    imgName,
    mail,
    i
  );
}

async function pushEditContent(
  title,
  description,
  category,
  date,
  urgency,
  assignedAccount,
  imgName,
  mail,
  i
) {
  let newTask = {
    title: title,
    category: category,
    description: description,
    date: date,
    urgency: urgency,
    assignedAccount: assignedAccount,
    imgName: imgName,
    mail: mail,
    board: board,
  };
  afterPushEditContent(newTask, i);
}

async function afterPushEditContent(newTask, i) {
  await backend.deleteItem("allTasks");
  allTasks.splice(i, 1);
  allTasks.push(newTask);
  setTaskId();
  await backend.setItem("allTasks", JSON.stringify(allTasks));
  init();
  clearOpenDetailTasks();
  closeDetails();
  toastEditTask();
}

function clearOpenDetailTasks() {
  taskCategoryBacklog = undefined;
  taskUrgencyBacklog = undefined;
  worker = undefined;
  taskEmail = undefined;
}

function toastEditTask() {
  let editToast = document.getElementById("backlog");
  editToast.innerHTML += toastEditHTML();
  setTimeout(function () {clearToastEditTask();}, 3000);
}

function clearToastEditTask() {
  let editToast = document.getElementById("toastEditContainer");
  editToast.parentNode.removeChild(editToast);
}

function toastCopy() {
  let toastCopy = document.getElementById("backlog");
  toastCopy.innerHTML += toastCopyHTML();
  setTimeout(function () {clearCopyToast();}, 3000);
}

function clearCopyToast() {
  let toastCopy = document.getElementById("toastCopyContainer");
  toastCopy.parentNode.removeChild(toastCopy);
}

function chooseCategoryBacklog(name) {
  taskCategoryBacklog = name;
}

function chooseUrgencyBacklog(name) {
  taskUrgencyBacklog = name;
}

window.addEventListener("resize", function () {
  for (let i = 0; i < allTasks.length; i++) {
    const currentCategory = allTasks[i].category;
    const color = colors[currentCategory];
    if (window.matchMedia("(max-width: 800px)").matches) {
      document.getElementById(`assignedTo${i}`).style = `border-bottom: 1px solid ${color}`;
    } else {
      document.getElementById(`assignedTo${i}`).style = 'border-bottom: none';
    }
  }
});

function chooseAssignedAccountBacklog(position, name, email) {
  workerBorderWhite();
  let workerBorder = document.getElementById("workerBacklog-" + position);
  if (workerBorder.style.border == "1px solid red") {
    workerBorder.style.border = "1px solid white";
  } else {
    workerBorder.style.border = "1px solid red";
  }
  worker = name;
  taskEmail = email;
}

function workerBorderWhite() {
  document.getElementById("workerBacklog-1").style.border = "1px solid white";
  document.getElementById("workerBacklog-2").style.border = "1px solid white";
  document.getElementById("workerBacklog-3").style.border = "1px solid white";
}

function categoryBgColors(i) {
  const currentCategory = allTasks[i].category;
  const color = colors[currentCategory];
  document.getElementById(`categoryBgColor${i}`).style.backgroundColor = color;
}
