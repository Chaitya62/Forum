<?php 

require_once(__DIR__.'/../model/QuestionModel.php');
require_once(__DIR__.'/../model/AnswerModel.php');
require_once(__DIR__.'/../model/UpvoteAuditModel.php');
require_once(__DIR__.'/../model/UserModel.php');

class Feeds{

	function __construct(){
		//echo 'user controller CLASS CREATED '."<br />";
		$this->question_model=new QuestionModel();
		$this->user_model = new UserModel();
		$this->answer_model=new AnswerModel();
		$this->upvote_model=new UpvoteAuditModel();

	}
	function get_get(){
		$data=array();
		$questions=$this->question_model->getAll();
		for ($i=0; $i < count($questions); $i++) { 
		    $data[$i]['question_id'] = $questions[$i]['id'];
		    $data[$i]['question'] = $questions[$i]['question_header'];
		    $data[$i]['description'] = $questions[$i]['description'];
		    $data[$i]['user']=$this->user_model->get_username_by_id($questions[$i]['user_id']);
		    $data[$i]['likes']=0;
		    $data[$i]['upvotes']=0;
		    $data[$i]['views']=0;
		    $data[$i]['answers']=$this->answer_model->get_answers_count($questions[$i]['id']);
		}
		echo json_encode($data);
	}
}

 ?>