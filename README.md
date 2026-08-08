<!-- React Router DOM Project -->

A simple React application demonstrating client-side routing using React Router DOM and Tailwind CSS. The project contains multiple pages such as Home, Login, Sign Up, and Dashboard, with a reusable Header and Footer.

🚀 Features
🏠 Home page
🔐 Login page
📝 Sign Up page
📊 Dashboard page
🧭 Navigation using NavLink
⚡ Client-side routing using React Router DOM
🔄 Nested routing using <Outlet />
📱 Responsive UI using Tailwind CSS
♻️ Reusable Header and Footer components
📦 Centralized component imports using Import.jsx
🛠️ Technologies Used
React
React Router DOM
Tailwind CSS
Vite
JavaScript (JSX)


<!-- 📁 Project Structure -->
src/
│
├── components/
│   ├── Dashboard/
│   │   └── Dashboard.jsx
│   │
│   ├── Footer/
│   │   └── Footer.jsx
│   │
│   ├── Header/
│   │   └── Header.jsx
│   │
│   ├── Home/
│   │   └── Home.jsx
│   │
│   ├── Log_in/
│   │   └── Login.jsx
│   │
│   ├── Sign_in/
│   │   └── SignUp.jsx
│   │
│   └── Import.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css


<!-- 🔀 Routing -->

The project uses createBrowserRouter to define the application routes.

Page	Route
Home	/
Login	/login
Sign Up	/signup
Dashboard	/dashboard

The main layout is handled by App.jsx.

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

<Outlet /> displays the component corresponding to the current route.

🧭 Navigation

The Header uses NavLink from React Router DOM:

<NavLink to="/login">
  Login
</NavLink>

<NavLink to="/signup">
  Sign Up
</NavLink>

<NavLink to="/dashboard">
  Dashboard
</NavLink>

NavLink can also be used to style the currently active page.


<!-- 📦 Installation -->

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Go into the project directory:

cd your-project-name

Install dependencies:

npm install

Start the development server:

npm run dev

The application will be available at the local Vite development URL shown in the terminal.

⚙️ React Router Installation

If React Router DOM is not already installed:

npm install react-router-dom
📌 What I Learned


<!-- This project demonstrates the fundamentals of React routing: -->


Creating routes with createBrowserRouter
Using RouterProvider
Creating nested routes
Using <Outlet />
Navigating with NavLink
Creating reusable React components
Organizing components into folders
Separating layout components from individual pages
🔮 Future Improvements

Possible improvements include:

Add form validation
Implement actual login/signup functionality
Add authentication
Protect the Dashboard route
Add a logout feature
Add a responsive mobile navigation menu
Connect the application to a backend API
Add user profile functionality


👨‍💻 Author

Karan Singh Rawat
Built as a React Router DOM learning project.