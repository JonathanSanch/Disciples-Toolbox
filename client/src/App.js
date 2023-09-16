import React from 'react';

function App() {
    const handleClick = () => {  
      // ID of the database instance you want to update
      const instanceId = "6505bab8c6ddf9bdc546e2dc"; // Replace with the actual ID
  
      // Send the DELETE request
      fetch(`/journal/${instanceId}`, {
        method: "DELETE",
        params: "6505bab8c6ddf9bdc546e2dc"
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete journal entry");
          }
          console.log("Journal entry deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting journal entry:", error);
        });
    };
  
    return (
      <div>
        <button onClick={handleClick}>Delete Entry</button>
      </div>
    );
  }
  
  export default App;

/*function App() {
  const handleClick = () => {
    // Data to send in the PUT request
    const data = {
      date: "newDate",
      text: "newText",
    };

    // ID of the database instance you want to update
    const instanceId = "6505bb19c6ddf9bdc546e2e0"; // Replace with the actual ID

    // Send the PUT request
    fetch(`/journal/${instanceId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update journal entry");
        }
        console.log("Journal entry updated successfully");
      })
      .catch((error) => {
        console.error("Error updating journal entry:", error);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Update Entry</button>
    </div>
  );
}

export default App;*/


/*function App() {
  const handleClick = () => {
    // Data to send in the POST request
    const data = {
      date: "foo",
      text: "bar",
    };

    // Send the POST request
    fetch("/journal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add journal entry");
      }
      console.log("Journal entry added successfully");
    })
    .catch((error) => {
      console.error("Error adding journal entry:", error);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;*/