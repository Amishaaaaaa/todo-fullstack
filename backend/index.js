const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(express.json())
app.post('/todo', function (req, res) {
    res.json({
        msg: "this is / endpoint"
    })
})

app.get("/todos", function(req, res) {
    
})

app.get("/completed", function(req, res) {

})

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`server running on server ${PORT}`);
});
