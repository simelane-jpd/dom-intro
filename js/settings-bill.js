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
var radioBillAddButton = document.querySelector('.radioBillAddButton');
var updateSettings = document.querySelector('.updateSettings');

var callCostSettingElem = document.querySelector('.callCostSetting');
var smsCostSettingElem = document.querySelector('.smsCostSetting');
var warningLevelSettingElem = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElem = document.querySelector('.criticalLevelSetting');


var callTotalSettingsElem = document.querySelector('.callTotalSettings');
var smsTotalSettingElem = document.querySelector('.smsTotalSettings');
var totalSettingsElem = document.querySelector('.totalSettings');

var callsTotalSet = 0;
var smsTotalSet = 0;
var totalCost = 0;


updateSettings.addEventListener('click', function(){

   
    var callCostSetting = callCostSettingElem.value;
    if(parseInt(callCostSetting)<= 29)
    {
        callsTotalSet += parseInt(callCostSetting);
    }

    var smsCostSetting = smsCostSettingElem.value;
    if(parseInt(smsCostSetting)<= 29)
    {
        smsTotalSet += parseInt(smsCostSetting);
    }
    
    var warningLevelSetting = warningLevelSettingElem.value;
    if(parseInt(smsCostSetting)>= 30 || parseInt(smsCostSetting)< 60)
    {
        totalCost += parseInt(warningLevelSetting);
    }
    
    var criticalLevelSetting = criticalLevelSettingElem.value;;
    if(parseInt(smsCostSetting)>= 60)
    {
        totalCost += parseInt(criticalLevelSetting);
    } 
 
});


radioBillAddButton.addEventListener('click', function(){
         

    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        var billItemType = billItemTypeWithSettings.value
        // billItemType will be 'call' or 'sms'
      
        if (billItemType === "call"){
            callsTotalSet += 2.75
        }
        else if (billItemType === "sms"){
            smsTotalSet += 0.75;
        }
        
        //update the totals that is displayed on the screen.
        callTotalSettingsElem.innerHTML = callsTotalSet.toFixed(2);
        smsTotalSettingElem.innerHTML = smsTotalSet.toFixed(2);
        totalCost = callsTotalSet + smsTotalSet;
        totalSettingsElem.innerHTML = totalCost.toFixed(2);
        
        
        if (totalCost >= 50){
            // adding the danger class will make the text red
            totalSettingsElem.classList.add("danger");
        }
        else if (totalCost >= 30){
            totalSettingsElem.classList.add("warning");
        }
    
});