// Function to add a new recommendation with the user's name
function addRecommendation() {
    const name = document.getElementById('name').value.trim();
    const newRecommendation = document.getElementById('new-recommendation').value.trim();
    
    if (name && newRecommendation) {
      const recommendationList = document.getElementById('recommendation-list').querySelector('ul');
      const newListItem = document.createElement('li');
      
      newListItem.innerHTML = `<strong>${name}:</strong> ${newRecommendation}`;
      recommendationList.appendChild(newListItem);
      
      alert('Recommendation added successfully!');
      
      // Clear the input fields
      document.getElementById('name').value = '';
      document.getElementById('new-recommendation').value = '';
    } else {
      alert('Please enter both your name and a recommendation.');
    }
  }
  