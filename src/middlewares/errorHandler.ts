import { Request, Response } from "express";

function errorHandler(err:Error,req:Request,res:Response){

    res.status(500).json({
        message:err.message || "Server Error"
    })

}

export default errorHandler