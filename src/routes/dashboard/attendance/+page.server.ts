import { students } from "../../../lib/server/data";


export const load = async () => {
    /**
     * Fetch students
     */
    return {
        students
    }
};

export const actions = {
    add: () => {},
    remove: () => {},
};