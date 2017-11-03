import AppConstants  from '../constants/AppConstants';
var AppActions = require('../actions/AppActions');



module.exports = {
	

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
		
		console.log(username);
		var params = "username="+username.value+"&password="+password.value;
		console.log(params);
		var self = this;
		function work(resolve, reject){
			return self.get_data(AppConstants.LOGIN_URL, params , 'post', true).then((response)=>{
				console.log(response);
				var data = JSON.parse(response);
				if(data.login=='failure'){
					resolve(false);
				}else{
					resolve(true);
				}
			}).catch(reject);
		}

		return new Promise(work);		
	}


}