const ccontrol = require('../controller/companyDetails')
const econtrol = require('../controller/employeeDetails')
const express = require('express')

const route = express.Router()

route.post('/cdetails', ccontrol.cdetails)

route.post('/edetails', econtrol.edetails)

route.get('/getCompany', ccontrol.getAllCompany)

route.get('/getEmployees', econtrol.getAllEmployee)

route.all('/updateById/:id', ccontrol.udpateById)

route.all('/deleteById/:id', ccontrol.deleteById)

route.all('/updateById/:id', econtrol.udpateById)

route.all('/deleteById/:id', econtrol.deleteById)

module.exports = route
