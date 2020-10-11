const mongoose = require("mongoose");
const { Schema } = mongoose;

const incidenciaSchema = new Schema(
    {
    municipio: {type: String, required: true },
    enfermedad: {type: String, required: true },
    totalF: {type: Number, required: true},
    totalM: {type: Number, required: true},
    totalG: {type: Number, required: true},
}, 
{
    timestamps:true,
    versionKey: false
});
module.exports = mongoose.model("Incidencia", incidenciaSchema);