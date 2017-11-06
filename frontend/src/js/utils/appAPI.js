import AppConstants  from '../constants/AppConstants';
var AppActions = require('../actions/AppActions');



module.exports = {


	"cache_to_browser":function(key, value){
		function work(resolve, reject){
			if(typeof value != 'string'){
			value = JSON.stringify(value);
		}
			localStorage.setItem(key, value);
			resolve(true);
		}

		return new Promise(work);
	},
	"get_from_cache": function(key){

		function work(resolve, reject){
			var value = localStorage.getItem(key);
			resolve(value);
		}
		return new Promise(work);
		//will have to parse if not string 
		
	},
	"destroy_cache": function(){
		localStorage.removeItem(AppConstants.STORE);
		return;
	}
	,
	"cache_store":function(store){
		return this.cache_to_browser(AppConstants.STORE, store);
	},
	"get_store":function(){

		var self = this;
		function work(resolve, reject){
			self.get_from_cache(AppConstants.STORE).then((value)=>{
				console.log('value: ',value);
				value = JSON.parse(value);
				if(value){
					resolve(value); 
				}else{
					resolve({
						'test': 'stuff',
						'questionId': '',
						'inQuestion': false,
						'isLoggedIn': false,
						'user_id': null,
						'feeds': [],
						'question': [],
						'answers': [],
						'username': null,
					});
				}
			});
		}
		return new Promise(work);
	},
	 "get_data" : function(url, params, protocol, isForm=false){

	 	function work(resolve, reject){

			var httpx = new XMLHttpRequest();
			httpx.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					resolve(this.response, null);
				}
			}
			httpx.onerror = reject;
			httpx.open(protocol, url, true);
			if(isForm)
			httpx.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			httpx.send(params);
		}

		return new Promise(work);
	},

	"authenticate" : function(username, password){
		
		//console.log(username);
		var params = "username="+username.value+"&password="+password.value;
		//console.log(params);
		var self = this;
		function work(resolve, reject){
			return self.get_data(AppConstants.LOGIN_URL, params , 'post', true).then((response)=>{			
				console.log(response);
				var data = JSON.parse(response);
				if(data.login=='failure'){
					resolve(false);
				}else{
					resolve(data);
				}
			}).catch(reject);
		}

		return new Promise(work);		
	},

	"createUser": function(username, password, email){
		var params =  "username="+username.value
					 +"&password="+password.value
					 +"&email="+email.value;
	

		console.log("Creating user here.....");
		var self = this;
		function work(resolve, reject){
			return self.get_data(AppConstants.SIGNUP_URL, params, 'post', true).then((response)=>{
				console.log(response);
				var data = JSON.parse(response);
				console.log(data.message);
				data['success'] = (data.register !== 'failure');
				resolve(data);
			}).catch(reject);
		}
		return new Promise(work);
	},
	"loadData": function(){
		var data = localStorage.getItem('forumStore');
		data = JSON.parse(data);
		
	},
	"ask": function(qHeader, qDescription, user_id){
		var params = "question_header="+qHeader.value
					+"&description="+qDescription.value
					+"&user_id="+user_id;


		var self = this;
		console.log('asking....');
		function work(resolve, reject){
			return self.get_data(AppConstants.ASK_URL, params, 'post', true).then((response)=>{
				console.log(response);
				var data = JSON.parse(response);
				resolve(data);

			}).catch(reject);
		}

		return new Promise(work);
	},
	"get_question": function(id){
		var url = AppConstants.GET_QUESTION_URL + id;
 		var self = this;
		function work(resolve, reject){
			return self.get_data(url, null, 'get', false).then((response)=>{
				var data  = JSON.parse(response);
				resolve(data);
			}).catch(reject);
		}

		return new Promise(work);
	},
	"get_answers": function(questionId, user_id){
		var url = AppConstants.GET_ANSWERS_URL + questionId + '/' + user_id;
		var self = this;

		function work(resolve, reject){
			return self.get_data(url, null,'get', false).then((response)=>{
				var data = JSON.parse(response);
				resolve(data);
			}).catch(reject);
		}

		return new Promise(work);

	},
	"upvote": function(answerId, user_id){
		var url = AppConstants.UPVOTE_URL;
		var params = "answer_id="+answerId+"&user_id="+user_id;
		var self = this;

		function work(resolve, reject){
			return self.get_data(url, params, 'post', true).then((response)=>{
				console.log(response);
				var data = JSON.parse(response);
				resolve(data);
			}).catch(reject);
		} 

		return new Promise(work);
	},
	"answer": function(questionId, user_id, answer){
		var params = "question_id="+questionId+"&user_id="+user_id+"&answer="+answer;
	
		var self = this;

		function work(resolve, reject){
			return self.get_data(AppConstants.ANSWER_URL, params, 'post', true).then((response)=>{
		
				var data = JSON.parse(response);
				resolve(data);
			}).catch(reject);
		}


		return new Promise(work);

	}

		

}