// For MOBILE part:
const navToggle = document.querySelector(".mobile-nav-toggle");
const myNav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    if(myNav.hasAttribute("data-visible")) {
        navToggle.setAttribute("aria-expanded", false) ;
        document.getElementById('overlay').style.display = 'none';
    } else {
        navToggle.setAttribute("aria-expanded", true);
        document.getElementById('overlay').style.display = 'block';
    }
myNav.toggleAttribute("data-visible");
});


// Change stand-card opacity if value is "0 Left":
var input = document.querySelectorAll('.number-left');
var box = document.querySelectorAll('.stand-card');
var btnSelectReward = document.querySelectorAll('.btn-stand');

for(let i = 0; i < input.length; i++) {
    if(input[i].value == 0) {
        box[i].style.opacity = '0.5';
        btnSelectReward[i].style.backgroundColor = 'grey';
        btnSelectReward[i].disabled = true;
        btnSelectReward[i].style.cursor = "default";
    } else {
        box[i].style.backgroundColor = '';
        box[i].style.opacity = '';
        btnSelectReward[i].style.backgroundColor = '';
        btnSelectReward[i].disabled = false;
    }  
}

// Change modal-card opacity if value is "0 Left":
var inputModal = document.querySelectorAll('.modal-number');
var boxModal = document.querySelectorAll('.modal-card-part-1');
let btnRadio = document.querySelectorAll('input[name="modal"]');
var modalTitle = document.querySelectorAll('.modal-title');

for(let j = 1; j < inputModal.length; j++) {
    if(inputModal[j].value == 0) {
        boxModal[j].style.opacity = '0.5';
        btnRadio[j].disabled = true;
        btnRadio[j].style.cursor = "default";
        modalTitle[j].style.pointerEvents = "none";
    } else {
        boxModal[j].style.opacity = '';
        btnRadio[j].disabled = false;
        btnRadio[j].style.cursor = "";
        modalTitle[j].style.pointerEvents = "";
    }  
}

// Same as above but for mobile version:
var inputMobile = document.querySelectorAll('.mobile-modal-number');
for(let k = 1; k < inputMobile.length; k++) {
    if(inputMobile[k].value == 0) {
        boxModal[k].style.opacity = '0.5';
        btnRadio[k].disabled = true;
        btnRadio[k].style.cursor = "default";
        modalTitle[k].style.pointerEvents = "none";
    } else {
        boxModal[k].style.opacity = '';
        btnRadio[k].disabled = false;
        btnRadio[k].style.cursor = "";
        modalTitle[k].style.pointerEvents = "";
    } 
}




// Show modal & change bookmark button state:
var popupModal = document.querySelector('#modal-card-popup'); 
var btnBookmark = document.querySelector('.btn-bookmark');
var imgBookmark = document.querySelector('.img-bookmark');
var imgMobileBookmark = document.querySelector('.mobile-btn-bookmark');
var btnState;
var mobileBtnState;

function showModalCard() {
    popupModal.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeFunction() {
    popupModal.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function changeBtnColor() {   
    btnState = !btnState;  
    if(btnState) {
        btnBookmark.style.color = '#147B74';
        imgBookmark.src = 'images/icon-bookmark-edited.svg';
        var newBtnBookmark = btnBookmark.style.color + imgBookmark.src;
        newBtnBookmark.style.display = 'block'; 
    } else if(!btnState){
        btnBookmark.style.color = '#7A7A7A';
        imgBookmark.src = 'images/icon-bookmark.svg';
        var newBtnBookmark = btnBookmark.style.color + imgBookmark.src;
        newBtnBookmark.style.display = 'block'; 
    }
}

function changeMobileBtnColor() {
    mobileBtnState = !mobileBtnState;  
    if(mobileBtnState) {
        imgMobileBookmark.src = 'images/icon-bookmark-edited.svg';
        var newBtnBookmark = imgMobileBookmark.src;
        newBtnBookmark.style.display = 'block'; 
    } else if(!mobileBtnState){
        imgMobileBookmark.src = 'images/icon-bookmark.svg';
        var newBtnBookmark = imgMobileBookmark.src;
        newBtnBookmark.style.display = 'block'; 
    }
}


// CTA "Continue" to "success" popup card :
var successPopup = document.querySelector('.success-popup');
var btnSuccess = document.querySelector('.btn-success');
function showSuccessCard() {
    successPopup.style.display = 'block';
    document.getElementById('overlay-bis').style.display = 'block';
    popupModal.style.display = 'none';
    document.getElementById('overlay').style.display = 'block';
}

function removeSuccessCard() {
    successPopup.style.display = 'none';
    document.getElementById('overlay-bis').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


// Into Modal selection - with Radio buttons :
var modalCardOne = document.querySelector ('.card-1');
var modalCardTwo = document.querySelector ('.card-2');
var modalCardThree = document.querySelector ('.card-3');
var modalCardFour = document.querySelector ('.card-4');
let contact = document.querySelectorAll('input[name="modal"]');
var addSubPartCard2 = document.querySelector('.pledge-selected-card-2');
var addSubPartCard3 = document.querySelector('.pledge-selected-card-3');
var addSubPartCard4 = document.querySelector('.pledge-selected-card-4');

for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("change", function() {
    let val = this.value; // this == the clicked radio,
    console.log(val);
    if(val == 'card-1') {
        showSuccessCard();
        modalCardOne.style.borderColor = '#3CB4AC';
        modalCardOne.style.borderWidth = '2px';

        modalCardTwo.style.borderColor = '';
        modalCardTwo.style.borderWidth = '';
        addSubPartCard2.style.display = 'none';
        pledgeValCard2.value = '25'; 

        modalCardThree.style.borderColor = '';
        modalCardThree.style.borderWidth = '';
        addSubPartCard3.style.display = 'none';
        pledgeValCard3.value = '75';  

        modalCardFour.style.borderColor = '';
        modalCardFour.style.borderWidth = '';
        addSubPartCard4.style.display = 'none';
        pledgeValCard4.value = '200';
    } else if(val == 'card-2') {
        modalCardOne.style.borderColor = '';
        modalCardOne.style.borderWidth = '';

        modalCardTwo.style.borderColor = '#3CB4AC';
        modalCardTwo.style.borderWidth = '2px';
        addSubPartCard2.style.display = 'block'; 
        pledgeValCard2.value = '25';       

        modalCardThree.style.borderColor = '';
        modalCardThree.style.borderWidth = '';
        addSubPartCard3.style.display = 'none';
        pledgeValCard3.value = '75';  

        modalCardFour.style.borderColor = '';
        modalCardFour.style.borderWidth = '';
        addSubPartCard4.style.display = 'none';
        pledgeValCard4.value = '200';
    } else if(val == 'card-3') {
        modalCardOne.style.borderColor = '';
        modalCardOne.style.borderWidth = '';

        modalCardTwo.style.borderColor = '';
        modalCardTwo.style.borderWidth = '';
        addSubPartCard2.style.display = 'none';
        pledgeValCard2.value = '25'; 

        modalCardThree.style.borderColor = '#3CB4AC';
        modalCardThree.style.borderWidth = '2px';
        addSubPartCard3.style.display = 'block'; 
        pledgeValCard3.value = '75';         

        modalCardFour.style.borderColor = '';
        modalCardFour.style.borderWidth = '';
        addSubPartCard4.style.display = 'none';
        pledgeValCard4.value = '200';
    } else if(val == 'card-4') {
        modalCardOne.style.borderColor = '';
        modalCardOne.style.borderWidth = '';

        modalCardTwo.style.borderColor = '';
        modalCardTwo.style.borderWidth = '';
        addSubPartCard2.style.display = 'none';
        pledgeValCard2.value = '25'; 

        modalCardThree.style.borderColor = '';
        modalCardThree.style.borderWidth = '';
        addSubPartCard3.style.display = 'none';
        pledgeValCard3.value = '75';  

        modalCardFour.style.borderColor = '#3CB4AC';
        modalCardFour.style.borderWidth = '2px';
        addSubPartCard4.style.display = 'block';    
        pledgeValCard4.value = '200';      
    }
  });  
}


// Into Modal selection - with titles :
var radioBtn1 = document.getElementById('select-pledge-no-reward');
var radioBtn2 = document.getElementById('select-bamboo-stand');
var radioBtn3 = document.getElementById('select-black-stand');
var radioBtn4 = document.getElementById('select-mahogany-stand');

function selectedModal1() {
    showSuccessCard();
    modalCardOne.style.borderColor = '#3CB4AC';
    modalCardOne.style.borderWidth = '2px';

    modalCardTwo.style.borderColor = '';
    modalCardTwo.style.borderWidth = '';
    addSubPartCard2.style.display = 'none';
    pledgeValCard2.value = '25'; 

    modalCardThree.style.borderColor = '';
    modalCardThree.style.borderWidth = '';
    addSubPartCard3.style.display = 'none';
    pledgeValCard3.value = '75'; 

    modalCardFour.style.borderColor = '';
    modalCardFour.style.borderWidth = '';
    addSubPartCard4.style.display = 'none';
    pledgeValCard4.value = '200'; 

    radioBtn1.checked = true;
    radioBtn2.checked = false;
    radioBtn3.checked = false;
    radioBtn4.checked = false;
}

function selectedModal2() {
    modalCardOne.style.borderColor = '';
    modalCardOne.style.borderWidth = '';

    modalCardTwo.style.borderColor = '#3CB4AC';
    modalCardTwo.style.borderWidth = '2px';
    addSubPartCard2.style.display = 'block';   
    pledgeValCard2.value = '25';      

    modalCardThree.style.borderColor = '';
    modalCardThree.style.borderWidth = '';
    addSubPartCard3.style.display = 'none';
    pledgeValCard3.value = '75'; 

    modalCardFour.style.borderColor = '';
    modalCardFour.style.borderWidth = '';
    addSubPartCard4.style.display = 'none';
    pledgeValCard4.value = '200'; 

    radioBtn1.checked = false;
    radioBtn2.checked = true;
    radioBtn3.checked = false;
    radioBtn4.checked = false;
}

function selectedModal3() {
    modalCardOne.style.borderColor = '';
    modalCardOne.style.borderWidth = '';

    modalCardTwo.style.borderColor = '';
    modalCardTwo.style.borderWidth = '';
    addSubPartCard2.style.display = 'none';
    pledgeValCard2.value = '25'; 

    modalCardThree.style.borderColor = '#3CB4AC';
    modalCardThree.style.borderWidth = '2px';
    addSubPartCard3.style.display = 'block';  
    pledgeValCard3.value = '75';    

    modalCardFour.style.borderColor = '';
    modalCardFour.style.borderWidth = '';
    addSubPartCard4.style.display = 'none'; 
    pledgeValCard4.value = '200'; 
    
    radioBtn1.checked = false;
    radioBtn2.checked = false;
    radioBtn3.checked = true;
    radioBtn4.checked = false;
}

function selectedModal4() {
    modalCardOne.style.borderColor = '';
    modalCardOne.style.borderWidth = '';

    modalCardTwo.style.borderColor = '';
    modalCardTwo.style.borderWidth = '';
    addSubPartCard2.style.display = 'none';
    pledgeValCard2.value = '25'; 

    modalCardThree.style.borderColor = '';
    modalCardThree.style.borderWidth = '';
    addSubPartCard3.style.display = 'none';
    pledgeValCard3.value = '75'; 

    modalCardFour.style.borderColor = '#3CB4AC';
    modalCardFour.style.borderWidth = '2px';
    addSubPartCard4.style.display = 'block'; 
    pledgeValCard4.value = '200';      

    radioBtn1.checked = false;
    radioBtn2.checked = false;
    radioBtn3.checked = false;
    radioBtn4.checked = true;
}


// Show special modal/checked card:
function showModalCardBamboo() {
    popupModal.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    selectedModal2(); 
}

function showModalCardBlack() {
    popupModal.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    selectedModal3(); 
}

function showModalCardMahogany() {
    popupModal.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    selectedModal4(); 
}


// Check pledge's value:
var pledgeValCard2 = document.getElementById('pledge-amount-card-2');
var pledgeValCard3 = document.getElementById('pledge-amount-card-3');
var pledgeValCard4 = document.getElementById('pledge-amount-card-4');
var currentPledgeValCard2;
var currentPledgeValCard3;
var currentPledgeValCard4;

var btnContinue2 = document.querySelector('#btn-continue-2');
btnContinue2.disabled = true;

var btnContinue3 = document.querySelector('#btn-continue-3');
btnContinue3.disabled = true;

var btnContinue4 = document.querySelector('#btn-continue-4');
btnContinue4.disabled = true;

function checkValueCard2() {
    currentPledgeValCard2 = pledgeValCard2.value;
    if(currentPledgeValCard2 <= 24){
        alert("Please pledge $25 or more.");
    } else {
        btnContinue2.disabled = false;
    }
}

function checkValueCard3() {
    currentPledgeValCard3 = pledgeValCard3.value;
    if(currentPledgeValCard3 <= 74){
        alert("Please pledge $75 or more.");
    } else {
        btnContinue3.disabled = false;
    }
}

function checkValueCard4() {
    currentPledgeValCard4 = pledgeValCard4.value;
    if(currentPledgeValCard4 <= 199){
        alert("Please pledge $200 or more.");
    } else {
        btnContinue4.disabled = false;
    }
}


