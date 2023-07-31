const FilesRouter = require("express").Router();

//CREATING AN FILE USING API REQUEST

const fs = require("fs/promises");

const content = new Date().toString().replace(/[:.]/g, "-");

const path = `./files/${content}.txt`;

async function createFile() {
  try {
    await fs.writeFile(path, content);
    console.log("file Created");
  } catch (error) {
    console.log(error);
  }
}
//FILE CREATING API ROUTER

FilesRouter.get("/createFile", (request, response, next) => {
  console.log("request hitted");
  createFile();

  return response.status(200).json({
    message: "FILE CREATED SUCCESSFULLY",
  });
});

//READING AN FILE USING API REQUEST

async function readFile() {
  try {
    const data = await fs.readFile(`./files/test.txt`, { encoding: "utf8" });
    console.log("Data :", data);
  } catch (error) {
    console.log(error);
  }
}

//FILE READING API ROUTER

FilesRouter.get("/readFile", (request, response, next) => {
  console.log("read request hitted");
  readFile();
  return response.status(200).json({
    message: "FILE READED SUCCESSFULLY",
  });
});

module.exports = FilesRouter;
