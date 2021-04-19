function validation() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var postcode = document.getElementById('postcode').value;
  var problem = document.getElementById('problem').value;
  var error_message = document.getElementById('error_message');
  var text;

  if (fname.length == 0) {
    text = 'Please enter First Name';
    error_message1.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (lname.length == 0) {
    text = 'Please enter Last Name';
    error_message1.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
    text = 'Please enter A Valid Email';
    error_message2.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  // if (Number.isInteger(phone))
  // {
  // text="Please enter Phone No.";
  // error_message2.innerHTML = text;
  // return false;
  // }
  if (phone.length != 10) {
    text = 'Please Enter a Valid Phone No.';
    error_message2.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (address.length == 0) {
    text = 'Please enter Your Address';
    error_message3.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (city.length == 0) {
    text = 'Please enter Your City';
    error_message4.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (state.length == 0) {
    text = 'Please enter Your State';
    error_message4.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (postcode.length == 0) {
    text = 'Please enter Your Postcode';
    error_message4.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  if (problem.length == 0) {
    text = 'Please Describe Problem you are Facing';
    error_message5.innerHTML = text;
    return false;
  } else {
    text = '';
    error_message1.innerHTML = text;
  }
  alert('Form Submitted Successfully');
  return true;
}

//module.exports = router;
