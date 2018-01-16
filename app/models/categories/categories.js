

export default {
    namespace: 'categories',
    state: {
        category: 'Easy',
        timeLimit: 30,
    },
   
    subscriptions: {
    },
   
    effects: {
    },
   
    reducers: { 
        categoryChange(state, { category }) {
            return { ...state, category };
        },
        timeChange(state, {timeLimit}) {
            return {...state, timeLimit};
        },
        tick(state, { timeLimit }) {
            return { ...state, timeLimit };
        },
    } 
   };