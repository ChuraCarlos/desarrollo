<?php 
	$cadena = [
		["persona"=>"persona_uno"],
		["persona"=>"persona_dos"],
		["persona"=>"persona_tres"],
		["persona"=>"persona_cuatro"]];

	$json   = json_encode($cadena);

	echo $json;
?>