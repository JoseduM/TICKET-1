//Importar modulos 
const dbPresupuestos = require('../db/dbPresupuestos');
const jwt = require('jsonwebtoken');
const { func } = require('joi');



//exportar modulos

module.exports.crearProyecto = async (proyecto) => {
  try {
    let proyectoNuevo = [
      proyecto.fecha,
      proyecto.proyecto,
      proyecto.version
    ]
    let resultado = await dbPresupuestos.nuevoProyecto(proyectoNuevo)
    return 'REGISTRO COMPLETO'
  }catch (error){
    console.log(`error en services crear concepto:${error}`)
    throw new Error ('Error en la creacion del concepto')
  }
}


module.exports.crearConcepto = async (concepto,tabla) => {
  try {
    let resultado = await dbPresupuestos.nuevoConcepto(concepto,tabla)
    return 'Registro completado'
  }catch (error){
    console.log(`error en services crear concepto:${error}`)
    throw new Error ('Error en la creacion del concepto')
  }
}

module.exports.lista = async (tabla) => {
  try {
    let resultado = await dbPresupuestos.mostrar(tabla)
    return resultado
  }
  catch (error) {
    console.log(`error en services listaConceptos:${error}`)
    throw new Error ('Error en la obtención de conceptos ')
  }
}

module.exports.borrarConcepto = async(concepto,tabla) => {
  try {
    let resulado = await dbPresupuestos.eliminarConcepto(concepto,tabla)
  } catch  (error) {
    console.log('error en services borrar concepto')
    throw new Error ('Error en la eliminación de conceptos')
  }
}

module.exports.agregarMonto = async (monto, tabla) => {
  try {
    let conceptoID = await dbPresupuestos.consegirID('concepto', monto.concepto, 'concepto_'+tabla)

    let proyectoID = await dbPresupuestos.consegirID('proyecto', monto.proyecto, 'presupuestos')

    let montoNuevo = [
      conceptoID,
      proyectoID,
      monto.fecha,
      monto.monto
    ]

    let resultado = await dbPresupuestos.nuevoMonto(montoNuevo,tabla)

    if (resultado) {
      return 'Asignación de monto correcta'
    }
    else {
      throw new Error ('El monto es incorrecto')
    }
  } catch(error) {
    console.log(`Error en la asignación de monto agregarMonto: ${error}`)
    throw new Error('Error en la asignación del monto')
  }
}


module.exports.agregarMontoRecurso = async (monto, tabla) => {
  try {
    let conceptoID = await dbPresupuestos.consegirID('concepto', monto.concepto, 'concepto_'+tabla)

    let proyectoID = await dbPresupuestos.consegirID('proyecto', monto.proyecto, 'presupuestos')

    let montoNuevo = [
      conceptoID,
      proyectoID,
      monto.fecha,
      monto.monto,
      monto.porcentaje
    ]

    let resultado = await dbPresupuestos.nuevoMontoRecurso(montoNuevo,tabla)

    if (resultado) {
      return 'Asignación de monto correcta'
    }
    else {
      throw new Error ('El monto es incorrecto')
    }
  } catch(error) {
    console.log(`Error en la asignación de monto agregarMonto: ${error}`)
    throw new Error('Error en la asignación del monto')
  }
}