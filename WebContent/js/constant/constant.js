var serviceUrl = "http://localhost:16117/api/users/"; 
myApp.constant('UNISPACE_URL', {
	loginUrl : serviceUrl + "user/logIn",
	forgotPassword : serviceUrl + "user/forgot-password/",
	getUserData : serviceUrl,
	

}); 
myApp.constant('UNISPACE_CONSTANT', {
	TEST : 74,
	ITEM_PER_PAGE :10,
	PROJECT_DESCRIPTION_LIMIT :255,
	SURVEY_DESCRIPTION_LIMIT :255,
	FLAG : 1,
	LOAD_LANGUAGE_COMPLETE : 1,
	SURVEY_LANGAUGES: [{id: 1, label: "English"},{id: 2, label: "French"},{id: 3, label: "Spanish"}],
	SURVEY_LANGAUGES_NONE_OF_THE_OPTION:[{id:1,langauge:"ENGLISH",label:"None"},{id:2,langauge:"CHINESE",label:"没有"},{id:1,langauge:"SPANISH",label:"Ninguna"},{id:1,langauge:"FRENCH",label:"Aucun"}],
	FONT_FAMILY: '<span style="font-family:tahoma;font-size:14px">'

})
myApp
		.constant(
				'UNISPACE_CONSTANT_MESSAGES',
				{
					USER_NOT_AUTHENTICATED : "Please login to continue.",
					INVALID_AUTH_TOKEN : "Invalid User Token",
					INTERNET_CONNECTION : "Please check if your internet connection is working and retry to continue.",
					INVALID_EMAIL : "Please enter valid email address.",
					CONFIRM_PASSWORD_VALID : "Password and Confirm password must be same.",
					PASSWORD_ERROR_LENGTH : "Password must be Minimum 6 and Maximum 15 Characters.",
					PASSWORD_BLANK : "password can't be blank.",
					OLDPASSWORD_BLANK : "Old password can't be blank.",
					CONFIRMPASSWORD_BLANK : "confirm password can't be blank.",
					PASSWORD_CONFIRM_SAME_ERROR : "Password and Confirm password must be same.",
					OLD_AND_NEW_PASSWORD_SAME_ERROR_MESSAGE : "old password and new password cannot be same.",
					PASSWORD_CHANGE_SUCCESS : "Password has been changed successfully.",
					PROJECT_ID_SEARCH : "Please enter Project Key.",
					PROJECT_NAME_SEARCH : "Please enter Project Name.",
					PROJECT_CREATED_SEARCH : "Please enter Created By.",
					SURVEY_ID_SEARCH : "Please enter Survey Key.",
					SURVEY_NAME_SEARCH : "Please enter Survey Name.",
					ALL_FIELDS_ARE_COMPULSORY : "Please fill all mandatory fields.",
					FILED_NOT_CHANGE_SETTITNG : "Field not changed.",
					ANOTHER_USER_LOGED_IN : "Seems you or someone else has logged in using the same user credentials.",
					PROJECT_UPDATE : "Project updated successfully.",
					PROJECT_DELETE : "Project deleted successfully.",
					PROJECT_COPY : "Project copied successfully.",
					PROJECT_KEY_IN_USED : "Project key already in used.",
					SURVEY_KEY_IN_USED : "Survey key already in used.",
					SURVEY_NOT_AVAILABLE : "No survey available for this project.",
					SURVEY_DELETE : "Survey deleted successfully.",
					SURVEY_COPY : "Survey copied successfully.",
						
					//@Author : Bharat
					QUESTION_DELETE : "Question deleted successfully.",
					QUESTION_DELETE_ON_BLANK : "Please fill all mandatory fields.",
					QUESTION_FIELD_BLANK : "Please fill all mandatory fields.",
					DELETE_DEFAULT_OPTION : "Atleast one option should be there!",
					QUESTION_OPTION_DELETE : "Option deleted Successfully.",
					MAXIMUM_LENGTH : "You have reached maximum length.!",
					MIN_MAX_DIFF_DIFFERENCE : "Min - max / diff should be whole number",
					SURVEY_SAVED_SUCCESS : "Survey saved successfully.!",
					LEAVE_PAGE : "Are you sure you want to leave this page?",
					FILL_QUESTION_DETAILS : "Please fill up your question details at position ",
					SURVEY_LIST_EMPTY : "Survey list should not be blank.!",
					LOAD_LANGUAGE_ERROR : "Please check your internet connection or refresh the page.!"
				})