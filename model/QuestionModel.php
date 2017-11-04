<?php 

require_once(__DIR__.'/../core/CJ_Model.php');

class QuestionModel extends CJ_Model{

	function __contruct(){
		parent::__contruct();
	}

	function get_all(){
		return $this->read('questions',array('*'),null);
	}

	function get($id){

		return $this->read('questions', array('*'), array('id'=>$id));
	}
}
 ?>