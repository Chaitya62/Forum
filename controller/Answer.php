<?php 

require_once(__DIR__.'/../model/AnswerModel.php');

class Answer{

	function __construct(){
		//echo 'user controller CLASS CREATED '."<br />";
		$this->model=new AnswerModel();

	}
	//localhost/forum/index.php/Question/get
	function getByQuestionId_get($question_id){	
		$result=$this->model->get_all_for_question($question_id);
			echo json_encode($result);
	}

	function add_post(){
		// print_r($_POST);
		$data=array();
		$data['user_id']=$_POST['user_id'];
		$data['question_id']=$_POST['question_id'];
		$data['answer']=$_POST['answer'];
		$this->model->add_answer($data);
		echo json_encode(array('status'=>'success'));
	}

}

 ?>