
function power(){
		if (pow.value == "ON") {
			pow.value= "OFF";
			show.value = "0";
			

		}
		else if(pow.value == "OFF"){
			pow.value = "ON";
			display.value = "";
			show.value= "";
		}
	}
	function onMe() {
		if (pow.value=="ON" && display.value== ""){
			show.value= "Press on button";
			return true;
		}
		else{
			return false;
		}
	}
	function key(a) {
		if (!onMe()) {
			if (pow.value== "OFF" && display.value== "0"){
			display.value=a;                                               
			show.value= "0";

		}
		else {
			display.value += a;
			show.value= "0";
		}
	}  
		

	}
	function dd(){
		if (!onMe()) {
			display.value= "";
			show.value= "0";
		
        }
 
	}
	function dk(){
		if (!onMe()) {
			display.value= display.value.slice(0, display.value.length -1,);
		}
}
	var operat;
	function opera(t){
		if (!onMe()){
			display.value= "";
				show.value=t;
				operat=t;
		}

}
	function kk(){
		if (!onMe()){
			show.value= Math.sqrt(display.value);
		}

}
	function ff(){
		if (!onMe()) {
			show.value=display.value * display.value;
		}
			                              
		}

	function dc(){
		if (!onMe()){
			show.value= display.value/100;
			display.value= display.value+ '%';
		}

	}
	function equals(){
		if (!onMe()){
          let a= display.value;
          if (operat=='Sin') {
			show.value= Math.sin(a * 3.142/180);
			display.value= 'Sin' + a;
		

		}
		else if (operat=='Cos') {
			show.value= Math.cos(a * 3.142/180);
			display.value= 'Cos' + a;

		}
		else if (operat=='Tan'){
			show.value= Math.tan(a * 3.142/180);
			display.value= 'Tan' + a;


 	
		}
		else if (operat=='Sinh'){
			show.value= Math.sinh(a);
			display.value= 'Sinh' + a;



		}
		else if (operat=='Cosh'){
			show.value= Math.cosh(a);
			display.value= 'Cosh' + a;



		}
		else if (operat=='Tanh'){
			show.value= Math.tanh(a);
			display.value= 'Tanh' + a;



		}
		else if (operat=='log'){
			show.value= Math.log(a);
			display.value= 'log' + a;



		}
		
        else {
			show.value= eval(a);
		}
		operat ="";
	}
}



			
		
	
