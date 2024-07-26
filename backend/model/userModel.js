import mongoose from "mongoose";
import bcrypt from "bcryptjs"


const userSchema = mongoose.Schema({

    name : {
        type :  String ,
        required : true
    },

    email : {
        type : String,
        required : true ,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
} , {
    timestamps : true
});
        //    if you use this keyword dont use arrow function
userSchema.pre('save'  , async function(next)     // pre means before 'save'
{

    if (!this.isModified('password'))
        {
                next();
        }
                                                             // salt is key is hash password
        const salt = await bcrypt.genSalt(10);       // this is hash the password before save it
                                                  // bcrypt has genSalt method that take characters to hash them
        this.password  = await bcrypt.hash(this.password , salt);     // before save password its hashing

} );

userSchema.methods.matchPasswords = async function (enterdpassword)
{
    return await bcrypt.compare(enterdpassword , this.password)
}


const User = mongoose.model('User' , userSchema);

export default User;