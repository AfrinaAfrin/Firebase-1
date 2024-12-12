const deleteUser = (key) => {
    
    fetch(`https://your-project-id.firebaseio.com/users/${key}.json`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        console.log("User deleted successfully");
  
    
        const userRow = document.querySelector(`#user-${key}`);
        if (userRow) {
          userRow.remove();
        }
      })
      .catch(error => console.error("Error deleting user:", error));
  };
  