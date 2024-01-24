import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../App';

const TextIn = () => {
  const [text, setText] = useRecoilState(textState);
  const handlerChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h4>TYPING</h4>
      <input value={text} onChange={handlerChange} />
      <p>output: {text}</p>
    </div>
  );
};

export default TextIn;
