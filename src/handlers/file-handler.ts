import fs from 'node:fs/promises';
import { ITask } from '../interfaces/task';

const filename = 'task.json';
const filePath = './db/';

export const isTaskFileExist = async (): Promise<boolean> => {
    try {
        await fs.access(filePath + filename);
        return true;
    } catch (error) {
        console.error('No such file or directory in the system');
        return false;
    }
}

export const createFile = async (data: string) => {
    try {
        await fs.writeFile(filePath + filename, data);
        console.log('New file has been created.');
    } catch (error) {
        console.error(error);
    }
}

export const readFile = async (): Promise<ITask[]> => {
    try {
        const data: Buffer = await fs.readFile(filePath + filename);
        return JSON.parse(data.toString());
    } catch (error) {
        console.error(error);
        return []

    }
}

export const writeFile = async (data: string) => {   
    try {
        await fs.writeFile(filePath + filename, data);
        console.log('Saved data');
    } catch (error) {
        console.error(error);
    }
}