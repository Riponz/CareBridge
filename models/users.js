import mongoose, { Schema } from "mongoose"


const userSchema = new Schema({
    name : {
        type: String,
        required  : [true]
    },
    password : {
        type: String,
    },
    email : {
        type: String,
        required : [true],
        unique  :true,
    },
    communities : [
        {
            commId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Communities', 
                required: true
              },
              role:{
                type : String
              }
        }
    ]



});



const Users = mongoose.models.Users  || mongoose.model('Users',userSchema)



export default Users;