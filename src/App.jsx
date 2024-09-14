/**
 * @copyright 2024 de-horst
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
