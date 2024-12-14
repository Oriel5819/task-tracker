export type Status = 'todo' | 'in-progress' | 'done'

export interface ITask {
    id: number,
    description: string,
    status: Status,
    createdAt: number,
    updatedAt: number
}