<?php 

require_once(__DIR__.'/../core/CJ_Model.php');

class AnswerModel extends CJ_Model{

	function __contruct(){
		parent::__contruct();
	}

	function get_all_for_question($question_id){
		return $this->read('answers',array('*'),array('question_id'=>$question_id));
	}
	function add_answer($data){
		$this->create('answers',$data);
	}
	
}
 ?>