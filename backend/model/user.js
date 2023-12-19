import mongoose from "mongoose"

const  {Schema} = mongoose;

const UserSchema = new Schema({
    firstname : {
        type:String,
        required:false
    },

    lastname : {
        type:String,
        required:false
    },

    email :{
        type : String,
        required : false
    },
    
    password :{
        type : String,
        required : false
    }
    

});
const user = mongoose.model('users', UserSchema);

export default user;
