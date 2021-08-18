// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillBtnElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".red");

var totalCalls = 0;
var radioTotalSms = 0;

function textBillTotal() {
    var billTypeEntered = billTypeTextElement.value.trim();

    if (billTypeEntered === "call"|| billTypeEntered === "Call" || billTypeEntered === "CALL") {
        totalCalls += 2.75
    }
    else if (billTypeEntered === "sms" || billTypeEntered === "Sms" || billTypeEntered === "SMS") {
        radioTotalSms += 0.75;
    }

    callTotalOneElement.innerHTML = totalCalls.toFixed(2);
    smsTotalOneElement.innerHTML = radioTotalSms.toFixed(2);
    var totalCost = totalCalls + radioTotalSms;
    var number = totalCost.toFixed(2);


    if (totalCost >= 30 && totalCost < 50) {
        totalOneElement.classList.add("warning");
    }
    else if (totalCost >= 50) {
        totalOneElement.classList.add("danger");
    }
    totalOneElement.innerHTML = "R" + number;
};

addToBillBtnElement.addEventListener('click', textBillTotal);