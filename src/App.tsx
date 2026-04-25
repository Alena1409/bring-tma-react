import { Route, Routes } from 'react-router-dom';
import Header from './components/ui/header/Header';
import Home from './pages/home/Home';
import Service from './pages/service/Service';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
