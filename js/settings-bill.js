// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
const addbtnsettings = document.querySelector(".radioaddSettings");
const settingUpdate = document.querySelector(".updateSettings");
const settingCalltotalElem = document.querySelector(".callTotalSettings");
const settingSmstotallElem = document.querySelector(".smsTotalSettings");
const settingTotalElem = document.querySelector(".final");
const costperCallelem = document.querySelector(".callCostSetting");
const costperSmselem = document.querySelector(".smsCostSetting");
const warningValueelem = document.querySelector(".warningLevelSetting");
const dangerValueelem = document.querySelector(".criticalLevelSetting");

var settingCalltotal = 0;
var settingSmstotal = 0;
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var dangerLevel = 0;

function costUpdate() {


    settingTotalElem.classList.remove("danger");
    settingTotalElem.classList.remove("warning");
    var costperCall = parseFloat(costperCallelem.value);
    if (costperCall != 0) {
        callCost = costperCall;
        settingCalltotal = 0;
    }
    var costperSms = parseFloat(costperSmselem.value);
    if (costperSms != 0) {
        smsCost = costperSms;
        settingSmstotal = 0;
    }

    var warningValue = parseFloat(warningValueelem.value);
    if (warningValue != callCost - smsCost) {
        warningLevel = warningValue;
    }
    var dangerValue = parseFloat(dangerValueelem.value);
    if (dangerValue != callCost - smsCost) {
        dangerLevel = dangerValue;
    }

}


settingUpdate.addEventListener('click', costUpdate)

function settingsBill() {

    const checkedRadioBtnSettings = document.querySelector(".billItemTypeWithSettings:checked");
    var inputItem = checkedRadioBtnSettings.value;
    if (inputItem == "call") {
        settingCalltotal += callCost;
    }
    else if (inputItem == "sms") {
        settingSmstotal += smsCost;
    }
    settingCalltotalElem.innerHTML = settingCalltotal.toFixed(2);
    settingSmstotallElem.innerHTML = settingSmstotal.toFixed(2);
    var settingTotal = settingCalltotal + settingSmstotal;
    var number=settingTotal.toFixed(2);
    

    if (settingTotal >= warningLevel && settingTotal < dangerLevel) {
        settingTotalElem.classList.add("warning");
    }
    else if (settingTotal >= dangerLevel) {
        settingTotalElem.classList.add("danger");
        number=dangerLevel;
    }
    settingTotalElem.innerHTML ="R"+number;
};
addbtnsettings.addEventListener('click', settingsBill);