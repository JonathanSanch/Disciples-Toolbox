import { Elysia } from "elysia";

const mongoose = require('mongoose')
async function connectToDatabase() {
try {
	await mongoose.connect(`${Bun.env.dbKey}`, { // put this in env maybe later
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: 'toolbox'
		});
	console.log('Connected to MongoDB');
	} 
	catch (error) { console.error('Error connecting to MongoDB:', error); }
}
connectToDatabase(); // Call the async function to connect

// Schemas
const journalModel = mongoose.model('journals', { date: String, text: String });
const prayerModel = mongoose.model('prayers', { title: String, date: String, text: String });




// Start Eylysia
const app = new Elysia()


// Start Journal Routes
.get("/journals", async () => {
	try {
	// Use the Mongoose model to find all journal entries
		const journals = await journalModel.find();
		return journals; // Return the journal entries as a response
	}
	catch (error) { console.error("Error retrieving journal entries:", error);
	return { error: "Failed to retrieve journal entries" }; } // Handle the error 
})

.post('/journals', ({ body }) => {
	const journal = new journalModel(body);
	journal.save().then(() => console.log("Saved Journal Entry"));
})

.put('/journals/:id', async ({ params, body }) => {
	try {
		// Use the Mongoose model to update the journal entry by ID
		const updatedJournal = await journalModel.findByIdAndUpdate(params.id, body, { new: true });

		if (!updatedJournal) { 
			return { error: "Journal entry not found" }; 
		} // Handle the case where the journal entry is not found

		console.log("Journal entry updated successfully");
		return updatedJournal; // Return the updated journal entry as a response
	}
	catch (error) { console.error("Error updating journal entry:", error);
	return { error: "Failed to update journal entry" }; } // Handle the error
})

.delete('/journals/:id', async ({ params }) => {
	try {
		// Use the Mongoose model to find and delete the journal entry by ID
		const deletedJournal = await journalModel.findByIdAndRemove(params.id);
		if (!deletedJournal) {
			return { error: "Journal entry not found" }; // Handle the case where the journal entry is not found
		}

		console.log("Journal entry deleted successfully:");
		return { message: "Journal entry deleted successfully" }; // Return a success message
		}

	catch (error) { 
		console.error("Error deleting journal entry:", error);
		return { error: "Failed to delete journal entry" }; // Handle the error
	}
})


	// Start Prayers Route
.get("/prayer", async () => {
	try {
	// Use the Mongoose model to find all prayer entries
		const prayers = await prayerModel.find();
		return prayers; // Return the prayer entries as a response
	}
	catch (error) { console.error("Error retrieving prayer entries:", error);
	return { error: "Failed to retrieve prayer entries" }; } // Handle the error 
})

.post('/prayer', ({ body }) => {
	const prayer = new prayerModel(body);
	prayer.save().then(() => console.log("Saved Prayer Entry"));
})
	
.put('/prayer/:id', async ({ params, body }) => {
	try {
		// Use the Mongoose model to update the Prayer by ID
		const updatedPrayer = await prayerModel.findByIdAndUpdate(params.id, body, { new: true });

		if (!updatedPrayer) { 
			return { error: "Prayer not found" }; 
		} // Handle the case where the prayer is not found

		console.log("Prayer updated successfully");
		return updatedPrayer; // Return the updated Prayer as a response
	}
	catch (error) { console.error("Error updating prayer:", error);
	return { error: "Failed to update prayer" }; } // Handle the error
})
	
.delete('/prayer/:id', async ({ params }) => {
	try {
		// Use the Mongoose model to find and delete the journal entry by ID
		const deletedPrayer = await prayerModel.findByIdAndRemove(params.id);
		if (!deletedPrayer) {
			return { error: "Prayer not found" }; // Handle the case where the journal entry is not found
		}

		console.log("Prayer deleted successfully:");
		return { message: "Prayer deleted successfully" }; // Return a success message
		}

	catch (error) { 
		console.error("Error deleting prayer:", error);
		return { error: "Failed to delete prayer" }; // Handle the error
	}
})

.get('/api2', () => 'Test Elysia')




.listen(5000);


console.log(`Backend Server is running at ${app.server?.hostname}:${app.server?.port}`);
