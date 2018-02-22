/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name : { type: 'string' },

    sid : { type: 'string'},

    email : { type: 'string'},
    
    number : { type: 'string'},

    country : { type: 'string'},

    subscription_id : { type: 'string'},

    subscription_start : { type: 'string'},

    subscription_end : { type: 'string'},

    image_url : { type: 'string' },

    type : { type: 'string' },

    subscription_status : { type: 'string' },

    did : { type: 'string'}

  },
  
  add :  function(data, cb) {

      var arr = [ {'number': data.number } ];
      
    
  		User.findOne({ $or : arr }, function(err, userData) {
        
        if(!err && userData){
          
          
          if( data.number == userData.number ){

          //cb({"message" : "number already exist"});
           cb(null, userData);

          } 

     
    		}  

        else if(userData==undefined){
  				
           User.create(data, function(err, userData){
    							cb(err, userData);
    						});
      				
  			}
      else{
  				cb(err);
  			}

  		});
  },
};

