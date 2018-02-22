/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	add : function(req, res) {

      if(!req.body.name || !req.body.email || !req.body.number || !req.body.type){
       
     return res.badRequest({ message : "missing parameters" , expectedFields : 'name, email, number, type' });
      }

      User.add(req.body, function(err, userData){
     
          if(!err){
            return res.json(userData);
          }
          else{
            //res.status(401);
            return res.json(err);
          }
       
       
      });
  },


  updatename : function(req, res) {
      
      if(!req.body)
        return res.badRequest({ message : "missing parameters"});

      User.update({ id : req.param('id') } , req.body , function(err, updatename) {
        if(!err && updatename){
          res.json(updatename[0])
        }else{
          res.json(err);
        }

      });

  },

  profile : function(req, res) {

    if(!req.param('id') )
      return res.badRequest({message : "missing parameters"});
    User.find({ id : req.param('id')  }, function(err, userData){
        if(!err) {
          res.json(userData);
        } else {
          res.negotiate(err);
        }
    });
  },

  updatedid : function(req, res) {
      
      if(!req.body)
        return res.badRequest({ message : "missing parameters"});

      User.update({ id : req.param('id') } , req.body , function(err, updatedid) {
        if(!err && updatedid){
          res.json(true)
        }else{
          res.json(err);
        }

      });

  },


  subscription : function(req, res) {

    if(!req.param('id') )
      return res.badRequest({message : "missing parameters"});
    User.find({ id : req.param('id')  }, function(err, userData){
        if(!err) {
          res.json(userData);
        } else {
          res.negotiate(err);
        }
    });
  },


updatesubscription : function(req, res) {
      
      if(!req.body)
        return res.badRequest({ message : "missing parameters"});

      User.update({ id : req.param('id') } , req.body , function(err, updatesubscription) {
        if(!err && updatesubscription){
          res.json(true)
              
        }else{
          res.json(err);
        }

      });

  },



	
};

