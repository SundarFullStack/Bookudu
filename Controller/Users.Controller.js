const UserRouter = require("express").Router();
const UserModel = require("../Models/Users.model");
const mongoose = require("express");

//GET ALL THE USERS
/**
 * METHOD - GET
 * REQUEST - {}
 * RESPONSE - ARRAY<USERS>
 */

UserRouter.get("/", (request, response, next) => {
  UserModel.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return response.status(200).json({
          success: true,
          data: cursor,
          message: "ALL USERS RETREIVED SUCCESSFULLY!!!",
        });
      } else {
        return response.status(200).json({
          success: true,
          data: [],
          message: "USERS COLLECTION IS EMPTY!!!",
        });
      }
    })
    .catch((err) => {
      return response.status(401).json({
        success: false,
        message: "ERROR IN FETCHING DATA",
        err: err,
      });
    });
});

//CREATE A USER
/**
 * METHOD - POST
 * REQUEST - OBJECT<USER>
 * RESPONSE - OBJECT<USER> + POST RESPONSE STATUS
 */

UserRouter.post("/create", (request, response, next) => {
  const data = request.body;
  // console.log(data);
  const User = new UserModel(data);
  // console.log("user",User);
  User.save()
    .then((result) => {
      // console.log(result);
      if (result && result._id) {
        return response.status(200).json({
          success: true,
          message: "USER CREATED SUCCESSFULLY",
          data: result,
        });
      }
    })
    .catch((err) => {
      return response.status(401).json({
        success: false,
        message: "ERROR IN CREATING USER",
        error: err,
      });
    });
});

//UPDATE THE USERS USING PATCH METHOD
/**
 * METHOD- PATCH
 * REQUEST - OBJECT<USER>
 * RESPONSE - OBJECT<UPDATEDUSER>
 */

UserRouter.patch("/:id", (request, response, next) => {
  const { id } = request.params;
  const updateData = request.body;
  // console.log(id);
  // console.log(data);
  UserModel.findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
    .then((result) => {
      // console.log(result);
      if (result && result._id) {
        return response.status(200).json({
          success: true,
          message: "USER UPDATED SUCCESSFULLY",
          UpdatedData: result,
        });
      }
    })
    .catch((err) => {
      return response.status(401).json({
        success: false,
        message: "ERROR IN UPDATING USER",
        error: err,
      });
    });
});

module.exports = UserRouter;
