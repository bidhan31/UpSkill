require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://skillupDB:WRaPgYeGIo8yUmQI@cluster0.jwx7u.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");

    const coursesCollection = client
      .db("skillupDB")
      .collection("courses");

    // GET all courses
    app.get("/api/courses", async (req, res) => {
      const courses = await coursesCollection.find().toArray();
      res.send(courses);
    });

    // CREATE course
    app.post("/api/courses", async (req, res) => {
      const course = {
        ...req.body,
        enrolledStudents: [],
        courseRatings: [],
        discount: 0,
        createdAt: new Date(),
      };

      const result = await coursesCollection.insertOne(course);
      res.send(result);
    });

    // UPDATE course
    app.put("/api/courses/:id", async (req, res) => {
      const { id } = req.params;

      const result = await coursesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
      );

      res.send(result);
    });

    // DELETE course
    app.delete("/api/courses/:id", async (req, res) => {
      const { id } = req.params;

      const result = await coursesCollection.deleteOne({
        _id: new ObjectId(id),
      });

      res.send(result);
    });
  } catch (err) {
    console.error(err);
  }
}
run();

app.get("/", (req, res) => {
  res.send("SkillUp Server Running 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
