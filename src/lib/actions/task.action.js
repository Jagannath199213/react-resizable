import TaskModel from "../models/task.model";
import { addAction } from "./action.action";

export const addTask = async (type, title, description) => {
    try {
        const task = {
            type,
            title,
            description
        };
        const newtask = await TaskModel.create(task);
        if (!newtask) return null;
        await addAction(type, "Add");
        return newtask;
    } catch (err) {
        return null;
    }
}

export const updateTask = async (id, type, title, description) => {
    try {
        let task = await TaskModel.findById(id);
        if (!task) return null;
        type ? task.type = type : task.type = task.type;
        title ? task.title = title : task.title = task.title;
        description ? task.description = description : task.description = task.description;
        const updatedTask = await task.save();
        if (!updatedTask) return null;
        await addAction(type, "Updated");
        return updatedTask;
    } catch (err) {
        return null;
    }
}

export const getlatestTask = async (type) => {
    try {
        const task = await TaskModel.find({ type: type }).sort({ createdAt: -1 }).limit(1).exec();
        return task;
    } catch (err) {
        return null;
    }
}

