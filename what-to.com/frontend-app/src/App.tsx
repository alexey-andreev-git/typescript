import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import DashBoard from './pages/dashboard';
import { DASHBOARD_SIDEBAR_LINKS } from './lib/consts/sidebar';

// Function to update the data-bs-theme attribute
function updateTheme() {
  // Check if the preferred color scheme is dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Set data-bs-theme to dark
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    // Set data-bs-theme to light
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }
}

// Update the theme on initial load
updateTheme();

// Listen for changes in the preferred color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

function App() {
  // setTheme('dark');
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <Route key={link.key} path={link.path} Component={link.component} />
        ))}
        {/* <Route path="/" Component={Home}/>
        <Route path="/home" Component={Home} />
        <Route path="/dashboard" Component={DashBoard} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
