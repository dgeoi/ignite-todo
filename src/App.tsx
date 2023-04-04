import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskShape } from './components/Task';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState<TaskShape[]>([]);
  const [createTaskDescription, setCreateTaskDescription] = useState('');
  const isCreateTaskDescriptionEmpty = createTaskDescription.length === 0;

  function handleCreateTaskDescriptionValue(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setCreateTaskDescription(event.target.value);
  }

  function invalidCreateTaskDescription(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Preencha este campo!');
  }

  function handleSubmitOfCreateTaskForm(event: FormEvent) {
    event.preventDefault();
    setTasks(previous => previous.concat([{description: createTaskDescription, isComplete: false}]));
  }

  const handleTaskCompletion = useCallback((taskCompleted: TaskShape) => {
    const tasksWithUpdatedOne: TaskShape[] = tasks.map(task => task.description === taskCompleted.description ? {...task, isComplete: true } : task );
    setTasks(tasksWithUpdatedOne);
  }, [tasks]);

  const handleDeleteTask = useCallback((taskToDelete: TaskShape) => {
    const taskListWithoutDeletedOne = tasks.filter(task => task !== taskToDelete);
    setTasks(taskListWithoutDeletedOne);
  }, [tasks]);

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('TASK_LIST') || '') as TaskShape[];
    setTasks(tasksFromLocalStorage);
  }, []);

  const preventLocalStorageFromCleanOnRender = useRef(false);
  useEffect(() => {
    if(preventLocalStorageFromCleanOnRender.current && createTaskDescription.length > 0) {
      localStorage.setItem('TASK_LIST', JSON.stringify(tasks));
      setCreateTaskDescription('');
    } else if (preventLocalStorageFromCleanOnRender.current) {
      localStorage.setItem('TASK_LIST', JSON.stringify(tasks));
    }
    preventLocalStorageFromCleanOnRender.current = true;
  }, [tasks]);

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <form
          className={styles.createTaskForm}
          onSubmit={(event) => {handleSubmitOfCreateTaskForm(event);}}
        >
          <input
            required
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={createTaskDescription}
            className={styles.createTaskFormInput}
            onChange={(event) => {handleCreateTaskDescriptionValue(event);}}
            onInvalid={invalidCreateTaskDescription}
          />
          <button
            type="submit"
            className={styles.createTaskFormSubmitButton}
            disabled={isCreateTaskDescriptionEmpty}
          >
            Criar
            <span><PlusCircle size={16} /></span>
          </button>
        </form>

        <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} onDeleteTask={handleDeleteTask} />
      </main>
    </div>
  );
}