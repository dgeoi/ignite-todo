import { Task, TaskShape } from '../Task';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskShape[]
}

export function TaskList({tasks}: TaskListProps) {
  const tasksCount = tasks.length;
  const completedTasksCount = (tasks.filter(task => task.isComplete).length);

  return (
    <section className={styles.taskListContainer}>
      <header className={styles.taskListHeader}>
        <div className={styles.tasksCount}>
          <p>Tarefas criadas</p>
          <span>{tasksCount}</span>
        </div>

        <div className={styles.completedTasksCount}>
          <p>Concluídas</p>
          <span>{`${completedTasksCount} de ${tasksCount}`}</span>
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