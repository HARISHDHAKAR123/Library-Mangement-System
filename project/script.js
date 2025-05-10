// Data Storage
let books = JSON.parse(localStorage.getItem('books')) || [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780446310789",
        status: "Available"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        isbn: "9780451524935",
        status: "Borrowed"
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        status: "Borrowed"
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9780141439518",
        status: "Available"
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "9780316769488",
        status: "Borrowed"
    },
    {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "9780547928227",
        status: "Available"
    },
    {
        id: 7,
        title: "The Alchemist",
        author: "Paulo Coelho",
        isbn: "9780062315007",
        status: "Available"
    },
    {
        id: 8,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        isbn: "9780156013987",
        status: "Borrowed"
    },
    {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        isbn: "9780307474278",
        status: "Available"
    },
    {
        id: 10,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        isbn: "9781594631931",
        status: "Available"
    }
];

let members = JSON.parse(localStorage.getItem('members')) || [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@email.com",
        phone: "555-0101",
        status: "Active"
    },
    {
        id: 2,
        name: "Emma Wilson",
        email: "emma.wilson@email.com",
        phone: "555-0102",
        status: "Active"
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael.brown@email.com",
        phone: "555-0103",
        status: "Active"
    },
    {
        id: 4,
        name: "Sarah Davis",
        email: "sarah.davis@email.com",
        phone: "555-0104",
        status: "Active"
    },
    {
        id: 5,
        name: "James Johnson",
        email: "james.johnson@email.com",
        phone: "555-0105",
        status: "Active"
    }
];

let transactions = JSON.parse(localStorage.getItem('transactions')) || [
    {
        id: 1,
        bookId: 2,
        memberId: 1,
        issueDate: "2024-02-01",
        dueDate: "2024-02-15",
        status: "Active"
    },
    {
        id: 2,
        bookId: 3,
        memberId: 2,
        issueDate: "2024-02-05",
        dueDate: "2024-02-20",
        status: "Active"
    },
    {
        id: 3,
        bookId: 5,
        memberId: 3,
        issueDate: "2024-01-15",
        dueDate: "2024-01-30",
        status: "Active"
    },
    {
        id: 4,
        bookId: 8,
        memberId: 4,
        issueDate: "2024-01-20",
        dueDate: "2024-02-05",
        status: "Active"
    }
];

let payments = JSON.parse(localStorage.getItem('payments')) || [
    {
        id: 1,
        memberId: 3,
        amount: 5.00,
        type: "Late Fee",
        date: "2024-02-01",
        status: "Paid",
        description: "Late return fee for The Catcher in the Rye"
    },
    {
        id: 2,
        memberId: 4,
        amount: 3.50,
        type: "Late Fee",
        date: "2024-02-02",
        status: "Pending",
        description: "Late return fee for The Little Prince"
    }
];

// Online Books Data
let onlineBooks = JSON.parse(localStorage.getItem('onlineBooks')) || [
    // Technology Books
    {
        id: 1,
        title: "The Future of Technology",
        author: "John Smith",
        price: 19.99,
        category: "Technology",
        cover: "https://picsum.photos/seed/tech1/200/300",
        description: "A comprehensive guide to emerging technologies and their impact on society.",
        content: "Chapter 1: Introduction to Technology...",
        samplePages: 3
    },
    {
        id: 2,
        title: "Artificial Intelligence Revolution",
        author: "Dr. Sarah Chen",
        price: 24.99,
        category: "Technology",
        cover: "https://picsum.photos/seed/tech2/200/300",
        description: "Exploring the latest developments in AI and machine learning.",
        content: "Chapter 1: The Rise of AI...",
        samplePages: 3
    },
    {
        id: 3,
        title: "Blockchain Technology Explained",
        author: "Michael Rodriguez",
        price: 21.99,
        category: "Technology",
        cover: "https://picsum.photos/seed/tech3/200/300",
        description: "Understanding blockchain and its applications in modern business.",
        content: "Chapter 1: Blockchain Basics...",
        samplePages: 3
    },
    // Business Books
    {
        id: 4,
        title: "Business Strategy 101",
        author: "Sarah Johnson",
        price: 24.99,
        category: "Business",
        cover: "https://picsum.photos/seed/bus1/200/300",
        description: "Learn the fundamentals of business strategy and management.",
        content: "Chapter 1: Understanding Business Strategy...",
        samplePages: 3
    },
    {
        id: 5,
        title: "Digital Marketing Mastery",
        author: "David Wilson",
        price: 22.99,
        category: "Business",
        cover: "https://picsum.photos/seed/bus2/200/300",
        description: "A complete guide to modern digital marketing strategies.",
        content: "Chapter 1: Digital Marketing Fundamentals...",
        samplePages: 3
    },
    // Fiction Books
    {
        id: 6,
        title: "The Art of Fiction",
        author: "Michael Brown",
        price: 14.99,
        category: "Fiction",
        cover: "https://picsum.photos/seed/fict1/200/300",
        description: "A masterclass in creative writing and storytelling.",
        content: "Chapter 1: The Elements of Storytelling...",
        samplePages: 3
    },
    {
        id: 7,
        title: "Eternal Echoes",
        author: "Emily Parker",
        price: 16.99,
        category: "Fiction",
        cover: "https://picsum.photos/seed/fict2/200/300",
        description: "A captivating tale of love and destiny across generations.",
        content: "Chapter 1: The Beginning...",
        samplePages: 3
    },
    // Science Books
    {
        id: 8,
        title: "Quantum Physics for Beginners",
        author: "Dr. James Wilson",
        price: 23.99,
        category: "Science",
        cover: "https://picsum.photos/seed/sci1/200/300",
        description: "An accessible introduction to quantum physics concepts.",
        content: "Chapter 1: Introduction to Quantum Mechanics...",
        samplePages: 3
    },
    {
        id: 9,
        title: "The Human Brain",
        author: "Dr. Lisa Chen",
        price: 25.99,
        category: "Science",
        cover: "https://picsum.photos/seed/sci2/200/300",
        description: "Exploring the mysteries of human consciousness and brain function.",
        content: "Chapter 1: Brain Structure and Function...",
        samplePages: 3
    },
    // Additional Books (91 more to reach 100)
    {
        id: 10,
        title: "Web Development Bootcamp",
        author: "Alex Thompson",
        price: 29.99,
        category: "Technology",
        cover: "https://picsum.photos/seed/tech4/200/300",
        description: "Complete guide to modern web development technologies.",
        content: "Chapter 1: HTML and CSS Fundamentals...",
        samplePages: 3
    },
    // ... continuing with more books ...
    {
        id: 100,
        title: "The Future of Space Exploration",
        author: "Dr. Robert Martinez",
        price: 27.99,
        category: "Science",
        cover: "https://picsum.photos/seed/sci100/200/300",
        description: "A comprehensive look at the future of space travel and colonization.",
        content: "Chapter 1: The History of Space Exploration...",
        samplePages: 3
    }
];

// Generate remaining books (90 more)
const categories = ["Technology", "Business", "Fiction", "Science", "History", "Philosophy", "Psychology", "Health", "Art", "Music"];
const firstNames = ["John", "Sarah", "Michael", "Emma", "David", "Lisa", "James", "Maria", "Robert", "Anna", "William", "Sophia", "Daniel", "Olivia", "Matthew"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson"];

for (let i = 11; i <= 100; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const price = (Math.random() * 20 + 10).toFixed(2); // Random price between $10 and $30

    onlineBooks.push({
        id: i,
        title: `${category} Insights: Volume ${i}`,
        author: `${firstName} ${lastName}`,
        price: parseFloat(price),
        category: category,
        cover: `https://picsum.photos/seed/book${i}/200/300`,
        description: `A comprehensive exploration of ${category.toLowerCase()} concepts and applications.`,
        content: `Chapter 1: Introduction to ${category}...`,
        samplePages: 3
    });
}

// Save the updated online books to localStorage
localStorage.setItem('onlineBooks', JSON.stringify(onlineBooks));

// DOM Elements
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// DOM Elements for Online Books
const onlineBooksGrid = document.getElementById('onlineBooksGrid');
const searchOnlineBooks = document.getElementById('searchOnlineBooks');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const bookPreviewModal = document.getElementById('bookPreviewModal');
const readingModal = document.getElementById('readingModal');
const previewBookCover = document.getElementById('previewBookCover');
const previewBookTitle = document.getElementById('previewBookTitle');
const previewBookAuthor = document.getElementById('previewBookAuthor');
const previewBookPrice = document.getElementById('previewBookPrice');
const previewBookDescription = document.getElementById('previewBookDescription');
const purchaseBookBtn = document.getElementById('purchaseBookBtn');
const readSampleBtn = document.getElementById('readSampleBtn');
const readingContent = document.getElementById('readingContent');
const pageNumber = document.getElementById('pageNumber');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

let currentBook = null;
let currentPage = 1;

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements for Cart
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize cart count
updateCartCount();

// Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.dataset.section;
        showSection(section);
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// Modal Functions
function showModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
}

closeModal.addEventListener('click', hideModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

// Book Management
document.getElementById('addBookBtn').addEventListener('click', () => {
    const content = `
        <h2>Add New Book</h2>
        <form id="addBookForm">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" required>
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" id="author" required>
            </div>
            <div class="form-group">
                <label for="isbn">ISBN</label>
                <input type="text" id="isbn" required>
            </div>
            <button type="submit" class="btn primary">Add Book</button>
        </form>
    `;
    showModal(content);

    document.getElementById('addBookForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const book = {
            id: Date.now(),
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            isbn: document.getElementById('isbn').value,
            status: 'Available'
        };
        books.push(book);
        saveData();
        updateBooksTable();
        hideModal();
        updateDashboard();
    });
});

function updateBooksTable() {
    const tbody = document.getElementById('booksTableBody');
    tbody.innerHTML = '';
    books.forEach(book => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.status}</td>
            <td>
                <button class="btn" onclick="editBook(${book.id})">Edit</button>
                <button class="btn" onclick="deleteBook(${book.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Member Management
document.getElementById('addMemberBtn').addEventListener('click', () => {
    const content = `
        <h2>Add New Member</h2>
        <form id="addMemberForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" required>
            </div>
            <button type="submit" class="btn primary">Add Member</button>
        </form>
    `;
    showModal(content);

    document.getElementById('addMemberForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const member = {
            id: Date.now(),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            status: 'Active'
        };
        members.push(member);
        saveData();
        updateMembersTable();
        hideModal();
        updateDashboard();
    });
});

function updateMembersTable() {
    const tbody = document.getElementById('membersTableBody');
    tbody.innerHTML = '';
    members.forEach(member => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>${member.status}</td>
            <td>
                <button class="btn" onclick="editMember(${member.id})">Edit</button>
                <button class="btn" onclick="deleteMember(${member.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Transaction Management
document.getElementById('newTransactionBtn').addEventListener('click', () => {
    const content = `
        <h2>New Transaction</h2>
        <form id="newTransactionForm">
            <div class="form-group">
                <label for="bookSelect">Book</label>
                <select id="bookSelect" required>
                    ${books.filter(book => book.status === 'Available')
                        .map(book => `<option value="${book.id}">${book.title}</option>`)
                        .join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="memberSelect">Member</label>
                <select id="memberSelect" required>
                    ${members.filter(member => member.status === 'Active')
                        .map(member => `<option value="${member.id}">${member.name}</option>`)
                        .join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="dueDate">Due Date</label>
                <input type="date" id="dueDate" required>
            </div>
            <button type="submit" class="btn primary">Create Transaction</button>
        </form>
    `;
    showModal(content);

    document.getElementById('newTransactionForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const bookId = parseInt(document.getElementById('bookSelect').value);
        const memberId = parseInt(document.getElementById('memberSelect').value);
        const dueDate = document.getElementById('dueDate').value;

        const transaction = {
            id: Date.now(),
            bookId,
            memberId,
            issueDate: new Date().toISOString().split('T')[0],
            dueDate,
            status: 'Active'
        };

        // Update book status
        const book = books.find(b => b.id === bookId);
        if (book) {
            book.status = 'Borrowed';
        }

        transactions.push(transaction);
        saveData();
        updateTransactionsTable();
        updateBooksTable();
        hideModal();
        updateDashboard();
    });
});

function updateTransactionsTable() {
    const tbody = document.getElementById('transactionsTableBody');
    tbody.innerHTML = '';
    transactions.forEach(transaction => {
        const book = books.find(b => b.id === transaction.bookId);
        const member = members.find(m => m.id === transaction.memberId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${transaction.id}</td>
            <td>${book ? book.title : 'N/A'}</td>
            <td>${member ? member.name : 'N/A'}</td>
            <td>${transaction.issueDate}</td>
            <td>${transaction.dueDate}</td>
            <td>${transaction.status}</td>
            <td>
                <button class="btn" onclick="returnBook(${transaction.id})">Return</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Payment Management
document.getElementById('newPaymentBtn').addEventListener('click', () => {
    const content = `
        <h2>New Payment</h2>
        <form id="newPaymentForm">
            <div class="form-group">
                <label for="memberSelect">Member</label>
                <select id="memberSelect" required>
                    ${members.map(member => `<option value="${member.id}">${member.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="paymentType">Payment Type</label>
                <select id="paymentType" required>
                    <option value="Late Fee">Late Fee</option>
                    <option value="Membership">Membership</option>
                    <option value="Book Rental">Book Rental</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="amount">Amount ($)</label>
                <input type="number" id="amount" step="0.01" min="0" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" required></textarea>
            </div>
            <button type="submit" class="btn primary">Create Payment</button>
        </form>
    `;
    showModal(content);

    document.getElementById('newPaymentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const payment = {
            id: Date.now(),
            memberId: parseInt(document.getElementById('memberSelect').value),
            amount: parseFloat(document.getElementById('amount').value),
            type: document.getElementById('paymentType').value,
            date: new Date().toISOString().split('T')[0],
            status: "Pending",
            description: document.getElementById('description').value
        };
        payments.push(payment);
        saveData();
        updatePaymentsTable();
        hideModal();
    });
});

function updatePaymentsTable() {
    const tbody = document.getElementById('paymentsTableBody');
    tbody.innerHTML = '';
    payments.forEach(payment => {
        const member = members.find(m => m.id === payment.memberId);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${payment.id}</td>
            <td>${member ? member.name : 'N/A'}</td>
            <td>$${payment.amount.toFixed(2)}</td>
            <td>${payment.type}</td>
            <td>${payment.date}</td>
            <td>
                <span class="status-badge ${payment.status.toLowerCase()}">${payment.status}</span>
            </td>
            <td>
                <button class="btn" onclick="processPayment(${payment.id})" ${payment.status === 'Paid' ? 'disabled' : ''}>
                    ${payment.status === 'Paid' ? 'Paid' : 'Process Payment'}
                </button>
                <button class="btn" onclick="viewPaymentDetails(${payment.id})">Details</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function processPayment(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    if (payment) {
        payment.status = 'Paid';
        saveData();
        updatePaymentsTable();
    }
}

function viewPaymentDetails(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    const member = members.find(m => m.id === payment.memberId);
    if (payment) {
        const content = `
            <h2>Payment Details</h2>
            <div class="payment-details">
                <p><strong>Payment ID:</strong> ${payment.id}</p>
                <p><strong>Member:</strong> ${member ? member.name : 'N/A'}</p>
                <p><strong>Amount:</strong> $${payment.amount.toFixed(2)}</p>
                <p><strong>Type:</strong> ${payment.type}</p>
                <p><strong>Date:</strong> ${payment.date}</p>
                <p><strong>Status:</strong> ${payment.status}</p>
                <p><strong>Description:</strong> ${payment.description}</p>
            </div>
        `;
        showModal(content);
    }
}

// Utility Functions
function saveData() {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('members', JSON.stringify(members));
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('payments', JSON.stringify(payments));
}

function updateDashboard() {
    document.getElementById('totalBooks').textContent = books.length;
    document.getElementById('totalMembers').textContent = members.length;
    document.getElementById('activeLoans').textContent = transactions.filter(t => t.status === 'Active').length;
    document.getElementById('overdueBooks').textContent = transactions.filter(t => {
        return t.status === 'Active' && new Date(t.dueDate) < new Date();
    }).length;
}

// Search Functionality
document.getElementById('searchBooks').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.isbn.toLowerCase().includes(searchTerm)
    );
    updateBooksTable(filteredBooks);
});

document.getElementById('searchMembers').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchTerm) ||
        member.email.toLowerCase().includes(searchTerm) ||
        member.phone.toLowerCase().includes(searchTerm)
    );
    updateMembersTable(filteredMembers);
});

document.getElementById('searchPayments').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPayments = payments.filter(payment => {
        const member = members.find(m => m.id === payment.memberId);
        return member && (
            member.name.toLowerCase().includes(searchTerm) ||
            payment.type.toLowerCase().includes(searchTerm) ||
            payment.status.toLowerCase().includes(searchTerm)
        );
    });
    updatePaymentsTable(filteredPayments);
});

// Display Online Books
function displayOnlineBooks(books = onlineBooks) {
    onlineBooksGrid.innerHTML = '';
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="price">$${book.price.toFixed(2)}</p>
            </div>
        `;
        bookCard.addEventListener('click', () => showBookPreview(book));
        onlineBooksGrid.appendChild(bookCard);
    });
}

// Add this before the showBookPreview function
const bookSamples = {
    "AI Revolution 2024": `Chapter 1: The Dawn of Artificial Intelligence

The year 2024 marks a pivotal moment in the evolution of artificial intelligence. As we stand at the threshold of a new era, the impact of AI on our daily lives has become more profound than ever before. This chapter explores the fundamental concepts that have shaped the current AI landscape.

The Evolution of Machine Learning
Machine learning has undergone a remarkable transformation over the past decade. From simple pattern recognition to complex neural networks, the technology has evolved to understand and process information in ways that mimic human cognition. Deep learning algorithms now power everything from voice assistants to autonomous vehicles.

Ethical Considerations
As AI systems become more sophisticated, questions about ethics and responsibility have come to the forefront. How do we ensure that AI systems make fair and unbiased decisions? What safeguards should be in place to protect privacy and security? These are crucial questions that we must address as we move forward.`,

    "Future of Technology": `Chapter 1: Emerging Technologies

The landscape of technology is constantly evolving, bringing new innovations that reshape our world. This chapter delves into the cutting-edge developments that are set to transform our future.

Quantum Computing
Quantum computing represents a paradigm shift in computational power. Unlike classical computers that use bits, quantum computers use quantum bits or qubits, allowing them to process information in ways that were previously impossible. This technology has the potential to revolutionize fields such as cryptography, drug discovery, and climate modeling.

Internet of Things (IoT)
The IoT ecosystem continues to expand, connecting billions of devices worldwide. Smart homes, wearable technology, and industrial automation are just the beginning. As 5G networks become more widespread, the possibilities for IoT applications will grow exponentially.`,

    "Digital Marketing 2024": `Chapter 1: The Digital Marketing Landscape

Digital marketing has transformed the way businesses connect with their customers. In 2024, the field continues to evolve with new technologies and strategies emerging constantly.

Social Media Marketing
Social media platforms have become essential tools for businesses to engage with their audience. The rise of short-form video content, live streaming, and social commerce has created new opportunities for brands to connect with consumers in meaningful ways.

Data-Driven Marketing
The importance of data in marketing decisions cannot be overstated. Advanced analytics tools and AI-powered insights help marketers understand customer behavior and optimize their campaigns for better results.`,

    "Quantum Computing Basics": `Chapter 1: Introduction to Quantum Computing

Quantum computing represents one of the most exciting frontiers in computer science. This chapter provides a foundation for understanding the principles that make quantum computing possible.

Quantum Bits and Superposition
Unlike classical bits that can be either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously through a phenomenon called superposition. This property allows quantum computers to process vast amounts of information in parallel.

Quantum Entanglement
One of the most fascinating aspects of quantum mechanics is entanglement, where particles become correlated in such a way that the quantum state of each particle cannot be described independently.`,

    "Blockchain Technology": `Chapter 1: Understanding Blockchain

Blockchain technology has emerged as a revolutionary force in the digital world, offering new ways to secure and verify transactions.

The Basics of Blockchain
At its core, a blockchain is a distributed ledger that records transactions across a network of computers. Each block in the chain contains a number of transactions, and every time a new transaction occurs, a record of that transaction is added to every participant's ledger.

Cryptography and Security
Blockchain's security is built on cryptographic principles. Each block contains a cryptographic hash of the previous block, creating a chain that is virtually impossible to alter without detection.`,

    "Web Development 2024": `Chapter 1: Modern Web Development

The field of web development continues to evolve rapidly, with new frameworks, tools, and best practices emerging regularly.

Frontend Development
Modern frontend development focuses on creating responsive, accessible, and performant user interfaces. Frameworks like React, Vue, and Angular have revolutionized how we build web applications, while tools like Web Components enable greater code reusability.

Backend Development
The backend landscape has seen significant changes with the rise of serverless architectures and microservices. Node.js, Python, and Go are among the popular choices for building scalable backend systems.`,

    "Data Science Essentials": `Chapter 1: Foundations of Data Science

Data science has become an essential field in today's data-driven world. This chapter covers the fundamental concepts that every data scientist should know.

Data Collection and Cleaning
The first step in any data science project is collecting and cleaning data. This process involves identifying relevant data sources, handling missing values, and ensuring data quality. Proper data preparation is crucial for obtaining accurate results.

Statistical Analysis
Statistical methods form the backbone of data science. From descriptive statistics to inferential analysis, these techniques help us understand patterns and relationships in data.`,

    "Cloud Computing Guide": `Chapter 1: Introduction to Cloud Computing

Cloud computing has transformed how businesses and individuals access and manage computing resources.

Cloud Service Models
The three main cloud service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each model offers different levels of abstraction and management.

Cloud Deployment Models
Organizations can choose from various deployment models, including public cloud, private cloud, and hybrid cloud. Each model has its own advantages and considerations regarding security, cost, and control.`
};

// Update the showBookPreview function
function showBookPreview(book) {
    currentBook = book;
    previewBookCover.src = book.cover;
    previewBookTitle.textContent = book.title;
    previewBookAuthor.textContent = book.author;
    previewBookPrice.textContent = `$${book.price.toFixed(2)}`;
    previewBookDescription.textContent = book.description;
    
    // Add sample content to the book object
    currentBook.content = bookSamples[book.title] || "Sample content not available.";
    currentBook.samplePages = 3;
    
    // Update book actions to include Add to Cart button
    const bookActions = document.querySelector('.book-actions');
    bookActions.innerHTML = `
        <button class="add-to-cart-btn" onclick="addToCart(currentBook)">
            <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button class="btn" onclick="readSample()">Read Sample</button>
    `;
    
    bookPreviewModal.style.display = 'block';
}

// Cart Icon Click Event
document.getElementById('cartIcon').addEventListener('click', () => {
    updateCartView();
    cartModal.style.display = 'block';
});

// Clear Cart Event
clearCartBtn.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartView();
    showSuccess('Cart cleared');
});

// Close Cart Modal
cartModal.querySelector('.close').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close cart modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Add to Cart Function
function addToCart(book) {
    if (!cart.some(item => item.id === book.id)) {
        cart.push(book);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showSuccess('Book added to cart');
        
        // Close book preview modal
        bookPreviewModal.style.display = 'none';
        
        // Show checkout modal with payment options
        const checkoutModal = document.getElementById('checkoutModal');
        const checkoutItems = document.getElementById('checkoutItems');
        const checkoutTotal = document.getElementById('checkoutTotal');
        
        // Update checkout items
        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <span>${item.title}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        checkoutTotal.textContent = `$${total.toFixed(2)}`;
        
        // Update QR code amount
        generateQRCode(total);
        
        // Show checkout modal
        checkoutModal.style.display = 'block';
        
        // Initialize payment gateway
        initPaymentGateway();
    } else {
        showError('Book is already in cart');
    }
}

// Update Cart View
function updateCartView() {
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '$0.00';
        return;
    }

    cart.forEach(book => {
        total += book.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="cart-item-info">
                <div class="cart-item-title">${book.title}</div>
                <div class="cart-item-author">${book.author}</div>
                <div class="cart-item-price">$${book.price.toFixed(2)}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${book.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Remove from Cart
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartView();
    
    // Show success message
    showSuccess('Book removed from cart');
}

// Show Success Message
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => successDiv.remove(), 3000);
}

// Show Error Message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

// Handle Sample Reading
function readSample() {
    if (!currentBook) return;
    
    currentPage = 1;
    updateReadingView();
    readingModal.style.display = 'block';
}

// Update Reading View
function updateReadingView() {
    if (!currentBook) return;
    
    // Split content into paragraphs
    const paragraphs = currentBook.content.split('\n\n');
    const maxPage = Math.min(currentBook.samplePages, paragraphs.length);
    
    if (currentPage > maxPage) {
        currentPage = maxPage;
    }
    
    // Get current paragraph
    const currentParagraph = paragraphs[currentPage - 1];
    
    // Format the content with proper spacing and styling
    readingContent.innerHTML = currentParagraph
        .split('\n')
        .map(line => {
            // Check if line is a heading (no indentation)
            if (line.trim() && !line.startsWith(' ')) {
                return `<h3>${line}</h3>`;
            }
            // Regular paragraph
            return `<p>${line}</p>`;
        })
        .join('');
    
    pageNumber.textContent = `Page ${currentPage} of ${maxPage}`;
    
    // Update button states
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === maxPage;
}

// Handle Page Navigation
prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateReadingView();
    }
});

nextPageBtn.addEventListener('click', () => {
    const maxPage = Math.min(currentBook.samplePages, currentBook.content.split('\n\n').length);
    if (currentPage < maxPage) {
        currentPage++;
        updateReadingView();
    }
});

// Search and Filter Online Books
function filterOnlineBooks() {
    const searchTerm = searchOnlineBooks.value.toLowerCase();
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    
    let filteredBooks = onlineBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                            book.author.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || book.category === category;
        const matchesPrice = !priceRange || (() => {
            const [min, max] = priceRange.split('-').map(Number);
            if (max) {
                return book.price >= min && book.price <= max;
            } else {
                return book.price >= min;
            }
        })();
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    displayOnlineBooks(filteredBooks);
}

searchOnlineBooks.addEventListener('input', filterOnlineBooks);
categoryFilter.addEventListener('change', filterOnlineBooks);
priceFilter.addEventListener('change', filterOnlineBooks);

// Close Modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        bookPreviewModal.style.display = 'none';
        readingModal.style.display = 'none';
    });
});

// Initialize
updateBooksTable();
updateMembersTable();
updateTransactionsTable();
updateDashboard();
updatePaymentsTable();
displayOnlineBooks();

// Payment Gateway Functionality
const paymentTabs = document.querySelectorAll('.payment-tab');
const paymentForms = document.querySelectorAll('.payment-form');
const cardForm = document.getElementById('cardForm');
const upiForm = document.getElementById('upiForm');
const qrForm = document.getElementById('qrForm');
const paymentBtn = document.getElementById('paymentBtn');
const qrCode = document.getElementById('qrCode');

// Switch between payment methods
paymentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        paymentTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all forms
        paymentForms.forEach(form => form.style.display = 'none');
        
        // Show selected form
        const formId = tab.getAttribute('data-form');
        document.getElementById(formId).style.display = 'block';
        
        // Update payment button text
        paymentBtn.innerHTML = `<i class="fas fa-lock"></i> Pay Securely`;
    });
});

// Generate QR Code
function generateQRCode(amount) {
    // In a real application, you would generate a QR code with payment details
    // For demo purposes, we'll use a placeholder QR code
    const qrPlaceholder = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Payment:${amount}`;
    qrCode.src = qrPlaceholder;
}

// Handle UPI App Selection
const upiApps = document.querySelectorAll('.upi-app-btn');
upiApps.forEach(app => {
    app.addEventListener('click', () => {
        upiApps.forEach(a => a.classList.remove('selected'));
        app.classList.add('selected');
        document.getElementById('upiId').value = app.getAttribute('data-upi');
    });
});

// Handle Card Number Input
const cardNumber = document.getElementById('cardNumber');
cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = value;
});

// Handle Expiry Date Input
const expiryDate = document.getElementById('expiryDate');
expiryDate.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

// Handle CVV Input
const cvv = document.getElementById('cvv');
cvv.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
});

// Handle Payment Submission
paymentBtn.addEventListener('click', async () => {
    const activeTab = document.querySelector('.payment-tab.active');
    const formId = activeTab.getAttribute('data-form');
    
    try {
        switch(formId) {
            case 'cardForm':
                await handleCardPayment();
                break;
            case 'upiForm':
                await handleUPIPayment();
                break;
            case 'qrForm':
                await handleQRPayment();
                break;
        }
    } catch (error) {
        showError(error.message);
    }
});

// Handle Card Payment
async function handleCardPayment() {
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billingAddress').value;
    
    if (!cardName || !cardNumber || !expiryDate || !cvv || !billingAddress) {
        throw new Error('Please fill in all card details');
    }
    
    // Simulate payment processing
    paymentBtn.disabled = true;
    paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Complete the purchase
    await completePurchase('card');
}

// Handle UPI Payment
async function handleUPIPayment() {
    const upiId = document.getElementById('upiId').value;
    
    if (!upiId) {
        throw new Error('Please enter UPI ID or select a UPI app');
    }
    
    // Simulate payment processing
    paymentBtn.disabled = true;
    paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Complete the purchase
    await completePurchase('upi');
}

// Handle QR Payment
async function handleQRPayment() {
    // Simulate payment processing
    paymentBtn.disabled = true;
    paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Complete the purchase
    await completePurchase('qr');
}

// Complete Purchase
async function completePurchase(paymentMethod) {
    try {
        // Create payment record
        const payment = {
            id: Date.now(),
            amount: calculateTotal(),
            method: paymentMethod,
            date: new Date().toISOString(),
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price
            }))
        };
        
        // Save payment to history
        const paymentHistory = JSON.parse(localStorage.getItem('paymentHistory') || '[]');
        paymentHistory.push(payment);
        localStorage.setItem('paymentHistory', JSON.stringify(paymentHistory));
        
        // Add books to purchased books
        const purchasedBooks = JSON.parse(localStorage.getItem('purchasedBooks') || '[]');
        cart.forEach(book => {
            if (!purchasedBooks.some(b => b.id === book.id)) {
                purchasedBooks.push(book);
            }
        });
        localStorage.setItem('purchasedBooks', JSON.stringify(purchasedBooks));
        
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show success message
        showSuccess('Payment successful! Your books have been added to your library.');
        
        // Close checkout modal
        document.getElementById('checkoutModal').style.display = 'none';
        
        // Reset payment button
        paymentBtn.disabled = false;
        paymentBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely';
        
    } catch (error) {
        showError('Payment failed. Please try again.');
        paymentBtn.disabled = false;
        paymentBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Securely';
    }
}

// Initialize payment gateway
function initPaymentGateway() {
    // Set default active tab
    paymentTabs[0].click();
    
    // Generate initial QR code
    generateQRCode(calculateTotal());
    
    // Update QR code when cart changes
    const observer = new MutationObserver(() => {
        generateQRCode(calculateTotal());
    });
    
    observer.observe(document.getElementById('cartTotal'), {
        childList: true,
        characterData: true
    });
}

// Call initialization when document is ready
document.addEventListener('DOMContentLoaded', () => {
    initPaymentGateway();
});

// Promotional Slider Functionality
function initPromoSlider() {
    const slider = document.querySelector('.promo-slider');
    const prevBtn = document.querySelector('.promo-prev');
    const nextBtn = document.querySelector('.promo-next');
    const slides = document.querySelectorAll('.promo-slide');
    
    if (!slider || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 24; // Width + gap

    function updateSlider() {
        slider.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });

        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === slides.length - 1 ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Auto-scroll functionality
    let autoScrollInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);

    // Pause auto-scroll on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 5000);
    });

    // Handle touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updateSlider();
            }
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        }
    }

    // Initialize button states
    updateSlider();
}

// Initialize promotional slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initPromoSlider();
    // ... rest of the existing initialization code ...
});

// Chatbot Functionality
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const sendMessageBtn = document.getElementById('sendMessage');
const minimizeChatbotBtn = document.getElementById('minimizeChatbot');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.querySelector('.chatbot-container');

// Chatbot responses based on keywords
const chatbotResponses = {
    greeting: [
        "Hello! How can I help you today?",
        "Hi there! What can I do for you?",
        "Welcome! How may I assist you?"
    ],
    help: [
        "I can help you with:\n- Finding books\n- Checking book availability\n- Managing your account\n- Payment information\n- General library information",
        "Here's what I can do:\n- Search for books\n- Check book status\n- Account management\n- Payment details\n- Library policies"
    ],
    book_search: [
        "You can search for books using the search bar in the Books section. You can search by title, author, or ISBN.",
        "To find a book, go to the Books section and use the search functionality. You can search by various criteria."
    ],
    availability: [
        "To check book availability, go to the Books section and look for the status column. It will show if the book is available or borrowed.",
        "You can check book availability in the Books section. The status will be clearly indicated for each book."
    ],
    account: [
        "For account management, go to the Members section. There you can view and update your information.",
        "You can manage your account details in the Members section of the library system."
    ],
    payment: [
        "Payment information can be found in the Payments section. You can view your payment history and make new payments there.",
        "To handle payments, visit the Payments section where you can manage all payment-related activities."
    ],
    default: [
        "I'm not sure I understand. Could you please rephrase your question?",
        "I'm still learning. Could you try asking that in a different way?",
        "I'm not quite sure about that. Is there something else I can help you with?"
    ]
};

// Function to add a message to the chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Function to get chatbot response
function getChatbotResponse(message) {
    message = message.toLowerCase();
    
    if (message.match(/^(hi|hello|hey|greetings)/)) {
        return getRandomResponse('greeting');
    }
    
    if (message.match(/help|what can you do|capabilities/)) {
        return getRandomResponse('help');
    }
    
    if (message.match(/search|find|look for|book search/)) {
        return getRandomResponse('book_search');
    }
    
    if (message.match(/available|availability|borrowed|status/)) {
        return getRandomResponse('availability');
    }
    
    if (message.match(/account|profile|member|my information/)) {
        return getRandomResponse('account');
    }
    
    if (message.match(/payment|pay|fee|cost|price/)) {
        return getRandomResponse('payment');
    }
    
    return getRandomResponse('default');
}

// Function to get random response from a category
function getRandomResponse(category) {
    const responses = chatbotResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Handle send message
function handleSendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            const response = getChatbotResponse(message);
            addMessage(response);
        }, 1000);
    }
}

// Event Listeners
sendMessageBtn.addEventListener('click', handleSendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// Toggle chatbot visibility
minimizeChatbotBtn.addEventListener('click', () => {
    chatbotContainer.classList.toggle('minimized');
});

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.remove('minimized');
});

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    // Add initial greeting
    addMessage("Hello! I'm your library assistant. How can I help you today?");
}); 