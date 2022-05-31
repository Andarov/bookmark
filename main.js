let elQuestionsItem = document.querySelectorAll(".js-questions-item");
let elQuestionsText = document.querySelectorAll(".js-questions-text");
let elQuestionsHeading = document.querySelectorAll(".questions__item-title");
let elQuestionsIcon = document.querySelectorAll(".down-icon");

elQuestionsItem.forEach(function(item,index) {
    item.addEventListener("click", function () {
        elQuestionsText[index].classList.toggle("questions__item-texts--open")
        elQuestionsIcon[index].classList.toggle("fa-angle-up")
        // elQuestionsIcon[index].style.color = "red";
    })
})