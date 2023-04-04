import { Check, Trash } from 'phosphor-react';
import { memo } from 'react';
import styles from './Task.module.css';

export interface TaskShape {
  description: string
  isComplete: boolean
}

type TaskProps = {
  task: TaskShape
  onTaskCompletion: (taskCompleted: TaskShape) => void
  onDeleteTask: (taskToDelete: TaskShape) => void
}

export function Task({task, onTaskCompletion, onDeleteTask}: TaskProps) {
  function handleTaskCompletion() {
    onTaskCompletion(task);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <article className={styles.task}>
      <div className={styles.taskCheckmarkArea} onClick={handleTaskCompletion}>
        {task.isComplete ?
          <span className={styles.taskCheckmarkForCompletedOnes}>
            <Check weight='bold' size={12} />
          </span>
          :
          <div className={styles.taskCheckmarkForNotCompletedOnes} />
        }
      </div>

      <p className={task.isComplete ? styles.taskDescriptionForCompletedOnes : styles.taskDescriptionForNotCompletedOnes}>{task.description}</p>

      <button className={styles.taskDeleteButton} onClick={() => {handleDeleteTask();}}>
        <span><Trash size={18} /></span>
      </button>
    </article>
  );
}

export default memo(Task);