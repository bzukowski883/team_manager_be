import { Router } from "express";

const testRouter = Router();


// Test route
testRouter.get("/", (req, res) => {
  res.send("Backend is running!");
});

// GET: Retrieve users
testRouter.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// POST: Create a user
testRouter.post("/api/users", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Failed to create user" });
  }
});


export default testRouter;
