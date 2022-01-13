import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './store/store';


import './style/style.scss'
import { routes } from './routes';
function App() {
  return (
    <div className="App flex column">
      <Provider store={store}>
        <Router>
          <main>
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  exact
                  element={route.element}
                  path={route.path}
                />
              ))}
            </Routes>
          </main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
