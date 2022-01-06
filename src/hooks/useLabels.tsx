import { useState } from 'react';

export const useLabels = () => {
  
  const [labelValue, setLabelValue] = useState('');
  const [dataLabels, setDataLabels] = useState<string[]>([]);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelValue(e.currentTarget.value);
  }

  const addLabel = () => {
    if (labelValue !== '') {
      setDataLabels([...dataLabels, labelValue]);
      setLabelValue('')
    }
  }

  const clearLabels = () => {
    setDataLabels([]);
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addLabel();
  }
  
  return {
    addLabel,
    clearLabels,
    handleLabelChange,
    dataLabels,
    labelValue,
    handleSubmit
  }
}