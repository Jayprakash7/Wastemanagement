<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $signupUsername = $_POST["signupUsername"];
    $signupPassword = $_POST["signupPassword"];
    $signupEmail = $_POST["signupEmail"];
    $signupPhone = $_POST["signupPhone"];
    $db = new mysqli("localhost","root","","id21433952_dbwmcc");
    if($db->connect_error){
        die("Connection Failed : ".$db->connect_error);
    }
    $sql = "INSERT INTO UserDeatils(signupUsername,signupPassword,signupEmail,signupPhone) VALUES(?, ?, ?, ?)";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("ssss",$signupUsername,$signupPassword,$signupEmail,$signupPhone);
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
    $db->close();
}
?>