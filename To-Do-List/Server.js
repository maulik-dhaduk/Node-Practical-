const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())


var Student = [
    {
        id: 1,
        name: "Maulik",
        city: "Ahmedabad"
    },
    {
        id: 2,
        name: "Rohit",
        city: "Surat"
    }
]


app.get("/", (req, res) => {

    try {
        res.render("index", { Student });
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }

})

app.post("/add", (req, res) => {

    try {
        let id = Student.length ? Student[Student.length - 1].id + 1 : 1;
        const { name, city } = req.body;

        Student.push({ id, name, city });
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to add student.");
    }

})

app.get("/delete", (req, res) => {

    try {
        let find_student_index = Student.findIndex(
            (data) => data.id == req.query.id
        );

        if (find_student_index >= 0) {
            Student.splice(find_student_index, 1);
        }

        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to delete the student.");
    }

})

app.get("/edit", (req, res) => {

    try {
        let find_student_data = Student.find(
            (data) => data.id == req.query.id
        );

        res.render("update", { find_student_data });
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to load edit page.");
    }
})

app.post("/Update", (req, res) => {

    try {
        let Match_data = Student.find(
            (data) => data.id == req.body.id
        );

        Match_data.name = req.body.name;
        Match_data.city = req.body.city;

        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to update student.");
    }

});



app.listen(4780, () => {
    console.log("Server Listen");
})