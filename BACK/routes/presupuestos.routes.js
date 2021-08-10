const midd = require('../middlewares/midd.presupuestos');
const presupuestosServices = require('../services/presupuestos.services');
const cors = require('cors');

//modulos

module.exports = (app) => {
  app.post('/nuevoproyecto', async (req,res)  => {
    try {
      console.log('dentro post')
      let proyecto = req.body
      console.log(proyecto)
      let resultado = presupuestosServices.crearProyecto(proyecto)
      res.status(200).send('Proyecto agregado')

    }catch(error) {
      console.log(error)
      res.status(400).send('Ocurrió un error')
    }
  })



  app.post('/nuevoConcepto/ingresos', midd.checkConcepto, async (req, res) => {
    try{  
      let ingreso = req.body;
      let resultado =  presupuestosServices.crearConcepto(ingreso,'concepto_ingresos');
      res.status(200).send('Concepto agregado')
    }catch (error){

      res.status(400).send('Ocurrio un error inesperado') 
    }

  })

  app.post('/nuevoConcepto/costosDirectos', midd.checkConcepto, async (req, res) => {
    try{  
      let costoDirecto = req.body;
      let resultado =  presupuestosServices.crearConcepto(costoDirecto,'concepto_costos_directos');
      res.status(200).send('Concepto agregado')
    }catch (error){

      res.status(400).send('Ocurrio un error inesperado') 
    }

  })

  app.post('/nuevoConcepto/gastosAdmon', midd.checkConcepto, async (req, res) => {
    try{  
      let gastoAdmon = req.body;
      let resultado =  presupuestosServices.crearConcepto(gastoAdmon,'concepto_gastos_admon');
      res.status(200).send('Concepto agregado')
    }catch (error){

      res.status(400).send('Ocurrio un error inesperado') 
    }

  })

  app.post('/nuevoConcepto/recursos', midd.checkConcepto, async (req, res) => {
    try{  
      let recurso = req.body;
      let resultado =  presupuestosServices.crearConcepto(recurso,'concepto_recursos');
      res.status(200).send('Concepto agregado')
    }catch (error){

      res.status(400).send('Ocurrio un error inesperado') 
    }

  })


  
  app.get('/proyectos', async (req, res) => {
    try {
      let tabla = 'presupuestos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })

  app.get('/mostrarConcepto/ingresos', async (req,res) => {
    try {
      let tabla = 'concepto_ingresos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  
  

  app.get('/mostrarConcepto/costosDirectos', async (req,res) => {
    try {
      let tabla = 'concepto_costos_directos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })


  app.get('/mostrarConcepto/gastosAdmon', async (req,res) => {
    try {
      let tabla = 'concepto_gastos_admon'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  


  app.get('/mostrarConcepto/recursos', async (req,res) => {
    try {
      let tabla = 'concepto_recursos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })


  app.delete('/borrarConcepto/ingreso', async (req,res) => {
    try {
      let tabla = 'concepto_ingresos'
      let concepto = req.body
      let resultado = await presupuestosServices.borrarConcepto(concepto,tabla)
      res.status(200).send('concepto eliminado correctamente')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  
  app.delete('/borrarConcepto/costosDirectos', async (req,res) => {
    try {
      let tabla = 'concepto_costos_directos'
      let concepto =
       req.body
      let resultado = await presupuestosServices.borrarConcepto(concepto,tabla)
      res.status(200).send('concepto eliminado correctamente')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  
  app.delete('/borrarConcepto/gastosAdmon', async (req,res) => {
    try {
      let tabla = 'concepto_gastos_admon'
      let concepto = req.body
      let resultado = await presupuestosServices.borrarConcepto(concepto,tabla)
      res.status(200).send('concepto eliminado correctamente')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  
  app.delete('/borrarConcepto/recursos', async (req,res) => {
    try {
      let tabla = 'concepto_recursos'
      let concepto = req.body
      let resultado = await presupuestosServices.borrarConcepto(concepto,tabla)
      res.status(200).send('concepto eliminado correctamente')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })

  app.post('/monto/ingresos', async (req,res) => {
    try {
      let tabla = 'ingresos';
      let monto = req.body;
      let resultado = presupuestosServices.agregarMonto(monto, tabla)
      res.status(200).send('Monto agregado')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  
  app.post('/monto/costosDirectos', async (req,res) => {
    try {
      let tabla = 'costos_directos';
      let monto = req.body;
      let resultado = presupuestosServices.agregarMonto(monto, tabla)
      res.status(200).send('Monto agregado')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  

  app.post('/monto/gastosAdmon', async (req,res) => {
    try {
      let tabla = 'gastos_admon';
      let monto = req.body;
      let resultado = presupuestosServices.agregarMonto(monto, tabla)
      res.status(200).send('Monto agregado')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })

  app.post('/monto/recursos', async (req,res) => {
    try {
      let tabla = 'recursos';
      let monto = req.body;
      let resultado = presupuestosServices.agregarMontoRecurso(monto, tabla)
      res.status(200).send('Monto agregado')

    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })


  
  app.get('/ingresos', async (req,res) => {
    try {
      let tabla = 'ingresos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  
  

  app.get('/costosDirectos', async (req,res) => {
    try {
      let tabla = 'costos_directos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })


  app.get('/gastosAdmon', async (req,res) => {
    try {
      let tabla = 'gastos_admon'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })
  


  app.get('/recursos', async (req,res) => {
    try {
      let tabla = 'recursos'
      let resultado = await presupuestosServices.lista(tabla)
      res.status(200).json(resultado)
    }catch (error) {
      console.log(error)
      res.status(400).send('Ocurrió un error inesperado')
    }
  })

}