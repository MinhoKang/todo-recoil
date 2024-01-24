import React from 'react';
import { useRecoilValue } from 'recoil';
import { countingCh } from '../App';

const Counting = () => {
  const count = useRecoilValue(countingCh);
  return <div>{count}</div>;
};

export default Counting;
