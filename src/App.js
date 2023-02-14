import { Route, Routes } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import 'react-calendar/dist/Calendar.css'

//components
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import Customers from './pages/Customers';
import Orders from './pages/Orders';

//redux
import { Provider} from 'react-redux';
import store from './redux/store';

//styles
import './scss/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Dashboard />} />
                <Route path="orders" element={<Orders/>} />
                <Route path="customers" element={<Customers />} />
                <Route path="settings" element={<Settings />} />
                <Route path="stats" element={<Stats />} />       
            </Route>
          </Routes>
      </div>
    </Provider>
  );
}

export default App;
