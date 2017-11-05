<?php 

require_once(__DIR__.'/../model/AnswerModel.php');
require_once(__DIR__.'/../model/UpvoteAuditModel.php');

class Answer{

	function __construct(){
		// echo 'Answer controller CLASS CREATED '."<br />";
		$this->model=new AnswerModel();
		$this->upvote_model=new UpvoteAuditModel();
	}
	//localhost/forum/index.php/Question/get/'question_id'/'user_id'
	function getByQuestionId_get($question_id,$user_id){

		$result=$this->model->get_all_for_question($question_id);
		for ($i=0; $i < count($result); $i++) { 
			if($this->upvote_model->check_if_upvoted($user_id,$result[$i]['id']))
				$result[$i]['isUpvoted']=true;
			else 
				$result[$i]['isUpvoted']=false;		

		}				
			echo json_encode($result);
	}

	function add_post(){
		$data=array();
		$data['user_id']=$_POST['user_id'];
		$data['question_id']=$_POST['question_id'];
		$data['answer']=$_POST['answer'];
		$this->model->add_answer($data);
		echo json_encode(array('status'=>'success'));
	}
	function upvote_post(){
		$userid=$_POST['user_id'];
		$answerid=$_POST['answer_id'];
		$response=array();
		if($this->upvote_model->check_if_upvoted($userid,$answerid)){
			$response['status']='failure';
			$response['message']='Already upvoted';
		}else{
			$this->model->upvote($answerid);
			$this->upvote_model->add($userid,$answerid);
			$response['status']='succcess';
			$response['message']='upvoted';
		}
		echo json_encode($response);
	}
}

 ?>