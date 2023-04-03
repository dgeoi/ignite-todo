import { Task, TaskShape } from '../Task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskShape[]
}

export function TaskList({tasks}: TaskListProps) {
  return (
    <section className={styles.taskListContainer}>
      <header className={styles.taskListHeader}>
        <div className={styles.tasksCount}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div className={styles.completedTasksCount}>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.map(task => {
          return <Task key={task.description} task={task} />;
        })}
      </div>
    </section>
  );
}