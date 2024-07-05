document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Display feedback in console (can be replaced with actual form submission logic)
    console.log('Feedback Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Rating:', rating);
    console.log('Comments:', comments);

    // Clear form after submission
    document.getElementById('feedbackForm').reset();

    alert('Thank you for your feedback!');
});
