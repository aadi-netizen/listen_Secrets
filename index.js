import express from "express";
import axios from "axios";



const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req,res) => {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {content: result.data});
})


app.listen(port, () => {
    console.log(`The server is runing on port ${port}`);
})

