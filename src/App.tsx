import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskShape } from './components/Task';
import { TaskList } from './components/TaskList';

const taskListFromApi: TaskShape[] = [
  {
    description: 'Lavar cabelo',
    isComplete: false
  },
  {
    description: 'Dar banho no cachorro',
    isComplete: true
  },
  {
    description: 'Limpar banheiro',
    isComplete: true
  },
  {
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete: false
  },
  {
    description: 'Consectetur quia fugiat ut. Aut voluptas voluptatem incidunt perspiciatis quis odio. Voluptate aut est sunt. Expedita ut tempore rerum et dolorem aut.',
    isComplete: false
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <form className={styles.createTaskForm}>
          <input
            type="text"
            placeholder='Adicione uma nova tarefa'
            className={styles.createTaskFormInput}
          />
          <button type="submit" className={styles.createTaskFormSubmitButton}>
            Criar
            <span><PlusCircle size={16} /></span>
          </button>
        </form>

        <TaskList tasks={taskListFromApi} />
      </main>
    </div>
  );
}
