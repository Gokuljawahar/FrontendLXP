import React from 'react';
import { Provider } from 'react-redux';
import store from '../Vite/FrontendLXP/src/store';
import Routing from '../Vite/FrontendLXP/src/routes/Routing/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizProvider } from './components/Quiz And Feedback Module/QuizComponents/Learner/QuizContext';

function App() {
  return (
    <div >
      <Provider store={store}>
        <QuizProvider>
        <Routing />
        </QuizProvider>
      </Provider>
    </div>
  );
}

export default App;











