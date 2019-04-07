const mongoose = require('mongoose');
const mongooseValidationErrorTransform = require('mongoose-validation-error-transform');


mongoose.plugin(mongooseValidationErrorTransform, {
	 
	  //
	  // these are the default options you can override
	  // (you don't need to specify this object otherwise)
	  //
	 
	  // should we capitalize the first letter of the message?
	  capitalize: true,
	 
	  // should we convert `full_name` => `Full name`?
	  humanize: true,
	 
	  // how should we join together multiple validation errors?
	  transform: function(messages) {
	    return messages.join(', ');	
	  }
	 
	});