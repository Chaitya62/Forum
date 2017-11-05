<?php 

require_once(__DIR__.'/../model/QuestionModel.php');
require_once(__DIR__.'/../model/UserModel.php');

class Question{

	function __construct(){
		//echo 'user controller CLASS CREATED '."<br />";
		$this->model=new QuestionModel();
		$this->user_model = new UserModel();

	}
	//localhost/forum/index.php/Question/get
	function get_get($id){
		$result=$this->model->get_by_question_id($id);
		$data = array();
	
		foreach ($result[0] as $key => $value) {
			$data[$key] = $value;
		}
		
		$data['user'] = $this->user_model->get_username_by_id($data['user_id']); 

		echo json_encode($data);
	}

	function add_post(){
		// print_r($_POST);
		$data=array();
		$data['user_id']=$_POST['user_id'];
		$data['question_header']=$_POST['question_header'];
		$data['description']=$_POST['description'];
		$this->model->add_question($data);
		echo json_encode(array('status'=>'success'));
	}

}

 ?>