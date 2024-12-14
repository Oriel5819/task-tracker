import { ITask, Status } from "../interfaces/task";
import { createFile, isTaskFileExist, readFile, writeFile } from "./file-handler"

export const addData = async (descriptions: string[]) => {

    const now = Date.now();
    let lastIndex: number = 0;

    let data: ITask[] = descriptions.map((description: string, index: number) => {
        return {
            id: ++index,
            description: description,
            status: 'todo',
            createdAt: now,
            updatedAt: now
        } as ITask
    });

    if (!await isTaskFileExist()) {
        await createFile(JSON.stringify(data));
        process.exit(1);
    }

    const existingData = await listData();

    lastIndex = existingData.length > 0 ? existingData[existingData.length - 1].id : lastIndex;

    data.forEach((d: ITask) => d.id = d.id + lastIndex);

    data = existingData.concat(data);

    await writeFile(JSON.stringify(data));
}

export const updateData = async (id: number, description: string) => {

    const now = Date.now();
    const existingData = await listData();

    const data = existingData.map((task: ITask) => {
        if (task.id == id) {
            return {
                ...task,
                id,
                description,
                updatedAt: now
            }
        }
        return task;
    });

    await writeFile(JSON.stringify(data));
}

export const deleteData = async (id: number) => {
    const existingData = await listData();

    const data = existingData.filter((task: ITask) => task.id !== id);

    await writeFile(JSON.stringify(data));
}

export const changeDataStatus = async <T extends ITask['status']>(id: number, status: T) => {
    const existingData = await listData();

    const data = existingData.map((task: ITask) => {
        if (task.id == id) return {
            ...task,
            status
        }
        return task;
    });
    await writeFile(JSON.stringify(data));
}

export const listData = async () => await readFile();

export const listDataByStatus = async <T extends ITask['status']>(status: T): Promise<ITask[]> => {
    const data = await readFile();
    return data.filter((task: ITask) => task.status === status);
};