import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategorias from "./components/categoria/formcategoria/FormCategoria";
import ListaCategorias from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarSeguro from "./components/seguros/deletarseguro/DeletarSeguro";
import FormSeguro from "./components/seguros/formseguro/FormSeguro";
import ListaSeguros from "./components/seguros/listaseguro/ListaSeguro";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />}></Route>
            <Route path="/cadastrarcategoria" element={<FormCategorias />} />
            <Route path="/editarcategoria/:id" element={<FormCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/postagens" element={<ListaSeguros />} />
            <Route path="/cadastrarseguro" element={<FormSeguro />} />
            <Route path="/editarseguro/:id" element={<FormSeguro />} />
            <Route path="/deletarseguro/:id" element={<DeletarSeguro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;