const mysql=require("mysql")

module.exports={
	configInfo:{
		host:"localhost",
		user:"root",
		password:"",
		database:"infodb"
	},
	dbConn:function(sql,sqlArr,callBack){
		let pool=mysql.createPool(this.configInfo)
		pool.getConnection((err,conn)=>{
			if(err){
				console.log(err)
				return
			}
			conn.query(sql,sqlArr,callBack)
			conn.release();
		})
	}
}