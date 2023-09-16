import { Elysia } from "elysia";

const mongoose = require('mongoose')
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://root:vt7U3ryxp65rCPOB@urmom.csfuk15.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'toolbox'
    });
    console.log('Connected to MongoDB');
    // Your application logic here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
// Call the async function to connect
connectToDatabase();

const journalModel = mongoose.model('journals', { date: String, text: String });

const app = new Elysia()
  // Start Journal APIs
  .get("/journal", async () => {
      try {
        // Use the Mongoose model to find all journal entries
        const journals = await journalModel.find();
        return journals; // Return the journal entries as a response
      } catch (error) {
        console.error("Error retrieving journal entries:", error);
        return { error: "Failed to retrieve journal entries" }; // Handle the error
      }
  })
  .post('/journal', ({ body }) => {
    const journal = new journalModel(body);
    journal.save().then(() => console.log("Saved Journal Entry"));
  })
  .put('/journal/:id', async ({ params, body }) => {
    try {
      // Use the Mongoose model to update the journal entry by ID
      const updatedJournal = await journalModel.findByIdAndUpdate(params.id, body, { new: true });
      if (!updatedJournal) {
        return { error: "Journal entry not found" }; // Handle the case where the journal entry is not found
      }
      console.log("Journal entry updated successfully");
      return updatedJournal; // Return the updated journal entry as a response
    } catch (error) {
      console.error("Error updating journal entry:", error);
      return { error: "Failed to update journal entry" }; // Handle the error
    }
  })
  .delete('/journal/:id', async ({ params }) => {
    try {
      // Use the Mongoose model to find and delete the journal entry by ID
      const deletedJournal = await journalModel.findByIdAndRemove(params.id);
      if (!deletedJournal) {
        return { error: "Journal entry not found" }; // Handle the case where the journal entry is not found
      }
      console.log("Journal entry deleted successfully:");
      return { message: "Journal entry deleted successfully" }; // Return a success message
    } catch (error) {
      console.error("Error deleting journal entry:", error);
      return { error: "Failed to delete journal entry" }; // Handle the error
    }
  })
  // End Journal APIs

  .get('/api2', () => 'Test Elysia')
  .listen(5000);


console.log(
  `Backend Server is running at ${app.server?.hostname}:${app.server?.port}`
);

// testing