<?php 

require_once(__DIR__.'/../model/QuestionModel.php');

class Question{

	function __construct(){
		//echo 'user controller CLASS CREATED '."<br />";
		$this->model=new QuestionModel();

	}
	//localhost/forum/index.php/Question/getAll
	function getAll_get(){
		echo json_encode($this->model->get_all());
	}

}

 ?>