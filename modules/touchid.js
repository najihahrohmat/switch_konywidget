function isAuthUsingTouchSupported()
{
	var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
	if(status == 5000)
	{
		authUsingTouchID();	
	}
	else
	{
		var msg = "Touch ID is not configured on this device.Authentication returned a status ::"+status;
		kony.ui.Alert({message: msg+" "+status,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
}


function statusCB(status,message)
{
	if(status == 5000)
	{
      alert("auth using finger success!!");
      
      //navigate to next page
      var navObj=new kony.mvc.Navigation("frmHome");
        navObj.navigate();
	}
	else if(status == 5002 || 5003)
      {
        //do nothing : Cancel by user
      }
  	else
	{
		var messg = status+": "+message;
		kony.ui.Alert({message: messg,
		alertType: constants.ALERT_TYPE_INFO,
		yesLabel:"Close"},
		{});
	}
}

function authUsingTouchID()
{
	var config = {"promptMessage" : "Place your finger on the home button to Login"};
	kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,statusCB,config);
}