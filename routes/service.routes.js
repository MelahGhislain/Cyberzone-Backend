const router = require('express').Router()
const serviceController = require('../controllers/service.controller')

module.exports = () =>{
    router.post("/register", serviceController.createService)
    router.get("/", serviceController.getService)
    router.get("/:id", serviceController.getService)
    router.put("/:id/update", serviceController.updateService)
    router.delete("/:id/remove", serviceController.removeService)
    return router
}