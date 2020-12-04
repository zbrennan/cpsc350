require ("isomorphic-fetch");

function getNutrition(foodDesc){
	return fetch(`http://35.237.191.86/api?q=${foodDesc}`).then(function(resp){
		return resp.json();
	})
}

function handleError(error){
	console.warn(error);
	return null;
};

module.exports = {
	getInfo: function(food){
		return getNutrition(food).catch(handleError);
	}
};
