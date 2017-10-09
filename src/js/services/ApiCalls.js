class ApiCalls {
   fetchData(city) {
    // return a Promise object
    return new Promise((resolve, reject) => {
        let protocol =  "https://";
        let query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+ city +"')";
        query= encodeURIComponent(query);
  	    let url = protocol + "query.yahooapis.com/v1/public/yql?q="+ query +"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithke";
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function() {
            if (request.status === 200) {
                resolve(request.responseText);
            }
            else {
                reject(new Error('request failed!'));
            }
        };
        request.send();
    });
}
}

export default ApiCalls;