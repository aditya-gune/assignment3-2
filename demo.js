// JavaScript Document
var OriginalGistList = [];
var gistsArray = [];
var fetchData = function(){
	var req = new XMLHttpRequest();
	var url = 'https://api.github.com/gists/public';
	req.onreadystatechange = function(){ 
		if(this.readyState === 4){
			OriginalGistList = JSON.parse(this.responseText)
			var params = {
		 url: 'url',
		forks_url: 'forks_url',
		commits_url: 'commits_url',
		id: 'id',
		git_pull_url: 'git_pull_url',
		git_push_url: 'git_push_url',
		html_url: 'html_url',
		files: 'files',
		public: 'public',
		created_at: 'created_at',
		updated_at: 'updated_at',
		description: 'description',
		comments: 'comments',
		user: 'user',
		comments_url: 'comments_url'
		
	};
			
				createGistList(document.getElementById('gists'),
							 OriginalGistList);
		
		}

};
	req.open('GET', url);
	req.send();
}

function createGistList(ul, OriginalGistList) {
	for (var i = ul.childNodes.length - 1; i >= 0; i--) {
		ul.removeChild(ul.childNodes[i]);
	}
	OriginalGistList.forEach(function(s) {
		for (var i = 0; i < OriginalGistList.length; i++)
			{
		var li = document.createElement('li');
		li.innerText = 'URL: ' 
		li.innerHTML = OriginalGistList[i].url;
		ul.appendChild(li);
			}
	});
}
