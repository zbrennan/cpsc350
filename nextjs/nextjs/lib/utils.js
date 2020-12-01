require ("isomorphic-fetch");

function getProfile(name){
	return fetch(`http://35.190.190.219/api/info?q=${name}`).then(function(resp){
		return resp.json();
	})
}

function handleError(error){
	console.warn(error);
	return null;
};

module.exports = {
	getInfo: function(campsite){
		return getProfile(campsite).catch(handleError);
	}
};
