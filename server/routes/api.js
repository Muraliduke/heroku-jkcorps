const express = require('express');

const mongoose = require('mongoose');
const router = express.Router();
const StudentsDetail = require('../models/students');
const db= "mongodb://jkelectrocorps:admin123@ds155091.mlab.com:55091/userdetails";
mongoose.Promise = global.Promise;

mongoose.connect(db,function(err){
  if(err){
    console.log("An err occured in db connection",err)
  }
})

router.get('/admin/students',function(req, res){
    
    StudentsDetail.find({})
    .exec(function(err , students){
        if(err){
            console.log('An error occured while executing api /admin/students',err)
        }else{
            res.json(students)
        }
    
    })
})

router.get('/admin/student/:id',function(req, res){
    
    StudentsDetail.findById(req.params.id)
    .exec(function(err , student){
        if(err){
            console.log('An error occured while executing api /admin/students',err)
        }else{
            res.json(student)
        }
    
    })
})

router.post('/admin/student',function(req, res){
    
    var newStudent = new StudentsDetail();

    newStudent.name = req.body.name;
    newStudent.mobile = req.body.mobile;
    newStudent.degree = req.body.degree;
    newStudent.college = req.body.college;
    newStudent.department = req.body.department;
    newStudent.message = req.body.message;

    newStudent.save(function(err,savedStudent){
        if(err){
            console.log('An error occured while executing api /admin/student',err);
        }else{
           
            res.status(200).json({
                message: 'Saved Successfully'
            });
        }
    })
})

router.put('/admin/student/:id',function(req, res){
    
    StudentsDetail.findByIdAndUpdate(req.params.id,
        {$set : { name: req.body.name, mobile: req.body.mobile, 
            degree: req.body.degree,college: req.body.college, department: req.body.department, 
            message: req.body.message}},
        {new : true},
        function(err,updatedStudent){
            if(err){
                console.log('An error occured while executing api /admin/student',err);
            }else{
                res.json(updatedStudent);
            }
        }
    )
})

router.delete('/admin/student/:id',function(req, res){
    
    StudentsDetail.findByIdAndRemove(req.params.id,function(err,deletedStudent){
            if(err){
                console.log('An error occured while executing api /admin/student',err);
            }else{
                res.json(deletedStudent);
            }
        }
    )
})

module.exports = router;