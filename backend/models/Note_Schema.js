const schema_mongoose=require('mongoose');


const NoteSchema = schema_mongoose.Schema(
    {
    countryName: { type: String },
    countryFlag: { type: String },
    description: { type: String },
    currencyName: { type: String },
    denomination:{type:String},
    frontSide:{type:String},
    backside:{type:String},
    uniqueId:{type:String},

    },
    {
       timestamps: true
    }
    );

module.exports=schema_mongoose.model('note_collection',NoteSchema);