import { handleAdd, handleDelete, handleChangeStatus, handleUpdate, handleListAll, handleListByStatus } from "./handlers/action-handler";
import { handleAction, handleCommand } from "./handlers/error-handler";

const args = process.argv;

const [, , command, action, ...more] = args;

handleCommand(command);
handleAction(action);

const main = (action: string) => {

    switch (action) {
        case 'add': handleAdd(more); break;

        case 'update': handleUpdate(more); break;

        case 'delete': handleDelete(more); break;

        case 'mark-todo': handleChangeStatus(more, 'todo'); break;

        case 'mark-in-progress': handleChangeStatus(more, 'in-progress'); break;

        case 'mark-done': handleChangeStatus(more, 'done'); break;

        case 'list': {

            const status = more;

            switch (true) {
                case status.length == 0: handleListAll(); break;

                case status.includes('in-progress'): handleListByStatus('in-progress'); break;

                case status.includes('todo'): handleListByStatus('todo'); break;

                case status.includes('done'): handleListByStatus('done'); break;

                default:
                    console.log('Unknown status');
                    break;
            }

        }

            break;

        default:
            console.log('Unknow action', action);
            break;
    }
}

main(action);