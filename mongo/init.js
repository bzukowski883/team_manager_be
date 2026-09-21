// team manager database initialization script

db = db.getSiblingDB("team_manager");

// Create users collection with schema validation
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "email", "password", "createdAt"],
            properties: {
                username: {
                    bsonType: "string"
                },
                email: {
                    bsonType: "string"
                },
                password: {
                    bsonType: "string"
                },
                createdAt: {
                    bsonType: "date"
                }
            }
        }
    }
});

// User indexes for unique username and email
db.users.createIndex(
    { username: 1 },
    { unique: true }
);

db.users.createIndex(
    { email: 1 },
    { unique: true }
);
