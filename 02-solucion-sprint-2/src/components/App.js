import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Dummy from './Dummy';
import ErrorLetters from './ErrorLetters';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Instructions from './Instructions';
import Loading from './Loading';
import Options from './Options';
import SolutionLetters from './SolutionLetters';
// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWordFromApi().then(word => {
      setWord(word);
      setLoading(false);
    });
  }, []);

  // events

  const handleWord = value => {
    setWord(value);
    setUserLetters([]);
    setLastLetter('');
  };

  const handleLastLetter = value => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);
    userLetters.push(value);
    setUserLetters([...userLetters]);
  };

  // render helpers

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(letter => word.includes(letter) === false);
    return errorLetters.length;
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <Switch>
            <Route path="/" exact>
              <Loading loading={loading} />
              <SolutionLetters word={word} userLetters={userLetters} />
              <ErrorLetters word={word} userLetters={userLetters} />
              <Form lastLetter={lastLetter} handleLastLetter={handleLastLetter} />
            </Route>
            <Route path="/instructions">
              <Instructions />
            </Route>
            <Route path="/options">
              <Options word={word} handleWord={handleWord} />
            </Route>
          </Switch>
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
