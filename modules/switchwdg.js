function onSwitch(){
   kony.ui.Alert({message: "Fingerprint is able", alertType: constants.ALERT_TYPE_INFO, yesLabel:"Okay"}, {});
}

function offSwitch(){
   kony.ui.Alert({message: "Fingerprint is disable", alertType: constants.ALERT_TYPE_INFO, yesLabel:"Okay"}, {});
}


