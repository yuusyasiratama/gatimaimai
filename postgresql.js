var pg = require('pg'); 
var http = require('http');

var conString = "tcp://postgres:password@localhost:5432/postgres";

function doRequest(request, response) {
    var client = new pg.Client(conString);
    client.connect(function(err) {
	    if(err) {
	        return console.error('could not connect to postgres', err);
	    }
	    client.query("insert into users(name) values('haruka');", function(err, result) {



	        if(err) {
	            return console.error('error running query', err);
	        }

		    client.query('SELECT * from users;', function(err, result) {

		        if(err) {
		            return console.error('error running query', err);
		        }
		        console.log(result.rows);
		        client.end();
		   });


         });
    });
};
doRequest()
