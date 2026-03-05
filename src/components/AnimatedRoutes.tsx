import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "@/pages/Index";
import About from "@/pages/About";
import CompanyDetails from "@/pages/CompanyDetails";
import Products from "@/pages/Products";
import GlobalNetwork from "@/pages/GlobalNetwork";
import Certificates from "@/pages/Certificates";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/company" element={<PageWrapper><CompanyDetails /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/global-network" element={<PageWrapper><GlobalNetwork /></PageWrapper>} />
        <Route path="/certificates" element={<PageWrapper><Certificates /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
