function Validate() {

    var contact_name = document.forms['myform']['firstname'].value;
    if (contact_name == "" || contact_name == null) {
        alert("First name field  be Empty");
        return false;
    }

    var lastname = document.forms['myform']['lastname'].value;
    if (lastname == "" || lastname == null) {
        alert("Last Name  can't be Empty");
        return false;
    }

    var contact_message = document.forms['myform']['country'].value;
    if (contact_message == "" || contact_message == null) {
        alert("country  can't be Empty");
        return false;
    }

    var subject = document.forms['myform']['subject'].value;
    if (subject == "" || subject == null) {
        alert("subject  can't be Empty");
        return false;
    }


}