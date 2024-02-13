import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
<<<<<<< HEAD
    lastName : String, 
    firstName: String,
    email: { type:String,  required:'un nom est obligatoire:)', unique:true },
    password:{ type:String },
    roles:[Schema.Types.ObjectId]
},
{ timestamps: true }
);
=======
  lastName: String,
  firstName: String,
  email: { type: String, required: "un nom est obligatoire:)" },
  password: { type: String, required: true },
  salt: { type: String, default: "10" },
  creationDate: { type: Date, default: new Date() },
  roles: [String],
});
>>>>>>> 795e4cf (users routes /controllers/services)

const userModel = mongoose.model("users", userSchema);

export default userModel;
