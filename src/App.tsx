import { BrowserRouter, Routes, } from "react-router-dom"; // Adicionei o Route aqui
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;