<?php

// login user
function login($connection, $email, $password)
{
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($connection, $sql) or die('Something is wrong.');
    $fetch_data = mysqli_fetch_assoc($result);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION['user'] = [
            'name' => $fetch_data['name'],
            'email' => $fetch_data['email']
        ];
        echo "<script> alert('Login successful.') </script>";
        echo "<script> window.location.href = 'profile.php' </script>";
    } else {
        echo "<script> alert('Login unsuccessful.') </script>";
    }
    
}

// logout user
function logout()
{
    unset($_SESSION['user']);
    header("Location: index.php");
}

// check email
function check_email($connection, $email)
{
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($connection, $sql) or die('Something is wrong.');
    $fetch_data = mysqli_fetch_assoc($result);

    if ($fetch_data['email'] === $email) {
        return false;
    } else {
        return true;
    }
    
}

// create user
function create_user($connection, $name, $email, $phone, $password)
{
    if (check_email($connection, $email) === true) {
        $sql = "INSERT INTO users (`name`, `email`, `phone`, `password`) VALUES ('$name', '$email', '$phone', '$password')";
        mysqli_query($connection, $sql) or die('Something is wrong');

        echo "<script> alert('User created successful.') </script>";
        echo "<script> window.location.href = 'index.php' </script>";

    } else {
        echo "<script> alert('This email already used.') </script>";
    }
}

// courses
function courses($connection)
{
    $sql = "SELECT * FROM courses";
    $result = mysqli_query($connection, $sql) or die('Something is wrong');

    return $result;
}

// notices
function notices($connection)
{
    $sql = "SELECT * FROM notices ORDER BY id DESC";
    $result = mysqli_query($connection, $sql) or die('Something is wrong');

    return $result;
}

?>