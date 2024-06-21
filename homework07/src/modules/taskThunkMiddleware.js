import {tasks} from "../data/tasks";
import {loadTask} from "./taskSlice";

const taskThunkMiddleware = store => next => action => {
    if (action.type === 'USER_DATA_LOADING') {
        setTimeout(() => {
            console.log("action", action);
            tasks.forEach(task => {
                action.payload = task;
                store.dispatch(loadTask(action.payload));
            });
        }, 1000);
    }

    return next(action);
};

export default taskThunkMiddleware;