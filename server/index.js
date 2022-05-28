const app = require("./app");
const port = 3002


app.app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

