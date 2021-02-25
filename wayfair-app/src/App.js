import Navbar from './components/Navbar';
import routes from './config/routes';
import Footer from './components/Footer';

import './App.css';
import WayfarerContainer from './containers/WayfarerContainer';

function App() {
  return (
    <div>
      <Navbar />
      {routes}
      
      <Footer />
    </div>
  );
}

export default App;
