const express = require('express');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(express.json())
app.post('/todo', async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "wrong input",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos: todos
    })
})

app.get("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "wrong input",
        });
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo completed voilaaaa"
    })
})

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server running on server ${PORT}`);
});
