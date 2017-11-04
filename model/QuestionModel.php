<?php 

require_once(__DIR__.'/../core/CJ_Model.php');

class QuestionModel extends CJ_Model{

	function __contruct(){
		parent::__contruct();
	}

	function get_by_question_id($id){
		return $this->read('questions', array('*'), array('id'=>$id));
	}
	function add_question($data){
		$this->create('questions',$data);
	}
}
 ?>