import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

export interface TaskShape {
  description: string
  isComplete: boolean
}

type TaskProps = {
  task: TaskShape
}

export function Task({task}: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.isComplete);

  function handleTaskCheckbox(event: ChangeEvent<HTMLInputElement>) {
    setIsTaskCompleted(event.currentTarget.checked);
  }

  return (
    <article className={styles.task}>
      <input
        type="checkbox"
        checked={isTaskCompleted}
        className={styles.taskCheckbox}
        onChange={(event) => {handleTaskCheckbox(event);}}
      />

      <p className={isTaskCompleted ? styles.taskDescriptionCompleted : styles.taskDescription}>{task.description}</p>

      <button className={styles.taskDeleteButton}>
        <span><Trash size={18} /></span>
      </button>
    </article>
  );
}