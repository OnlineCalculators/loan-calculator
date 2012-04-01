$(document).ready(function() {
	$(':input').change(calculator);
	
	$('.btn').click(function(){
		if(! $(this).hasClass('active'))   {
			$('.btn').removeClass('active');
			$(this).addClass('active');
			calculator();
		}
	});

	$('#calculate_btn').click(function(){calculator();});
	
});

function calculator(){
	var principal = $('#loan_amount').val();
	var interest = $('#interest').val();
	var time = $('#time').val();

	if(principal >0 && interest >0 && time >0 && time<100){
		if($('#repayment').hasClass('active')){
			$('#amount span').html(repayment_calc(principal,interest,time));
		}
		if($('#interest_only').hasClass('active')){
			$('#amount span').html(interest_only_calc(principal,interest,time));
		}
	}else{
		$('#amount span').html('');
	}
}

function repayment_calc(P,I,T){
	I = (I/100) / 12; 
	T = T * 12;
   	return (((P*I)/(1-Math.pow(1+I,(-1*T)))*100)/100).toFixed(2);
}

function interest_only_calc(P,I,T){
	return (((P*I)/12)/100).toFixed(2);
}