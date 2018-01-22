

export default {
    namespace: 'categories',
    state: {
        category: 'Easy',
        timeLimit: 30,
        teamIndex: 0,
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
        updateIndex(state, {teamIndex}) {
            return {...state, teamIndex};
        }
    } 
   };