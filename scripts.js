// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Form submission (placeholder for backend integration)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your order! Our team will contact you shortly to confirm your details.');
    // Add backend integration here (e.g., send form data to your server)
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;

    if (!fullName || !phoneNumber || !deliveryAddress) {
        alert('Please fill out all required fields.');
        return;
    }

    // Simulate backend submission (replace with actual API call)
    fetch('https://your-backend-api.com/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phoneNumber, deliveryAddress, email: document.getElementById('email').value })
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your order! Our team will contact you shortly.');
        form.reset();
    })
    .catch(error => alert('Error submitting order. Please try again.'));
});

// Countdown Timer
function startCountdown() {
    const endDate = new Date('2025-06-01T23:59:59').getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Offer Expired!';
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m`;
    }, 1000);
}

// Start countdown when page loads
startCountdown();

// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});