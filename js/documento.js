
	/*
	readyState
	0 => request sin iniciar
	1 => conexion establecida
	2 => request recibido
	3 => procensando request
	4 => request finalizado y la respuesta esta lista
	*/
	  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  //se desactivo porque no enviamos cadena de texto
	 	  // xhr.open("GET","php/documento.php",true);
	 	  // xhr.onreadystatechange = function () {
	 	  // 	//se onreadystatechange => se queda en espera mientras la funcion tenga exito o falle
	 	  // 	if(xhr.readyState === 4 && xhr.status === 200){
	 	  // 		var re = xhr.responseText;
	 	  // 		var doc = JSON.parse(re);
	 	  // 		console.log(doc[0]["persona"]);	
	 	  // 	}
	 	  // }
	 	  // xhr.send();
	//const xhr = new XMLHttpRequest();

	// const promise = new Promise(function (resolve,reject){
	// 	reject(new Error("se produjo un error"));
	// });

	// promise.then(() => {

	// }).catch((err) => {
	// 	return err;
	// })

	function get(url){
		return new Promise((resolve,reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function (){
				const done = 4;
				const ok = 200;

				if(this.readyState === done){
					if(this.status === ok){
						resolve(JSON.parse(this.responseText));
					}else{
						reject(new Error("se produjo un error"));
					}
				}
				
			};
			xhr.open("GET",url,true);
			xhr.send(null);
		});
	}

	function handleError(err){
		console.log(`resquest failed ${err}`);
	}

	let luke;
	get("php/documento.php").then((response)=>{
		
		console.log(response[0]["persona"]);
		console.log(response[1]["persona"]);
		//return get(luke.homeworld); //envio la url que esta en homeworld
	}).catch(err => handleError(err))

	
