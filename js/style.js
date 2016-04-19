jQuery(document).ready(function(){
	
	jQuery("#Firstname").blur(function() {
		if(jQuery(this).val().length == 0 ) {
			jQuery("#valTest .soft").hide();
			jQuery("#valTest .error").show();
		}
		jQuery("#Firstname").focus(function() {
			jQuery("#valTest .error").hide();
			jQuery("#valTest .soft").show();
		});
	});
});