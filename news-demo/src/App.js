import './App.css';
import { APIHandlerProvider } from './APIHandler';
import News from './Components/News';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <APIHandlerProvider>
        <h1 className="text-center my-5">Top tech hírek - Magyarország</h1>
        <div className="container-fill">
          <News />
        </div>
      </APIHandlerProvider>
    </div>
  );
}

export default App;