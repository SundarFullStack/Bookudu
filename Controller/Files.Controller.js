const FilesRouter = require("express").Router();

//1. CREATING AN FILE USING API REQUEST

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

//2.  PASSING CONTENT THROUGH PARAMS

async function createFile(data) {
  try {
    await fs.writeFile(path, data ? data : content);
    console.log("file Created");
  } catch (error) {
    console.log(error);
  }
}

//ROUTER

FilesRouter.get("/createCustomFile/:content", (request, response, next) => {
  const { content } = request.params;
  let data = content;
  createFile(data);

  return response.status(200).json({
    message: "CUSTOM FILE CREATED SUCCESSFULLY",
  });
});

//3. READING AN FILE USING API REQUEST

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
