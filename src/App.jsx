import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-mainBackground">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow overflow-y-auto" >
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
