const TodosRouter = require("express").Router();

//HTTP METHODS GET,POST

//READ THE MOCK DATA IN AN LOCAL USING API REQUEST

TodosRouter.get("/", (request, response, next) => {
  const data = require(`../mocks/todos.json`);
  return response.status(200).json({
    message: "REQUEST HIT",
    todos: data,
    length: data.length,
  });
});

//READ THE INDIVIIDUAL OBJECT OF DATA FORM AN ARRY USING PASSING AN ID FOR IT THROUGH PARAMS ID

TodosRouter.get("/:id", (request, response, next) => {
  const { id } = request.params;
  const data = require(`../mocks/todos.json`);
  const fiilteredData = data.filter((f) => Number(f.id) === Number(id));
  return response.status(200).json({
    message: "REQUEST HITTED",
    result: fiilteredData,
  });
});

//FETCHING THE POSTED DATA FROM REQ BODY AND ASSIGN IT IN LOCAL TEXT FILE

//FILE CREATOR

const fs = require("fs/promises");

const path = `./files/new.txt`;

const defaultContent = new Date().toString().replace(/[:.]/g, "-");

async function createFile(data) {
  try {
    await fs.writeFile(path, data ? data : defaultContent);
  } catch (err) {
    console.log(err);
  }
}

TodosRouter.post("/createCustomFile", async (req, res, next) => {
  const { content } = req.body;
  console.log(req.body);
  await createFile(content);
  return res.status(200).json({
    message: "FILE POSTED SUCCESSFULLY",
  });
});

module.exports = TodosRouter;
