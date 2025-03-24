
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize scroll animation observer
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, [location]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[calc(100vh-160px)]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default MainLayout;
