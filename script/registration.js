function submit() {

    // For student name
    var studentName = document.getElementById('studentName').value;
    if (studentName == '') {
        alert('Please enter student name!');
    }

    // For Emain
    var email = document.getElementById('email').value;
    if (email == '') {
        alert('Please enter email !');
    } else { 
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if (!pattern.test(email)) {             
            alert("Enter valid email");
        }        
    }

    //For Moblie number
    var mobile = document.getElementById('mobile').value;
    if (mobile == '') {
        alert('Please enter mobile !');
    } else {        
        var pattern = /^[0-9]{10}$/;
        if (!pattern.test(mobile)) { 
            alert("Enter valid mobile number");
        } 
    }
}
