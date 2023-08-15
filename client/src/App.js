import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Normal routes imports
import Home from './pages/dashboard/home/Home';
import AboutMe from './pages/dashboard/about-me/about-me';
import Projects from './pages/dashboard/projecs/projects';
import ContactMe from './pages/dashboard/contact-me/contact-me';
import SharedLayout from './pages/dashboard/sharedLayout/SharedLayout';

// editable route imports
import EditProfile from './pages/editable/profile/EditProfile';
import EditProjects from './pages/editable/projects/EditProjects';
import EditLayout from './pages/editable/editableLayout/EditLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact-me" element={<ContactMe />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        {/* Editing Routes */}
        <Route path="/edit" element={<EditLayout />}>
          <Route index element={<EditProfile />} />
          <Route path="profile" element={<EditProfile />} />
          <Route path="projects" element={<EditProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
