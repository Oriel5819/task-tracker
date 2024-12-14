# task-tracker

## Project URL

https://roadmap.sh/projects/task-tracker

## Actions

### Add task

To add a task, we can use this command

```bash
task-cli add "grocery"
```

In case the data file is not existing yet, the system will create a new file in `src/db` and save your tasks in it.

You can add multiple task at once

```bash
task-cli add "grocery" "shouting"
```

### Update task

To update task description, use thi line

```bash
task-cli update 1 "taking a rest"
```

We can only update a task with a line of command

### Delete task

We have this line to perform the delete task action.

We can also use the multiple delete by separating the ids by white spaces

```bash
task-cli delete 1 3 5
```

### change task status

We can choose one of those status `todo`, `in-progress` or `done` as the new task status.

in addition the system support multiples status change at once, but it must be the only one status.

```bash
task-cli mark-done 1 3 5
```

```bash
task-cli mark-todo 7 8
```

```bash
task-cli mark-in-progress 2
```

### List tasks

We can list all or list according to their status

```bash
task-cli list
```

```bash
task-cli list todo
```

```bash
task-cli list in-progress
```

```bash
task-cli list done
```