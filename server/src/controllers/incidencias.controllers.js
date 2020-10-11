const incidenciaCtrl = {}

const Incidencia = require('../models/Incidencia')

incidenciaCtrl.getIncidencias = async (req, res) =>{
    const incidencias = await Incidencia.find()
    res.json(incidencias)
}

incidenciaCtrl.createIncidencia = async(req, res) =>{
    
    const newIncidencia = new Incidencia(req.body)
    await newIncidencia.save()

    res.send({message: 'Incidencia Reportada'})
}

incidenciaCtrl.getIncidencia = async (req, res) =>{
    const incidencia = await Incidencia.findById(req.params.id)
    res.send(incidencia)
}

incidenciaCtrl.editIncidencia = async (req, res) =>{
    await Incidencia.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Incidencia Editada'})
}

incidenciaCtrl.deleteIncidencia = async(req, res) =>{
    await Incidencia.findByIdAndDelete(req.params.id)
    res.json({status: 'Incidencia Eliminada'})
}

incidenciaCtrl.municipioIncidencia = async(req, res) =>{
   const municipio = await db.Incidencia.find({},{"municipio":1})
    res.json(municipio)
    console.log(res);
    
}

module.exports = incidenciaCtrl