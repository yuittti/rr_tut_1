export const ping = store => next => action => {
    console.log(`Action's type: ${action.type}, Action's payload: ${action.payload}`);
    return next(action);
}