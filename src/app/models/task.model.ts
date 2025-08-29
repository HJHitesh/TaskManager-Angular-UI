export interface Task {
  id: number;
  title:string;
  name: string;
  description: string;
  dueDate?: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}

export type TaskStatus = 'PENDING' | 'COMPLETED';