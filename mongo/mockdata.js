db = db.getSiblingDB("team_manager");

const userId = ObjectId("100000000000000000000001");

db.users.updateOne(
  { _id: userId },
  {
    $set: {
      username: "testuser",
      email: "test@example.com",
      password: "placeholder",
      createdAt: new Date()
    }
  },
  { upsert: true }
);

db.schedules.updateOne(
  { _id: ObjectId("100000000000000000000002") },
  {
    $set: {
      userId,
      title: "Team Meeting",
      description: "Weekly project meeting",
      startTime: null,
      endTime: null,
      createdAt: new Date()
    }
  },
  { upsert: true }
);