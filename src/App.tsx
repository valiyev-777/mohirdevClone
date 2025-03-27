import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import RootLayout from "./RootLayout";
import Kasblar from "./pages/kasblar";
import Asosiy from "./pages/asosiy";
import Header from "./components/header/header";
import ProtectedRoute from "./guards/ProtectedRoute";
import Kurslar from "./pages/kurslar";
import Register from "./pages/register";
import Portfolio from "./pages/portfolio";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Asosiy />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/kasblar" element={<Kasblar />} />
              <Route path="/kurslar" element={<Kurslar />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>
          </Route>
        </Routes>
        {/* <Main /> */}
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
