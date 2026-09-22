import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Research from '@/pages/Research';
import Ventures from '@/pages/Ventures';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* About is the landing page. /about stays valid for direct links. */}
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="research" element={<Research />} />
          <Route path="ventures" element={<Ventures />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
