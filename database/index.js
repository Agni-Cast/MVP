// const mongoose = require('mongoose');
// const Schema  = mongoose.Schema;
// const bcrypt = require('bcryptjs');
// // mongoose.connect('mongodb://localhost/mvp');

// // Creating user schema
// const userSchema = mongoose.Schema({
//   name : {
//       type : String,
//       required : true
//   },
//   password : {
//     type : String,
//     required : true
//   },
//   // trips : [{
//   //   type: Schema.Types.ObjectId,
//   //   ref: "Trips"
//   // }]
// });

// // userSchema.statics.signup = async function(name, password) {
// //   const exists = await this.findOne({ name });
// //   if (exists) {
// //     throw Error('Username already in use');
// //   };

// //   const salt = await bcrypt.genSalt(10);
// //   const hash = await bcrypt.hash(password, salt);
// //   const user = await this.create( {name, password: hash});

// //   return user;
// // }

// // const TripsSchema = mongoose.Schema({
// //   user : [{
// //     type: Schema.Types.ObjectId,
// //     ref: "User"
// //   }],
// //   city : {
// //     type : String
// //   },
// //   attraction : {
// //     type : String
// //   },
// //   photo : {
// //     type : String
// //   }
// // })


// module.exports = mongoose.model('User', userSchema);
// // const Trips = module.exports = mongoose.model('Trips', TripsSchema);
