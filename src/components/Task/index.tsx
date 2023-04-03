import { Check, Trash } from 'phosphor-react';
import { MouseEvent, useState } from 'react';
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

  function handleTaskCompletion(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    setIsTaskCompleted(previous => !previous);
  }

  return (
    <article className={styles.task}>
      <div className={styles.taskCheckmarkArea} onClick={(event) => {handleTaskCompletion(event);}}>
        {isTaskCompleted ? 
          <span className={styles.taskCheckmarkForCompletedOnes}>
            <Check weight='bold' size={12} />
          </span>
          :
          <div className={styles.taskCheckmarkForNotCompletedOnes} />
        }
      </div>

      <p className={isTaskCompleted ? styles.taskDescriptionForCompletedOnes : styles.taskDescriptionForNotCompletedOnes}>{task.description}</p>

      <button className={styles.taskDeleteButton}>
        <span><Trash size={18} /></span>
      </button>
    </article>
  );
}