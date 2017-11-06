<?php 

require_once(__DIR__.'/../model/AnswerModel.php');
require_once(__DIR__.'/../model/UpvoteAuditModel.php');
require_once(__DIR__.'/../model/UserModel.php');

class Answer{

	function __construct(){
		// echo 'Answer controller CLASS CREATED '."<br />";
		$this->model=new AnswerModel();
		$this->upvote_model=new UpvoteAuditModel();
		$this->user_model = new UserModel();
	}
	//localhost/forum/index.php/Answer/get/'question_id'/'user_id'
	function get_get($question_id,$user_id){

		$result=$this->model->get_all_for_question($question_id);
		for ($i=0; $i < count($result); $i++) { 
			$user = $this->user_model->get_username_by_id($result[$i]['user_id']);
			$result[$i]['user'] = $user;
			if($this->upvote_model->check_if_upvoted($user_id,$result[$i]['id']))
				$result[$i]['isLiked'] = true;
			else 
				$result[$i]['isLiked'] = false;	
			$data = array();
	

		 	

		}				
			echo json_encode($result);
	}

	function add_post(){
		$data=array();
		$data['user_id']=$_POST['user_id'];
		$data['question_id']=$_POST['question_id'];
		$data['answer']=$_POST['answer'];
		
		$result = $this->model->add_answer($data);

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
			$response['status']='success';
			$response['message']='upvoted';
		}
		echo json_encode($response);
	}




}

 ?>