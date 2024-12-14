const handleCommand = (command: string): void => {
    if (command != 'task-cli') {
        console.error('Unknown command');
        process.exit(1);
    }
}

const handleAction = (action: string): void => {
    if (action == undefined) {
        console.error('No action has inputed.');
        process.exit(1);
    }
}

const handleId = (id: string) => {
    if (isNaN(Number(id))) {
        console.error('Id should be a number');
        process.exit(1);
    }
    return Number(id);
}

const handleDescription = (description: string) => {
    if (typeof description != 'string') {
        console.error('Description must be a type of string');
        process.exit(1);
    }
}

const handleDescriptions = (descriptions: string[]) => {
    if (descriptions.length == 0) {
        console.error('Description is required');
        process.exit(1);
    }
}

export { handleCommand, handleAction, handleId, handleDescription, handleDescriptions }