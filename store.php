<?php
    $username=$_POST['yourName'];
    $company=$_POST['company'];
    $email=$_POST['email'];
    $phone=$_POST['phoneNumber'];
    $message=$_POST['message'];
    
	echo "Name: $username<br>
		Company: $company<br>
		Email: $email<br>
		Phone no.: $phone<br>
		Message: $message";
?>