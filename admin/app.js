const express=require("express")
const app=express()

const session =require("express-session")
const cors=require("cors")

const bodyParser=require("body-parser")


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
	secret:"secret",
	resave:true,
	saveUninitialized:false,
	cookie:{
		maxAge:1000*60*10
	}
}))

const db=require("./tool/dbConfig.js")
app.listen(3000,()=>{
	console.log("app start!")
})

app.post("/login",(req,res,err)=>{
	console.log("开始了")
	const name =req.body.name;
	const pwd=req.body.pwd
	console.log(name,pwd)
	let sql=`select * from user where name=? and pwd= ?`
	let sqlArr=[name,pwd];
	let callBack=(err,data)=>{
		if(err){
			res.send({
				code:400,
				msg:"登录失败"
			})
			return;
		}
		if(data.length!=1){
			res.send({
				code:400,
				msg:"登录失败"
			})
		}else{
			req.session.info={
				name:name,
				pwd:pwd
			}
			res.send({
				code:200,
				userInfo:req.body,
				data:data
			})
		}
	}
	db.dbConn(sql,sqlArr,callBack)
})

app.post("/register",(req,res)=>{
	const name=req.body.name;
	const pwd=req.body.pwd;
	console.log(name,pwd)
	// 首先要根据传递过来的数据查询数据库中是否已经存在该用户了
	function regfun(){
		var insert="insert into user (name,pwd) values (?,?)"
		let insertArr=[name,pwd]
		let insertCallBack=((err,data)=>{
			if(err){
				console.log(err)
				return;
			}
			if(data..affectedRows==1){
				req.session.info={
					name:name,
					pwd:pwd
				}
				res.send({
					code:200,
					msg:"注册成功"
				})
			}else{
				res.send({
					code:400,
					msg:"注册失败"
				})
			}
		})
		db.dbConn(insert,insertArr,insertCallBack)
	}
	
	let sql1="select * from user where name=?";
	let sqlArr=[name]
	let callBack=((err,data)=>{
		if(err){
			console.log(err)
			return;
		}
		if(data.length==1){
			res.send({
				code:201,
				msg:"该用户已经存在"
			})
		}else{
			regfun()
		}
		
	})
	db.dbConn(sql1,sqlArr,callBack)
	
})
