import './App.css';
import { atom, selector, useRecoilState } from 'recoil';
import TextIn from './components/TextIn';
import Counting from './components/Counting';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const countingCh = selector({
  key: 'countingCh',
  get: ({ get }) => {
    const check = get(textState);

    return check.length;
  },
});

function App() {
  const [text, setText] = useRecoilState(textState);

  return (
    <div className="App">
      <TextIn />
      <Counting />
    </div>
  );
}

export default App;
