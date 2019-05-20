var mainForm = document.querySelector(".main-form");
var fieldCatName = document.querySelector("#cat-name");
var fieldCatWeight = document.querySelector("#cat-weight");
var fieldCatAge = document.querySelector("#cat-age");
var fieldManMail = document.querySelector("#man-mail");
var fieldManPhone = document.querySelector("#man-phone");
var fieldCommentText = document.querySelector("#comment-text");

//поведение формы
if (mainForm) {
  mainForm.addEventListener("submit", function (evt) {
    if (!fieldCatName.value || !fieldCatWeight.value || !fieldCatAge.value || !fieldManMail.value || !fieldManPhone.value || !fieldCommentText.value) {
      evt.preventDefault();
      if (!fieldCatName.value) {
        fieldCatName.classList.add("fieldset-cat__input--error");
      }
      if (!fieldCatWeight.value) {
        fieldCatWeight.classList.add("fieldset-cat__input--error");
      }
      if (!fieldCatAge.value) {
        fieldCatAge.classList.add("fieldset-cat__input--error");
      }
      if (!fieldManMail.value) {
        fieldManMail.classList.add("fieldset-man__input--error");
      }
      if (!fieldManPhone.value) {
        fieldManPhone.classList.add("fieldset-man__input--error");
      }
      if (!fieldCommentText.value) {
        fieldCommentText.classList.add("fieldset-comment__text--error");
      }
    }
  });

  mainForm.addEventListener("keydown", function (evt) {
    if (fieldCatName.value && fieldCatName.classList.contains("fieldset-cat__input--error")) {
      fieldCatName.classList.remove("fieldset-cat__input--error");
    }
    if (fieldCatWeight.value && fieldCatWeight.classList.contains("fieldset-cat__input--error")) {
      fieldCatWeight.classList.remove("fieldset-cat__input--error");
    }
    if (fieldCatAge.value && fieldCatAge.classList.contains("fieldset-cat__input--error")) {
      fieldCatAge.classList.remove("fieldset-cat__input--error");
    }
    if (fieldManMail.value && fieldManMail.classList.contains("fieldset-man__input--error")) {
      fieldManMail.classList.remove("fieldset-man__input--error");
    }
    if (fieldManPhone.value && fieldManPhone.classList.contains("fieldset-man__input--error")) {
      fieldManPhone.classList.remove("fieldset-man__input--error");
    }
    if (fieldCommentText.value && fieldCommentText.classList.contains("fieldset-comment__text--error")) {
      fieldCommentText.classList.remove("fieldset-comment__text--error");
    }
  });
}
