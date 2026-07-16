const errorHandler = (err, req, res, next) => {
     console.log(err)

     res.status(err.status || 500)
     .json({
        status : "ERROR",
        message : err.message || "Something wen wrong"
     })
}

module.exports = errorHandler