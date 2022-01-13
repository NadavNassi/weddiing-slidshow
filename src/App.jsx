import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './store/store';


import './style/style.scss'
import { routes } from './routes';

function App() {
  return (
    <div className="App flex column">
      <BrowserRouter>
        <Provider store={store}>
          <main>
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                />
              ))}
            </Routes>
          </main>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
