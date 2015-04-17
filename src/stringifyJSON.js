// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // NULL
  if (obj === null) {
  	return obj + "";
  }
  // ARRAY
  if (Array.isArray(obj)) {
  	var result = [];
  	for (var i = 0; i < obj.length; i++) {
  		result.push(stringifyJSON(obj[i]));
  	}
  	return '[' + result + ']';
  }
  // OBJECT
  if (!Array.isArray(obj) && typeof(obj)==='object') {
  	var result = {};
  	var output = "";
  	  if (Object.getOwnPropertyNames(obj).length === 0){
        return '{}';
	  } else {
	  	for (var prop in obj) {
	  		if (typeof(obj[prop]) === 'function') {
              return '{}';
	  		} else {
	  		  output += stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]);
	  		  output += ",";
	  		}
	  	}
	  }
	  return "{" + output.substring(0, output.length - 1) + "}";
  }
  // STRING
  if (typeof(obj) === "string") {
  	return '"' + obj + '"';
  }
  // NUMBERS AND BOOLEANS
  if (!Array.isArray(obj)) {
  	return obj + "";
  }
};
