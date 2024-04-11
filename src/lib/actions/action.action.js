import ActionSchema from "../models/action.model"

export const addAction = async () => {
    try {
        const action = {
            type,
            action
        }
        const newAction = await ActionSchema.create(action);
        if (!newAction) return null;
        return newAction;
    } catch (error) {
        return null
    }
}

export const getActionsCountByType = async (type) => {
    try {
        let actions = await ActionSchema.find({ type: type }).count().exec();
        return actions
    } catch (error) {
        return null;
    }
}