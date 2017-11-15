$document.ready(function() {
	const twitterArea = $('#twitter-area')

	const reload = () => {
		$("button").click(function(){
		    $.ajax({
		    	method : "GET",
		    	url: "http://localhost:3000/users/timeline", 
		    	success: function(result){
		    		console.log(result)
		        	twitterArea.html(result);
		    	}
			});
		});
	}

	const parsing = (tweets)=> {
		let tweet = JSON.parse(tweets)

		tweet.forEach(text => {
			console.log(text)
		})
	}

})

