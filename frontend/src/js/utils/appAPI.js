var AppActions = require('../actions/AppActions');


module.exports = {
	
	 "get_data" : function(url, params, protocol,callback){
		var httpx = new XMLHttpRequest();
		httpx.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				callback(this.response, null);
			}
		}
		httpx.open(protocol, url, false);
		httpx.send(params);
	}


}