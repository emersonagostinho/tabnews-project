export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Carta 3</h1>
        <p style={styles.description}>
        Minha querida,

Quis te escrever essas palavras simples, mas sinceras, para lembrar o quanto você é especial pra mim. Nem sempre consigo demonstrar tudo que sinto, mas saiba que o carinho que tenho por você é verdadeiro.

Te conhecer foi uma das coisas mais bonitas que me aconteceram. Seu sorriso, sua forma de falar, o jeito como me entende… tudo em você me faz bem. Estar ao seu lado traz paz, alegria e um sentimento de que, juntos, a vida fica mais leve.

Obrigado por cada momento, cada conversa, cada abraço. Eu espero poder retribuir tudo isso, te cuidando, te respeitando e te amando cada vez mais.

Com carinho,
Emmerson José
        </p>
        <button style={styles.button}>Te amo 💖</button>
      </div>
    );
  }
  
  const styles = {
    container: {
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
    },
    description: {
      fontSize: '1.2rem',
      color: '#666',
      textAlign: 'center',
      maxWidth: '600px',
      marginTop: '1rem',
    },
    button: {
      marginTop: '2rem',
      padding: '0.8rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#0070f3',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };