const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('layout', {
        title: 'Home',
        currentPage: 'home',
        description: 'Building Dreams, Constructing Futures - Minjaz Group construction company in Saudi Arabia',
        body: 'index',
        ogTitle: 'Minjaz Group - Professional Construction Company in Saudi Arabia',
        ogDescription: 'Leading construction company specializing in residential, commercial, and industrial projects. Reliable building contractors in Riyadh.',
        ogImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ogUrl: 'https://minjazgroup.com/',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Minjaz Group",
            "description": "Professional construction company specializing in residential, commercial, and industrial projects in Saudi Arabia",
            "url": "https://minjazgroup.com",
            "logo": "https://minjazgroup.com/images/logo.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressCountry": "SA"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-XX-XXX-XXXX",
                "contactType": "customer service",
                "email": "info@minjazgroup.com"
            },
            "sameAs": [
                "https://www.facebook.com/minjazgroup",
                "https://www.linkedin.com/company/minjazgroup"
            ]
        }
    });
});

app.get('/about', (req, res) => {
    res.render('layout', {
        title: 'About Us',
        currentPage: 'about',
        description: 'Learn about Minjaz Group\'s history, mission, and commitment to quality construction services',
        body: 'about',
        ogTitle: 'About Minjaz Group - Leading Construction Company in Saudi Arabia',
        ogDescription: 'Discover Minjaz Group\'s 15+ years of experience in professional construction services, certifications, and commitment to excellence.',
        ogImage: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1200&h=750&dpr=1',
        ogUrl: 'https://minjazgroup.com/about',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Minjaz Group",
            "description": "Learn about Minjaz Group's history, mission, and commitment to quality construction services in Saudi Arabia",
            "url": "https://minjazgroup.com/about",
            "mainEntity": {
                "@type": "Organization",
                "name": "Minjaz Group",
                "foundingDate": "2008",
                "description": "Professional construction company with 15+ years of experience",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Riyadh",
                    "addressCountry": "SA"
                }
            }
        }
    });
});

app.get('/services', (req, res) => {
    res.render('layout', {
        title: 'Services',
        currentPage: 'services',
        description: 'Professional construction services including residential, commercial, and industrial projects',
        body: 'services',
        ogTitle: 'Construction Services - Minjaz Group',
        ogDescription: 'Comprehensive construction services: residential, commercial, industrial projects. Expert building contractors in Saudi Arabia.',
        ogImage: 'https://cdn.pixabay.com/photo/2017/08/02/10/39/construction-2572465_1280.jpg',
        ogUrl: 'https://minjazgroup.com/services',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Construction Services",
            "description": "Professional construction services including residential, commercial, and industrial projects",
            "provider": {
                "@type": "Organization",
                "name": "Minjaz Group"
            },
            "serviceType": ["Residential Construction", "Commercial Construction", "Industrial Construction"],
            "areaServed": "Saudi Arabia"
        }
    });
});

app.get('/projects', (req, res) => {
    res.render('layout', {
        title: 'Projects',
        currentPage: 'projects',
        description: 'Explore our portfolio of completed construction projects and case studies',
        body: 'projects',
        ogTitle: 'Construction Projects Portfolio - Minjaz Group',
        ogDescription: 'View our completed construction projects including residential complexes, commercial towers, and industrial facilities in Saudi Arabia.',
        ogImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        ogUrl: 'https://minjazgroup.com/projects',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Construction Projects Portfolio",
            "description": "Portfolio of completed construction projects by Minjaz Group",
            "url": "https://minjazgroup.com/projects",
            "mainEntity": {
                "@type": "ItemList",
                "name": "Minjaz Group Projects",
                "numberOfItems": 4,
                "itemListElement": [
                    {
                        "@type": "Project",
                        "name": "Riyadh Residential Complex",
                        "description": "Modern 50-unit residential complex"
                    },
                    {
                        "@type": "Project",
                        "name": "Jeddah Commercial Tower",
                        "description": "15-story commercial office building"
                    },
                    {
                        "@type": "Project",
                        "name": "Dammam Industrial Park",
                        "description": "Large-scale industrial complex"
                    },
                    {
                        "@type": "Project",
                        "name": "Mecca Hotel Renovation",
                        "description": "200-room hotel renovation"
                    }
                ]
            }
        }
    });
});

app.get('/contact', (req, res) => {
    res.render('layout', {
        title: 'Contact',
        currentPage: 'contact',
        description: 'Get in touch with Minjaz Group for your construction needs',
        body: 'contact',
        ogTitle: 'Contact Minjaz Group - Construction Company in Saudi Arabia',
        ogDescription: 'Contact Minjaz Group for professional construction services. Get a quote for your residential, commercial, or industrial project.',
        ogImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ogUrl: 'https://minjazgroup.com/contact',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Minjaz Group",
            "description": "Get in touch with Minjaz Group for construction services",
            "url": "https://minjazgroup.com/contact",
            "mainEntity": {
                "@type": "Organization",
                "name": "Minjaz Group",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Office Address",
                    "addressLocality": "Riyadh",
                    "addressCountry": "SA"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+966-XX-XXX-XXXX",
                    "contactType": "customer service",
                    "email": "info@minjazgroup.com",
                    "hoursAvailable": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "18:00"
                    }
                }
            }
        }
    });
});

// Handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).render('layout', {
            title: 'Contact',
            currentPage: 'contact',
            description: 'Get in touch with Minjaz Group for your construction needs',
            body: 'contact',
            ogTitle: 'Contact Minjaz Group - Construction Company in Saudi Arabia',
            ogDescription: 'Contact Minjaz Group for professional construction services. Get a quote for your residential, commercial, or industrial project.',
            ogImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ogUrl: 'https://minjazgroup.com/contact',
            structuredData: {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact Minjaz Group",
                "description": "Get in touch with Minjaz Group for construction services",
                "url": "https://minjazgroup.com/contact"
            },
            error: 'Please fill in all required fields.',
            formData: req.body
        });
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log it and redirect with success message
    console.log('Contact form submission:', { name, email, phone, service, message });

    res.render('layout', {
        title: 'Contact',
        currentPage: 'contact',
        description: 'Get in touch with Minjaz Group for your construction needs',
        body: 'contact',
        ogTitle: 'Contact Minjaz Group - Construction Company in Saudi Arabia',
        ogDescription: 'Contact Minjaz Group for professional construction services. Get a quote for your residential, commercial, or industrial project.',
        ogImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ogUrl: 'https://minjazgroup.com/contact',
        structuredData: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Minjaz Group",
            "description": "Get in touch with Minjaz Group for construction services",
            "url": "https://minjazgroup.com/contact"
        },
        success: 'Thank you for your message. We will get back to you soon!',
        formData: {}
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('layout', {
        title: 'Page Not Found',
        currentPage: '',
        description: 'The page you are looking for could not be found.',
        body: '404'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('layout', {
        title: 'Server Error',
        currentPage: '',
        description: 'An internal server error occurred.',
        body: '500'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Minjaz Group website server running on http://localhost:${PORT}`);
});