import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import "../../css/Home.css";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 800);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For now: simple placeholder for the frontend
  return (
    <Container className="announcement">
      {isMobile ? (
        <h5> Work in progress! 🔒 </h5>
      ) : (
        <h3>Work in progress! 🔒</h3>
      )}
    </Container>
  );
}

export default Home;
