import React, { useState } from 'react';
import Papa from 'papaparse';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "../src/App.css";

function App() {
  const [wordFrequency, setWordFrequency] = useState([]);

  const fetchTextFile = async () => {
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    return text;
  };

  const parseWordFrequency = (text) => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g);
    const frequencyMap = words.reduce((map, word) => {
      map[word] = (map[word] || 0) + 1;
      return map;
    }, {});
    const frequencyArray = Object.entries(frequencyMap).map(([word, frequency]) => ({
      word,
      frequency,
    }));
    return frequencyArray;
  };

  const sortWordFrequency = (frequencyArray) => {
    return frequencyArray.sort((a, b) => b.frequency - a.frequency).slice(0, 20);
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(wordFrequency);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const csvURL = window.URL.createObjectURL(csvData);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'word-frequency.csv');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const handleSubmit = async () => {
    const text = await fetchTextFile();
    const frequencyArray = parseWordFrequency(text);
    const sortedFrequencyArray = sortWordFrequency(frequencyArray);
    setWordFrequency(sortedFrequencyArray);
  };

  return (
    <>
    <div className='container'>
    <button className='button'  onClick={handleSubmit}>Submit</button>
    
    
    <div className='chart'>
      
      {wordFrequency.length > 0 && (
        <>
          <BarChart width={850} height={500} data={wordFrequency} margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
          
           
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="frequency" fill="#8B1874" barCategoryGap={0} barGap={0} />
          </BarChart>
          <button className='button' onClick={exportToCSV}>Export to CSV</button>
        </>
      )}
    </div>
    </div>
    </>
  );
}

export default App;
