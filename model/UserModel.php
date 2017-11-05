<?php 

require_once(__DIR__.'/../core/CJ_Model.php');

class UserModel extends CJ_Model{

	function __contruct(){
		parent::__contruct();
	}

	function get_all(){
		return $this->read('users',array('*'),null);
	}

	function does_user_exist($data){
		return $this->read('users',array('*'), $data);
	}

	function get_by_username($username){
		return $this->read('users', array('*'), array('username'=>$username));
	}

	function get_username_by_id($id){
		$result = $this->get($id);
		return $result[0]['username'];
	}

	function get($id){

		return $this->read('users', array('*'), array('id'=>$id));
	}
	function add_user($data){
		$this->create('users',$data);
	}
	
}
 ?>