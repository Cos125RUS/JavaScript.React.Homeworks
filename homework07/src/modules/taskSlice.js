import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {id: Date.now(), title: action.payload, completed: false};
            state.tasks.push(newTask);
        },
        loadTask(state, action) {
            state.tasks.push(action.payload);
        },
        switchCompleted: (state, action) => {
            console.log(action.payload);
            state.tasks.forEach(console.log);
            state.tasks.forEach((task) => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }
            });
        }
    }
});

export const {switchCompleted, addTask, loadTask} = taskSlice.actions;
export default taskSlice.reducer;