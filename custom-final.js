(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {

// week 1 variables
 var week1_total = 0;
 var week1 = 0;
 var week1_addon = 0;
 var week1_ultimate = 0;


// week 2 variables
 var week2_total = 0;
 var week2 = 0;
 var week2_addon = 0;
 var week2_ultimate = 0;

// week 3 variables
 var week3_total = 0;
 var week3 = 0;
 //var week3_addon = 0;
 var week3_ultimate = 0;


// Extra people camping
 var total_people_cost = 0;
 var no_people = 0;
 var no_nights = 0;



// Grand Total

var  grand_total = 0;




















// All form reset
$('form').each(function() { this.reset() });


// check if the value is present

if ( $('#edit-field-fb-wk1-unlimited-und-360').is(":checked") ) {
	var lbl = $('label[for=edit-field-fb-wk1-unlimited-und-360]').text();
			var lbl_first_word = lbl.split(' ')[0];
		 
			var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
			week1 = 0; 
			week1_ultimate = week1_ultimate + number;
	
			console.log(week1_ultimate);week1_total_func();
	//alert("checked");
}
else {
	//alert("not checked");

}









// =week1 start
 
    //code starts Circus Fun with Captain Fatso $120 - 10am - 11am
    $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-circusfun-und-120-10am-11am]').text();
		//var number = Number(lbl.replace(/[^0-9\.]+/g,""));
 
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 + number;
	
		console.log(week1);week1_total_func();
	
	 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', true).addClass('display-none');
	 
	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-circusfun-und-120-10am-11am]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 - number;
	
		console.log(week1);week1_total_func();

	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 

         }

	//toggle fields
	 
//	$("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").toggleClass('display-none').attr('disabled', !$(this).attr('checked')); 
	//$("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").attr("disabled", true); 
	// $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").attr("disabled", true);
    
});    //code ends


    //code starts Circus Fun with Captain Fatso  $120 - 11am - 12pm
    $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-circusfun-und-120-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 + number;
	
		console.log(week1);week1_total_func();
	$("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', true).addClass('display-none'); 
	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-circusfun-und-120-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 - number;
	
		console.log(week1);week1_total_func();
         $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none');  
         }

	//toggle fields
	 



    
});    //code ends

    //Junior Silks and Trapeze  $80 - 10am - 11am
    $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-juniorsilks-und-80-10am-11am]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 + number;
	
		console.log(week1);week1_total_func();
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', true).addClass('display-none'); 

	
	
	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-juniorsilks-und-80-10am-11am]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 - number;
	
		console.log(week1);week1_total_func();

         $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none');  
         }

	


    
});    //code ends

    //Junior Silks and Trapeze $80 - 11am - 12pm
    $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-juniorsilks-und-80-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 + number;
	
		console.log(week1);week1_total_func();
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', true).addClass('display-none'); 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-juniorsilks-und-80-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1 = week1 - number;
	
		console.log(week1);week1_total_func();
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
         }

	


    
});    //code ends

 
//



 // Unlimited  $360 week1 
    $("#edit-field-fb-wk1-unlimited-und-360").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-unlimited-und-360").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-unlimited-und-360]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week1 = 0; 
		week1_ultimate = week1_ultimate + number;
	
		console.log(week1_ultimate);week1_total_func();
	//disable all week 1 checkboxes
	 $("#edit-field-fb-wk1-unlimitedres-und-550").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-unlimited-und-360]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		
		week1_ultimate = week1_ultimate - number;
	
		console.log(week1_ultimate);week1_total_func();
 
	// Enable all week1 checkboxes
	 $("#edit-field-fb-wk1-unlimitedres-und-550").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none');  

         }

	


    
});    //code ends



 // Unlimited Residential $550 week1
    $("#edit-field-fb-wk1-unlimitedres-und-550").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-unlimitedres-und-550").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-unlimitedres-und-550]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week1 = 0; 
		week1_ultimate = week1_ultimate + number;
	
		console.log(week1_ultimate);week1_total_func();
 
	//disable all week 1 checkboxes
	 $("#edit-field-fb-wk1-unlimited-und-360").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 



	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-unlimitedres-und-550]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_ultimate = week1_ultimate - number;
	
		console.log(week1_ultimate);week1_total_func();
 
	// Enable all week1 checkboxes
	 $("#edit-field-fb-wk1-unlimited-und-360").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk1-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none');  
         }

	


    
});    //code ends


// week 1 Add on start here


 // Ulimate Circus Fun  $140
    $("#edit-field-fb-wk1-ultimate-fun-und-140").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-ultimate-fun-und-140").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-ultimate-fun-und-140]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-ultimate-fun-und-140]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


 // Flying Trapeze One Day Class  $50
    $("#edit-field-fb-wk1-flying-trapeze-und-50").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-flying-trapeze-und-50").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-flying-trapeze-und-50]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-flying-trapeze-und-50]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//Specialty Classes week 1

//  $150 - Tumbling
    $("#edit-field-fb-wk1-specialty-classes-und-150-tumbling").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-tumbling").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-tumbling]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-tumbling]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends



//  $150 - Acrobalance
    $("#edit-field-fb-wk1-specialty-classes-und-150-acrobalance").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-acrobalance").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-acrobalance]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-acrobalance]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//   $150 - Cloudswing
    $("#edit-field-fb-wk1-specialty-classes-und-150-cloudswing").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-cloudswing").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-cloudswing]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-cloudswing]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//   $150 - Mini Tramp
    $("#edit-field-fb-wk1-specialty-classes-und-150-mini-tramp").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-mini-tramp").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-mini-tramp]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-mini-tramp]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends




//   $150 - Juggling/Diablolo
    $("#edit-field-fb-wk1-specialty-classes-und-150-jugglingdiablolo").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-jugglingdiablolo").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-jugglingdiablolo]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-jugglingdiablolo]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//    $150 - Static Trapeze
    $("#edit-field-fb-wk1-specialty-classes-und-150-static-trapeze").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-static-trapeze").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-static-trapeze]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-static-trapeze]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends

//     $150 - Chinese Pole
    $("#edit-field-fb-wk1-specialty-classes-und-150-chinese-pole").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-chinese-pole").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-chinese-pole]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-chinese-pole]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//    $150 - Handbalance & conditioning
    $("#edit-field-fb-wk1-specialty-classes-und-150-handbalance-conditioning").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-handbalance-conditioning").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-handbalance-conditioning]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-handbalance-conditioning]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//     $150 - Unicycle
    $("#edit-field-fb-wk1-specialty-classes-und-150-unicycle").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-unicycle").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-unicycle]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-unicycle]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//     $150 - Silks
    $("#edit-field-fb-wk1-specialty-classes-und-150-silks").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-silks").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-silks]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-silks]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends


//   $150 - Teeterboard
    $("#edit-field-fb-wk1-specialty-classes-und-150-teeterboard").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-teeterboard").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-teeterboard]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-teeterboard]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends



//   $150 - Contortion
    $("#edit-field-fb-wk1-specialty-classes-und-150-contortion").click(function() {
	 	 

	 if( $("#edit-field-fb-wk1-specialty-classes-und-150-contortion").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-contortion]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon + number;
	
		console.log(week1_addon);week1_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk1-specialty-classes-und-150-contortion]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week1_addon = week1_addon - number;
	
		console.log(week1_addon);week1_total_func();
	  
         }
 
    
});    //code ends

function week1_total_func(){

  week1_total =   week1 +  week1_addon + week1_ultimate ;

console.log("Your week 1 total is :"+week1_total);
 g_total();
$('#edit-field-fb-wk1-total-und-0-value').val(week1_total);

 
 


}

// week 1 Add on end here

// =week1 ends










// =week2 ----------------Start-------------------



 // code starts Circus Fun with Captain Fatso $120 - 10am - 11am
    $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-circusfun-und-120-10am-11am]').text();
		 
 
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 + number;
	
		console.log(week2);week2_total_func();
	
	 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', true).addClass('display-none');
	 
	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-circusfun-und-120-10am-11am]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 - number;
	
		console.log(week2);week2_total_func();

	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 

         }

 
    
});    //code ends


    //code starts Circus Fun with Captain Fatso  $120 - 11am - 12pm
    $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-circusfun-und-120-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 + number;
	
		console.log(week2);week2_total_func();
	$("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', true).addClass('display-none'); 
	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-circusfun-und-120-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 - number;
	
		console.log(week2);week2_total_func();
         $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none');  
         }

	//toggle fields
	 



    
});    //code ends

    //Junior Silks and Trapeze  $80 - 10am - 11am
    $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-juniorsilks-und-80-10am-11am]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 + number;
	
		console.log(week2);week2_total_func();
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', true).addClass('display-none'); 

	
	
	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-juniorsilks-und-80-10am-11am]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 - number;
	
		console.log(week2);week2_total_func();

         $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none');  
         }

	


    
});    //code ends

    //Junior Silks and Trapeze $80 - 11am - 12pm
    $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-juniorsilks-und-80-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 + number;
	
		console.log(week2);week2_total_func();
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', true).addClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', true).addClass('display-none'); 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-juniorsilks-und-80-11am-12pm]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2 = week2 - number;
	
		console.log(week2);week2_total_func();
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
         }

	


    
});    //code ends

 
//



 // Unlimited  $360 week2 
    $("#edit-field-fb-wk2-unlimited-und-360").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-unlimited-und-360").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-unlimited-und-360]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week2 = 0; 
		week2_ultimate = week2_ultimate + number;
	
		console.log(week2_ultimate);week2_total_func();
	//disable all week 2 checkboxes
	 $("#edit-field-fb-wk2-unlimitedres-und-550").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-unlimited-und-360]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		
		week2_ultimate = week2_ultimate - number;
	
		console.log(week2_ultimate);week2_total_func();
 
	// Enable all week2 checkboxes
	 $("#edit-field-fb-wk2-unlimitedres-und-550").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none');  

         }

	 


    
});    //code ends



 // Unlimited Residential $550 week2
    $("#edit-field-fb-wk2-unlimitedres-und-550").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-unlimitedres-und-550").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-unlimitedres-und-550]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week2 = 0; 
		week2_ultimate = week2_ultimate + number;
	
		console.log(week2_ultimate);week2_total_func();
 
	//disable all week 2 checkboxes
	 $("#edit-field-fb-wk2-unlimited-und-360").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', true).prop('checked', false).addClass('display-none'); 



	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-unlimitedres-und-550]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_ultimate = week2_ultimate - number;
	
		console.log(week2_ultimate);week2_total_func();
 
	// Enable all week1 checkboxes
	 $("#edit-field-fb-wk2-unlimited-und-360").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-circusfun-und-120-11am-12pm").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-10am-11am").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk2-juniorsilks-und-80-11am-12pm").prop('disabled', false).removeClass('display-none');  
         }

	


    
});    //code ends


// week 2 Add on start here


 // Ulimate Circus Fun  $140
    $("#edit-field-fb-wk2-ultimate-fun-und-140").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-ultimate-fun-und-140").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-ultimate-fun-und-140]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-ultimate-fun-und-140]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


 // Flying Trapeze One Day Class  $50
    $("#edit-field-fb-wk2-flying-trapeze-und-50").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-flying-trapeze-und-50").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-flying-trapeze-und-50]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-flying-trapeze-und-50]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//Specialty Classes week 2

//  $150 - Tumbling
    $("#edit-field-fb-wk2-specialty-classes-und-150-tumbling").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-tumbling").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-tumbling]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-tumbling]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends



//  $150 - Acrobalance
    $("#edit-field-fb-wk2-specialty-classes-und-150-acrobalance").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-acrobalance").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-acrobalance]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-acrobalance]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//   $150 - Cloudswing
    $("#edit-field-fb-wk2-specialty-classes-und-150-cloudswing").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-cloudswing").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-cloudswing]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-cloudswing]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//   $150 - Mini Tramp
    $("#edit-field-fb-wk2-specialty-classes-und-150-mini-tramp").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-mini-tramp").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-mini-tramp]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-mini-tramp]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends




//   $150 - Juggling/Diablolo
    $("#edit-field-fb-wk2-specialty-classes-und-150-jugglingdiablolo").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-jugglingdiablolo").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-jugglingdiablolo]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-jugglingdiablolo]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//    $150 - Static Trapeze
    $("#edit-field-fb-wk2-specialty-classes-und-150-static-trapeze").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-static-trapeze").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-static-trapeze]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-static-trapeze]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends

//     $150 - Chinese Pole
    $("#edit-field-fb-wk2-specialty-classes-und-150-chinese-pole").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-chinese-pole").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-chinese-pole]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-chinese-pole]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//    $150 - Handbalance & conditioning
    $("#edit-field-fb-wk2-specialty-classes-und-150-handbalance-conditioning").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-handbalance-conditioning").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-handbalance-conditioning]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-handbalance-conditioning]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//     $150 - Unicycle
    $("#edit-field-fb-wk2-specialty-classes-und-150-unicycle").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-unicycle").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-unicycle]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-unicycle]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//     $150 - Silks
    $("#edit-field-fb-wk2-specialty-classes-und-150-silks").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-silks").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-silks]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-silks]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends


//   $150 - Teeterboard
    $("#edit-field-fb-wk2-specialty-classes-und-150-teeterboard").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-teeterboard").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-teeterboard]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-teeterboard]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends



//   $150 - Contortion
    $("#edit-field-fb-wk2-specialty-classes-und-150-contortion").click(function() {
	 	 

	 if( $("#edit-field-fb-wk2-specialty-classes-und-150-contortion").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-contortion]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon + number;
	
		console.log(week2_addon);week2_total_func();
	 


	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk2-specialty-classes-und-150-contortion]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week2_addon = week2_addon - number;
	
		console.log(week2_addon);week2_total_func();
	  
         }
 
    
});    //code ends

function week2_total_func(){

  week2_total =   week2 +  week2_addon + week2_ultimate ;

console.log("Your week 2 total is :"+week2_total);
 g_total();
$('#edit-field-fb-wk2-total-und-0-value').val(week2_total);
 
 

}

// week 2 Add on end here








// =week 2 -----------------End-------------------- 


// =week3  -----------------Start-------------------- 




// Early bird Festival Training Only  $450
    $("#edit-field-fb-wk3-eb-train-only-und-450").click(function() {
	 	 

	 if( $("#edit-field-fb-wk3-eb-train-only-und-450").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk3-eb-train-only-und-450]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week3 = 0; 
		week3_ultimate = week3_ultimate + number;
	
		console.log(week3_ultimate);week3_total_func();
 
	//disable all week 3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-meal-und-610").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-train-only-und-600").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-train-meal-und-760").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 



	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk3-eb-train-only-und-450]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week3_ultimate = week3_ultimate - number;
	
		console.log(week3_ultimate);week3_total_func();
 
	// Enable all week3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-meal-und-610").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-train-only-und-600").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-train-meal-und-760").prop('disabled', false).removeClass('display-none'); 
 

         }

	


    
});    //code ends


// Early bird Festival Training + all meals  $610
    $("#edit-field-fb-wk3-eb-train-meal-und-610").click(function() {
	 	 

	 if( $("#edit-field-fb-wk3-eb-train-meal-und-610").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk3-eb-train-meal-und-610]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week3 = 0; 
		week3_ultimate = week3_ultimate + number;
	
		console.log(week3_ultimate);week3_total_func();
 
	//disable all week 3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-only-und-450").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-train-only-und-600").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-train-meal-und-760").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 



	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk3-eb-train-meal-und-610]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week3_ultimate = week3_ultimate - number;
	
		console.log(week3_ultimate);week3_total_func();
 
	// Enable all week3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-only-und-450").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-train-only-und-600").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-train-meal-und-760").prop('disabled', false).removeClass('display-none'); 
 

         }

	


    
});    //code ends






//   Festival Training Only  $600
    $("#edit-field-fb-wk3-train-only-und-600").click(function() {
	 	 

	 if( $("#edit-field-fb-wk3-train-only-und-600").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk3-train-only-und-600]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week3 = 0; 
		week3_ultimate = week3_ultimate + number;
	
		console.log(week3_ultimate);week3_total_func();
 
	//disable all week 3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-meal-und-610").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-eb-train-only-und-450").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-train-meal-und-760").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 



	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk3-train-only-und-600]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week3_ultimate = week3_ultimate - number;
	
		console.log(week3_ultimate);week3_total_func();
 
	// Enable all week3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-meal-und-610").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-eb-train-only-und-450").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-train-meal-und-760").prop('disabled', false).removeClass('display-none'); 
 

         }

	


    
});    //code ends


//   Festival Training + all meals  $760
    $("#edit-field-fb-wk3-train-meal-und-760").click(function() {
	 	 

	 if( $("#edit-field-fb-wk3-train-meal-und-760").is(":checked") ) {

		var lbl = $('label[for=edit-field-fb-wk3-train-meal-und-760]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		week3 = 0; 
		week3_ultimate = week3_ultimate + number;
	
		console.log(week3_ultimate);week3_total_func();
 
	//disable all week 3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-meal-und-610").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-eb-train-only-und-450").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 $("#edit-field-fb-wk3-train-only-und-600").prop('disabled', true).prop('checked', false).addClass('display-none'); 
	 



	}
       
	 else {
		var lbl = $('label[for=edit-field-fb-wk3-train-meal-und-760]').text();
		var lbl_first_word = lbl.split(' ')[0];
	 
		var number =  Number(lbl_first_word.replace(/[^0-9\.]+/g,""));
		 
		week3_ultimate = week3_ultimate - number;
	
		console.log(week3_ultimate);week3_total_func();
 
	// Enable all week3 checkboxes
	 $("#edit-field-fb-wk3-eb-train-meal-und-610").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-eb-train-only-und-450").prop('disabled', false).removeClass('display-none'); 
	 $("#edit-field-fb-wk3-train-only-und-600").prop('disabled', false).removeClass('display-none'); 
 

         }

	


    
});    //code ends

function week3_total_func(){

  week3_total =   week3 + week3_ultimate ;

console.log("Your week 3 total is :"+week3_total);
 g_total();
$('#edit-field-fb-wk3-total-und-0-value').val(week3_total);
 
 
return week3_total;
}






// =week3 -----------------End-------------------- 


// =extra people ----------start -----


$("#edit-field-fb-camping-people-und").change(function () {
  var str = "";

  $("#edit-field-fb-camping-people-und option:selected").each(function () {
            str += $(this).text();
  });
       
    if(isNaN(str)) {
	 
	 no_people = 0;
	}
	else {
	 no_people = parseInt(str);
	}
extra_people_camping();

})
.change();


$("#edit-field-fb-camping-nights-und").change(function () {
  var str = "";

  $("#edit-field-fb-camping-nights-und option:selected").each(function () {
            str += $(this).text();
  });

if(isNaN(str)) {
	 
	 no_nights = 0;
	}
	else {
	 no_nights = parseInt(str);
	}
    
extra_people_camping();
})
.change();

  

function extra_people_camping() {


 total_people_cost = 10 * no_people * no_nights;

console.log("Extra people total is :"+total_people_cost);

 g_total();

$('#edit-field-fb-camping-cost-und-0-value').val(total_people_cost);



 



} 

function g_total(){
	grand_total =  week1_total+ week2_total + week3_total +  total_people_cost;
 console.log("gtotal" + grand_total);
$('#edit-field-fb-grand-total-und-0-value').val(grand_total);
}


// =extra people end




// =grandtotal start
/*

function grand_total(){

	// grand_total =  week1_total+ week2_total + week3_total;

	//$('#edit-field-fb-grand-total-und-0-value').val(grand_total);
console.log("g");
}
*/

// =grandtotal end



// show row weight are now disabled
$('#field-fb-phone-numbers-add-more-wrapper .tabledrag-toggle-weight-wrapper').hide();

$('#field-fb-email-add-more-wrapper .tabledrag-toggle-weight-wrapper').hide();

$('#node_festival_booking_form_group_registrant_info .handle').hide();

// week 1 total
$('#edit-field-fb-wk1-total-und-0-value').attr('readonly','readonly');

// week 2 total
$('#edit-field-fb-wk2-total-und-0-value').attr('readonly','readonly');

// week 3 total
$('#edit-field-fb-wk3-total-und-0-value').attr('readonly','readonly');

// Camping cost for extra people
$('#edit-field-fb-camping-cost-und-0-value').attr('readonly','readonly');


// Grand Total
$('#edit-field-fb-grand-total-und-0-value').attr('readonly','readonly');






//end- of the behaviors
  }
};
})(jQuery);
