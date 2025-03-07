import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Alan Turing</h1>
      <img id = 'portrait' src = {require('./images/AlanTuring.jpg')} alt='Alan Turing'/>
      <h2>Summary</h2>
      <p>Alan Turing was born on June 23, 1912, in London, England, and showed an early interest in science. While at school, he was inspired by a friend, Christopher Morcom, whose death deeply affected him. He studied at King’s College and later earned a PhD in math from Princeton. In 1936, he wrote a paper about the Turing Machine, which laid the foundation for modern computers. During World War II, he worked at Bletchley Park, where he helped break the German Enigma code using the Bombe machine. After the war, he contributed to early computer development and created the Turing Test, a key concept in artificial intelligence. In 1952, his homosexuality was discovered, leading to persecution. He committed suicide using cyanide in 1954.</p>

      <h2>Important Contributions</h2>
      <p>
      Alan Turing, "the Father of Modern Computers", is a very influential figure. He introduced the Turing Machine, a theoretical model representing how computers process information. He also solved the Halting Problem, proving that there is no way to determine if a Turing Machine will eventually stop without actually running it. The Turing Test became a key measure of artificial intelligence, testing whether a machine can imitate human responses well enough to be considered "intelligent". He also developed the concept of Turing Completeness, which describes programming languages capable of performing any computational task a Turing Machine can.
      </p>
    </div>
  );
}

export default App;
