<?php 
	include('../auth/access-origin.php');
	include('../database/config.php');
	include('../lib/hash.php');
	include('../lib/util.php');

	$data = json_decode(file_get_contents('php://input'));  //get data 

	//check if post variables exist, if not, return error
	if (!$data) {
		echo 'Error no data available for processing';
	} else {
		//sanitize the inputs
		$key = $data->betakey;
		$email = $data->email;
		$password = $data->password;
		$username = $data->username;

		//hash password
		$rounds = 7;
		$password = hash_password($password, $rounds);


		//connect to db
		$conn = new mysqli($DBServer, $DBUser, $DBPass, $DBName);
		 
		//check connection
		if ($conn->connect_error) {
		  echo 'Error DB connection failed';
		}

		//check if the beta key exists in beta table and it is not claimed yet
		//if it does, mark the key as claimed
		//else return error
		$sql = 'SELECT * FROM betakeys WHERE betakey = "'.$key.'" AND claimed = 0';


		//TODO: check if email already taken
		
		$results = $conn->query($sql);
		$rows_returned = $results->num_rows;

		if($rows_returned == 0) {
			echo 'ERROR: invalid beta key';
		} else {
		  $sqlUpdateKey = 'UPDATE betakeys SET claimed = 1 WHERE betakey = "'.$key.'"';
		  $conn->query($sqlUpdateKey);

			//create an account in accounts table, set verified to false
			//on success return success
			$sqlAccountCreation = "INSERT INTO users(signup_date, username, email, password, role, verified) VALUES (NOW(), '$username','$email', '$password', 'member', 'false')";
			//debug
			//$conn->query($sqlAccountCreation) or die(mysqli_error($conn));

			if ($conn->query($sqlAccountCreation) === TRUE) {
				echo 'SUCCESS';
			} else {
				echo 'ERROR: unable to create account';
			}
		}

	}

?>