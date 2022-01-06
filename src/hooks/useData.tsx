import { useState } from 'react';

export const useData = () => {
  
  const [datasetsData, setDatasetsData] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  const addValue = () => {
    if (inputValue !== '') {
      setDatasetsData([...datasetsData, parseInt(inputValue)]);
      setInputValue('');
    }
  }

  const clearValues = () => {
    setDatasetsData([]);
  }

  const handleValueSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addValue();
  }
  
  return {
    datasetsData,
    inputValue,
    handleInputChange,
    addValue,
    clearValues,
    handleValueSubmit
  }
}