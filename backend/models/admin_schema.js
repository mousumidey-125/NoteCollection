const schema_mongoose=require('mongoose');


const Admin = schema_mongoose.Schema(
    {
    adminEmail: { type: String },
    adminPassword: { type: String },

    },
    {
       timestamps: true
    }
    );

module.exports=schema_mongoose.model('admin',Admin);