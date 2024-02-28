function bookFlight(airline) {
    document.getElementById('booking-modal').style.display = 'block';
    document.getElementById('selected-airline').innerHTML = airline;
  }
  
  function confirmBooking() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Perform validation here if needed
  
    // Example: Simple alert to display the booking details
    alert('Booking Confirmed!\nName: ' + fullname + '\nEmail: ' + email + '\nPhone: ' + phone);
  
    // Clear form fields after booking
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  
    // Close booking modal
    document.getElementById('booking-modal').style.display = 'none';
  }
  