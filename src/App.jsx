import  { useState } from 'react';
import './styles.css'; 

  // (verifica se o número é um palíndro). 
  // converte o número para uma string, inverte e compara com a string original
  // para verificar se são iguais.
const isPalindrome = (number) => {
  const strNumber = String(number);
  return strNumber === strNumber.split('').reverse().join('');
}

  //componente PalindromeApp, utiliza o hook useState para criar três estados
const PalindromeApp = () => {
  const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [palindromes, setPalindromes] = useState([]);

  const findPalindromes = () => {
    // converte os valores de startRange e endRange para números inteiros
    const start = parseInt(startRange, 10);
    const end = parseInt(endRange, 10);

    // verifica se o intervalo é válido
    if (isNaN(start) || isNaN(end) || start > end) {
      alert('Por favor, insira um intervalo válido.');
      return;
    }
    // array usado para armazenar os números palíndromos encontrados no intervalo
    const palindromesArray = [];
    for (let num = start; num <= end; num++) {
      if (isPalindrome(num)) {
        palindromesArray.push(num);
      }
    }
    // término do loop, o estado é atualizado com o conteúdo do array palindromesArray
    setPalindromes(palindromesArray);
  }

// Estrutura do app
  return (
    <div>
      <h1>Encontrar Números Palíndromos</h1>
      <div>
        <label>
          Início do Intervalo:
          <input
            type="text"
            value={startRange}
            onChange={(e) => setStartRange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Final do Intervalo:
          <input
            type="text"
            value={endRange}
            onChange={(e) => setEndRange(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={findPalindromes}>Encontrar Palíndromos</button>
      </div>
      <div>
        <h2>Números Palíndromos encontrados:</h2>
        <ul>
          {palindromes.map((palindrome, index) => (
            <li key={index}>{palindrome}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PalindromeApp;