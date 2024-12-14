import { ITask } from "../interfaces/task";
import { addData, deleteData, changeDataStatus, updateData, listData, listDataByStatus } from "./data-handler";
import { handleDescription, handleDescriptions, handleId } from "./error-handler";

export const handleAdd = (args: string[]) => {
    const descriptions = args;

    handleDescriptions(descriptions);
    addData(descriptions);
}

export const handleUpdate = (args: string[]) => {
    const [id, description] = args;

    const trustedId = handleId(id);
    handleDescription(description);
    updateData(trustedId, description);
}

export const handleDelete = async (args: string[]) => {
    for (let id of args) {
        const trustedId = handleId(id);
        await deleteData(trustedId);
    }
}

export const handleChangeStatus = async <T extends ITask['status']>(args: string[], status: T) => {
    for (let id of args) {
        const trustedId = handleId(id);
        await changeDataStatus(trustedId, status);
    };
}

export const handleListAll = async () => {
    const data = await listData();
    console.log(data);
}

export const handleListByStatus = async <T extends ITask['status']>(status: T): Promise<void> => {
    const data = await listDataByStatus(status);
    console.log(data);
}