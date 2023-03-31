import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import { Header } from './components/Header';

export default function App() {
  return (
    <main className={styles.main}>
      <Header />
      <form>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type="submit">
          Criar
          <span><PlusCircle size={16} /></span>
        </button>
      </form>
    </main>
  );
}

