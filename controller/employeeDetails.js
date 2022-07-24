const employee = require('../model/employee')

exports.edetails = async (req, res) => {
    try {
        const {ename, ephone, eemail} = req.body

        const repeatEmail = await employee.findOne({eemail: eemail})
        if(repeatEmail) {
            res.status(400).json({message: "user Email already exists!!"})
            return
        }

        const repeatPhone = await employee.findOne({ephone: ephone})
        if(repeatPhone) {
            res.status(400).json({message: "user Phone already exists!!"})
            return
        }

        const empCreate = await employee.create({ename, ephone, eemail})

        if(!empCreate) {
            res.status(400).json({message: 'Emplaye registration Failed!'})
            return
        } 

        if(empCreate) {
            res.status(200).json({message: 'Employee registered', empCreate})
            return
        } 
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'Employee Registration is not possible!!'})
    }
}

exports.udpateById = async (req, res) => {
    try {
        const updateId = await employee.findByIdAndUpdate(req.params.id, req.body, {
            new : true
        })   
        
        if(!updateId) {
            res.status(400).json({message: 'user not found!!!(update)'})
            return
        } 

        if(updateId) {
            res.status(200).json({message: 'user detail updated', updateId})
            return
        }
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'updateById is not possible!!'})
    }
}

exports.getAllEmployee = async (req, res) => {
    try {
        const allEmployee = await employee.find()
        
        if(!allEmployee) {
            res.status(400).json({message: 'cannot get employee details!!'})
            return
        } 

        if(allEmployee) {
            res.status(200).json({message: 'employee get', allEmployee })
            return
        }
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'getAllEmployee is not possible!!'})
    }
}

exports.deleteById = async (req, res) => {
    try {
        const deleteId = await employee.findByIdAndDelete(req.params.id)   //params: data from url
        
        if(!deleteId) {
            res.status(400).json({message: 'user not found!!!(delete)'})
            return
        } 

        if(deleteId) {
            res.status(200).json({message: 'user deleted', deleteId})
            return
        }
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'deleteById is not possible!!'})
    }
}