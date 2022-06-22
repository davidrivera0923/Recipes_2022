function getData(){
	fetch('http://localhost:5000/get_data')
			.then( response => response.json() )
			.then( data => console.log(data) )
}
// Prints out { message : "Hello World" }
getData();