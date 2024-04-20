const express = require ('express')
const db = require('../db')
const router = express.Router()
const utils = require('../utils')
router.post('/login',(request,response)=>{
    const {email,password}=request.body
    const statement =`select * from user where email =? and password =?;`
    
    db.pool.execute(statement,[email,password],(error,result)=>{
        if(error){
            response.send(error)
        }
        else {
            if(error){
                response.send(utils.createErrorResult(0))
            }
            else{
                response.send(utils.createSuccessResult(result))
            }
           
            
        }
    })
})
router.get('/Allblogs',(request,response)=>{
    
    const statement =`select * from blogs;`
    db.pool.execute(statement,(error,result)=>{
        if(error){
            response.send('error')
        }
        else {
            response.send(result)
        }
    })
})
router.post('/registration',(request,response)=>{
    const {full_name,email,password,phone_no}=request.body
    const statement =`insert into user(full_name,email,password,phone_no) values(?,?,?,?);`
    db.pool.execute(statement,[full_name,email,password,phone_no],(error,result)=>{
        if(error){
            response.send('error')
        }
        else {
            response.send(result)
        }
    })
})
router.post('/Addcategory',(request,response)=>{
    const{title,description}=request.body
    const statement =`insert into categories(title,description) values(?,?);`
    db.pool.execute(statement,[title,description],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })

})
router.get('/searchblog',(request,response)=>{
    const{title}=request.body
    const statement =`select * from blogs where title =?;`
    db.pool.execute(statement,[title],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })

})
router.post('/Addblog',(request,response)=>{
    const{title,contents,user_id,category_id}=request.body
    const statement =`insert into blogs(title,contents,user_id,category_id)values(?,?,?,?);`
    db.pool.execute(statement,[title,contents,user_id,category_id],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })

})
module.exports=router