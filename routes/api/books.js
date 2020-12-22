const router = require("express").Router();
const bookController = require("../../controllers/bookControler");

router.route("/")
  .get(bookController.findAll)
  .post(bookController.addBook)

router.route("/:id")
  .get(bookController.findOne)
  .delete(bookController.deleteById)

  module.exports = router;