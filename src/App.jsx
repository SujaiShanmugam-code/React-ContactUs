import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactHeader from "./components/ContactHeader";
import Navigation from "./components/Navigation";
import Message from "./components/Message";

function App() {
  return (
    <>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      <Message />
    </>
  );
}

export default App;
