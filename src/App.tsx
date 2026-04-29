import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppProvider } from "./context/AppContext";
import ScrollRestoration from "./components/ScrollRestoration";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Articles from "./pages/Resources/Articles";
import Help from "./pages/Resources/Help";
import MediaKitPage from "./pages/Resources/Media-kit";
import BulkCampaign from "./pages/Product/Bulk-Campaign";
import Chatbot from "./pages/Product/Chatbot";
import Automation from "./pages/Product/Automation";
import StartupProgram from "./pages/More/Startup";
import PartnerProgram from "./pages/More/Partner";
import MultiBusiness from "./pages/Product/Multi-Business";
import LiveInbox from "./pages/Product/LiveInbox";
import Pricing from "./pages/pricing/Pricing";
import Feature from "./pages/Feature/Feature";
import Integration from "./pages/Integration/Integration";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Hub from "./pages/Hub/Hub";
import About from "./pages/About/About";



function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Navbar/>
          <ScrollRestoration>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources/articles" element={<Articles />} />
              <Route path="/resources/help" element={<Help />} />
              <Route path="/resources/media-kit" element={<MediaKitPage />} />
              <Route path="/products/bulk-campaigns" element={<BulkCampaign />} />
              <Route path="/products/multi-business" element={<MultiBusiness />} />
              <Route path="/products/chatbot-builder" element={<Chatbot />} />
              <Route path="/products/automation" element={<Automation />} />
              <Route path="/products/liveinbox" element={<LiveInbox />} />
              <Route path="/more/startup-program" element={<StartupProgram />} />
              <Route path="/more/partner-program" element={<PartnerProgram />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/feature/contact-crm" element={<Feature />} />
              <Route path="/integration" element={<Integration />} />
              <Route path="/product/hub" element={<Hub />} />
            </Routes>

          </ScrollRestoration>
          <Footer/>
        </Router>
      </AppProvider>
    </Provider>
  );
}

export default App;