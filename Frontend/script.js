// Mock property data (replace with API call in a real application)
const properties = [
    {
        id: 1,
        title: "Modern Villa",
        location: "Thane, Mumbai",
        price: "$750,000",
        image: "Assests/Property1.jpg",
        description: "A beautiful modern villa with 4 bedrooms, 3 bathrooms, and a spacious backyard. Perfect for families looking for a luxurious home."
    },
    {
        id: 2,
        title: "Downtown Apartment",
        location: "Goa",
        price: "$500,000",
        image: "Assests/property2.jpg",
        description: "A cozy apartment in the heart of the city with 2 bedrooms, 1 bathroom, and stunning city views."
    },
    {
        id: 3,
        title: "UrbanNest",
        location: "Hinjewadi, Pune",
        price: "$900,000",
        image: "Assests/property3.jpg",
        description: "A luxurious beachfront condo with 3 bedrooms, 2 bathrooms, and direct access to the beach."
    },
    {
        id: 4,
        title: "Beachfront Condo",
        location: "Banglore",
        price: "$900,000",
        image: "Assests/property4.jpg",
        description: "A luxurious beachfront condo with 3 bedrooms, 2 bathrooms, and direct access to the beach."
    },
    {
        id: 5,
        title: "Whispering Pines",
        location: "New Delhi",
        price: "$900,000",
        image: "Assests/property5.jpg",
        description: "A luxurious beachfront condo with 3 bedrooms, 2 bathrooms, and direct access to the beach."
    },
    {
        id: 6,
        title: "Stonebrook Haven",
        location: "Powai,Mumbai",
        price: "$900,000",
        image: "Assests/property6.jpg",
        description: "A luxurious beachfront condo with 3 bedrooms, 2 bathrooms, and direct access to the beach."
    }
];

// Function to display properties
function displayProperties(propertyList) {
    const propertyGrid = document.getElementById('propertyGrid');
    propertyGrid.innerHTML = ''; // Clear existing properties

    propertyList.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <p class="price">${property.price}</p>
                <button class="view-btn" data-id="${property.id}">View Details</button>
            </div>
        `;
        propertyGrid.appendChild(card);
    });

    // Add event listeners to "View Details" buttons
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const propertyId = e.target.getAttribute('data-id');
            const property = properties.find(p => p.id == propertyId);
            openPropertyModal(property);
        });
    });
}

// Function to open property modal
function openPropertyModal(property) {
    const modal = document.getElementById('propertyModal');
    document.getElementById('modalTitle').textContent = property.title;
    document.getElementById('modalImage').src = property.image;
    document.getElementById('modalLocation').textContent = `Location: ${property.location}`;
    document.getElementById('modalPrice').textContent = `Price: ${property.price}`;
    document.getElementById('modalDescription').textContent = property.description;
    modal.style.display = 'flex';
}

// Function to open contact modal
function openContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'flex';
}

// Function to close modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProperties = properties.filter(property =>
        property.location.toLowerCase().includes(searchTerm)
    );
    displayProperties(filteredProperties);
});

// Event listeners for modals
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Open contact modal on "Contact Us" click
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        closeModal('contactModal');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Initialize properties on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProperties(properties);
});

// Contact form submission for contact.html
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});