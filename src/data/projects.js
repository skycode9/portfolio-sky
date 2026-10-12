// Images live in /public/projects (2:1 ratio, 1600px wide). Replace a file to swap a screenshot.
const projects = [
  {
    id: 1,
    name: "Lumen LMS",
    type: "LMS Platform",
    stack: "Next.js · TypeScript · PostgreSQL · Stripe",
    description: "A course marketplace with student, instructor and admin dashboards, Stripe checkout, quizzes, certificates, messaging and analytics.",
    image: "/projects/lumen-lms.jpg",
    link: "https://lms-app-psi-one.vercel.app/"
  },
  {
    id: 2,
    name: "E-Shopify",
    type: "E-Commerce",
    stack: "React · Node.js · Express · PostgreSQL · Docker",
    description: "An online store with an admin panel, Stripe and PayPal payments, Google sign-in, promo codes and order management.",
    image: "/projects/e-shopify.jpg",
    link: "https://pern-ecom-4pe4.onrender.com/"
  },
  {
    id: 3,
    name: "StayScape",
    type: "Booking App",
    stack: "Next.js · PostgreSQL",
    description: "An Airbnb-style booking app with property listings, search, a host dashboard, image uploads and date-based reservations with no double bookings.",
    image: "/projects/stayscape.jpg",
    link: "https://airbnb-clone-beta-lyart.vercel.app/"
  },
  {
    id: 4,
    name: "Movie App",
    type: "Entertainment",
    stack: "React · Tailwind CSS · TMDB API",
    description: "A responsive movie browser powered by the TMDB API, with search and detail pages for every title.",
    image: "/projects/movie-app.jpg",
    link: "https://sky-code-movie-react-app.vercel.app/"
  },
  {
    id: 5,
    name: "DevTinder",
    type: "Social Network",
    stack: "MongoDB · Express · React · Node.js · DaisyUI",
    description: "A matchmaking app for developers with authentication, a matching algorithm and connection requests.",
    image: "/projects/devtinder.jpg",
    link: "https://devtinder-yajw.onrender.com/login"
  }
];

export default projects;
