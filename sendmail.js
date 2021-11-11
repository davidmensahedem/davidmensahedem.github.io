var nameOfPerson = document.getElementById("name");
var email = document.getElementById("name");
var message = document.getElementById("name");
var mailForm = document.getElementById("mailform");

var sendMailBtn = document.getElementById("sendmail");

mailForm.addEventListener("submit", function(event){
    event.preventDefault();
    let nameValue = nameOfPerson.value;
    let emailValue = email.value;
    let messageValue = message.value;

    let hrefValue = `mailto:davidmensahedem@gmail.com?cc=davidphilcupamensah@gmail.com&subject=${nameOfPerson}, Portfolio Website&body=From ${email} \n ${message}`;

    sendMailBtn.href = hrefValue;
  });