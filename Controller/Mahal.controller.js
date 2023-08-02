const MahalRouter = require("express").Router();
const MahalModel = require("../Models/Mahal.model");

// GET ALL THE MAHALS
/**
 * METHOD - GET
 * REQUEST - {}
 * RESPONSE - OBJECT<MAHALS>
 */

MahalRouter.get("/", (request, response, next) => {
  MahalModel.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return response.status(200).json({
          success:true,
          message:"MAHALS FETCHED SUCCESSFULLY",
          data:cursor
        })
      }
    })
    .catch((err) => {
    return response.status(401).json({
      success:false,
      message:"ERROR IN FETCHING DATA",
      data:err
    })
    });
});

//POST METHOD TO CREATE MAHALS
/**
 * METHOD - POST
 * REQUEST - OBJECT<MAHALS>
 * RESPONSE - OBJECT<MAHALS>
 */

MahalRouter.post("/create", (request, response, next) => {
  const data = request.body;
  // console.log(data);
  const Mahals = new MahalModel(data);

  Mahals.save()
    .then((result) => {
      // console.log(result);
      if (result && result._id) {
        return response.status(200).json({
          success: true,
          message: "MAHAL CREATED SUCCESSFULLY",
          data: result,
        });
      }
    })
    .catch((error) => {
      return response.status(401).json({
        success: false,
        message: "ERROR IN CREATING MAHAL",
        error: error,
      });
    });
});

module.exports = MahalRouter;
