<?php 

require_once(__DIR__.'/../core/CJ_Model.php');

class UpvoteAuditModel extends CJ_Model{

	function __contruct(){
		parent::__contruct();
	}
	function add($userid,$answerid){
		$data=array();
		$data['answer_id']=$answerid;
		$data['user_id']=$userid;
		$this->create('upvote_audit',$data);
	}
	function check_if_upvoted($userid,$answerid){
		$result=$this->read('upvote_audit',array('*'),array('user_id'=>$userid,'answer_id'=>$answerid));
		if(count($result)>0)
			return true;
		return false;
	}
	function get_by_userid($userid){
		return $this->read('upvote_audit',array('answer_id'),array('user_id'=>$userid));
	}
	
}
 ?>