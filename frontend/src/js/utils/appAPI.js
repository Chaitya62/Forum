var AppActions = require('../actions/AppActions');


module.exports = {
	

	 "get_data" : function(url, params, protocol){

	 	function work(resolve, reject){

			var httpx = new XMLHttpRequest();
			httpx.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					resolve(this.response, null);
				}
			}
			httpx.onerror = reject;
			httpx.open(protocol, url, true);
			httpx.send(params);
		}

		return new Promise(work);
	}


}