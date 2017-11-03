<?php 

require_once(__DIR__.'/../model/UserModel.php');

class User{

function __construct(){
	//echo 'user controller CLASS CREATED '."<br />";
	$this->model=new UserModel();

}

function login_post(){
	$data = array();
	//print_r($_POST);
	$data['username'] = $_POST['username'];
	$data['password'] = $_POST['password'];
	$result = $this->model->does_user_exist($data);
	if(count($result) > 0){
			$response['login'] = 'success';
	}else{
		$response['login'] = 'failure';
	}
	
	echo json_encode($response);
	
 }

function login_get(){
		
		$data = array();
		$data['username'] = 'chaitya62';
		$data['password'] = 'rehregr5b656bdtybr6ybetr7b6y';
		$response = array();
		$result = $this->model->does_user_exist($data);
		if(count($result) > 0){
			$response['login'] = 'success';
		}else{
			$response['login'] = 'failure';
		}
		echo json_encode($response);
}

function hello_get(){
	echo "Hello, World!";
}


//http://localhost/CJ-MVC/index.php/User/getAll/
function getAll_get(){
	$result = $this->model->get_all();
	print_r($result);
	echo json_encode($result);
}


//http://localhost/CJ-MVC/index.php/User/get/2/
function get_get($id){

	$result = $this->model->get($id);
	echo json_encode($result);


}

}


 ?>