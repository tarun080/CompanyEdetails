const company = require('../model/company')

exports.cdetails = async (req, res) => {
    try {
        const {cname, city, state, cemail, edetails} = req.body
        const repeatEdetails = await company.findOne({edetails})
        if(repeatEdetails) {
            res.status(400).json({message: "company already exists!!"})
            return
        }

        const compCreate = await company.create({cname, city, state, cemail, edetails})

        if(!compCreate) {
            res.status(400).json({message: 'Company create Failed!'})
            return
        } 

        if(compCreate) {
            res.status(200).json({message: 'Company Create', compCreate})
            return
        } 
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'Create Company is not possible!!'})
    }
}

exports.udpateById = async (req, res) => {
    try {
        const updateId = await company.findByIdAndUpdate(req.params.id, req.body, {
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

exports.getAllCompany = async (req, res) => {
    try {
        const allCompany = await company.find().populate("edetails")
        
        if(!allCompany) {
            res.status(400).json({message: 'cannot get company details!!'})
            return
        } 

        if(allCompany) {
            res.status(200).json({message: 'company get', allCompany })
            return
        }
    } catch(err) {
        console.log("Error", err)
        res.status(400).json({err: 'getAllCompany is not possible!!'})
    }
}

exports.deleteById = async (req, res) => {
    try {
        const deleteId = await company.findByIdAndDelete(req.params.id)   //params: data from url
        
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