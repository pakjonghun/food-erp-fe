import { useEffect, useState } from 'react';

interface Props {
  keyword: string;
  delay?: number;
}

const useTextDebounce = ({ keyword, delay = 200 }: Props) => {
  const [delayText, setDelayText] = useState(keyword);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayText(keyword);
    }, delay);

    return () => clearTimeout(timer);
  }, [keyword, delay]);

  return delayText;
};

export default useTextDebounce;
