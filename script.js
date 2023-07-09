let checkButtons = document.querySelectorAll(".select-options");
let optionsCard = document.querySelectorAll(".options-card");
let itemCheckedIndex = 0;
let currId = "";
// checkButtons.forEach(function (e) {
//   e.addEventListener("click", function () {
//     if (!e.classList.contains("img-checked")) {
//       e.classList.add("img-checked");
//       e.classList.remove("img-unchecked");
//       currId = e.id;
//       //alert(currId);
//       for (let i = 0; i < checkButtons.length; i++) {
//         // alert(checkButtons.length);
//         if (checkButtons[i].id !== currId) {
//           //alert(`checkButton[i] = ${checkButtons[i].id}`);
//           checkButtons[i].classList.remove("img-checked");
//           checkButtons[i].classList.add("img-unchecked");
//         } else {
//           itemCheckedIndex = i;
//         }
//       }
//       for (let j = 0; j < optionsCard.length; j++) {
//         if (j === itemCheckedIndex) {
//           optionsCard[j].classList.add("selected");
//           optionsCard[j].classList.remove("not-selected");
//         } else {
//           optionsCard[j].classList.remove("selected");
//           optionsCard[j].classList.add("not-selected");
//         }
//       }
//     }
//   });
// });

optionsCard.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    if (!e.classList.contains("selected")) {
      e.classList.add("selected");
      e.classList.remove("not-selected");
      currId = e.id;
      for (let i = 0; i < optionsCard.length; i++) {
        if (optionsCard[i].id !== currId) {
          optionsCard[i].classList.add("not-selected");
          optionsCard[i].classList.remove("selected");
        } else {
          itemCheckedIndex = i;
        }
      }
      for (let j = 0; j < checkButtons.length; j++) {
        if (j === itemCheckedIndex) {
          checkButtons[j].classList.add("img-checked");
          checkButtons[j].classList.remove("img-unchecked");
        } else {
          checkButtons[j].classList.remove("img-checked");
          checkButtons[j].classList.add("img-unchecked");
        }
      }
    }
  });
});
