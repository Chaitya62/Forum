<?php 

require_once(__DIR__.'/../core/CJ_Model.php');

class AnswerModel extends CJ_Model{

	function __contruct(){
		parent::__contruct();
	}

	function get_by_id($id){
		return $this->read('answers', array('*'), array('id'=>$id));
	}

	function get_all_for_question($question_id){
		return $this->read('answers',array('*'),array('question_id'=>$question_id));
	}
	function get_answers_count($question_id){
		return count($this->read('answers',array('*'),array('question_id'=>$question_id)));
	}
	function add_answer($data){
		$this->create('answers',$data);
	}
	function upvote($answer_id){
		$whereArgs=array('id'=>$answer_id);
		$cur=$this->read('answers',array('upvotes'),$whereArgs);
		$curUpvote=$cur[0]['upvotes'];
		$this->update('answers',array('upvotes'=>$curUpvote+1),$whereArgs);
	}
	function unupvote($answer_id){
		$whereArgs=array('id'=>$answer_id);
		$cur=$this->read('answers',array('upvotes'),$whereArgs);
		$curUpvote=$cur[0]['upvotes'];
		$this->update('answers',array('upvotes'=>$curUpvote-1),$whereArgs);	
	}

}
?>