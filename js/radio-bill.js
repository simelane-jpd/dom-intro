// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const rCallsTotalElement = document.querySelector(".callTotalTwo");
const rSmsTotalElement = document.querySelector(".smsTotalTwo");
const totalCostElement = document.querySelector(".orange");

var radioTotalCalls = 0;
var radioTotalSms = 0;

function radioBillTotal() {
    const checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
    var billItemType = checkedRadioBtn.value;
    if (billItemType == "call") {
        radioTotalCalls += 2.75;
    }
    else if (billItemType == "sms") {
        radioTotalSms += 0.75;
    }

    rCallsTotalElement.innerHTML = radioTotalCalls.toFixed(2);
    rSmsTotalElement.innerHTML = radioTotalSms.toFixed(2);
    var radioTotal= radioTotalCalls + radioTotalSms;
    var number = radioTotal.toFixed(2);
    

    if (radioTotal >= 30 && radioTotal < 50) {
        totalCostElement.classList.add("warning");
    }
    else if (radioTotal >= 50) {
        totalCostElement.classList.add("danger");
        number = 50;
    }
    totalCostElement.innerHTML = "R" + number;
}

radioBillAddBtnElement.addEventListener('click', radioBillTotal);