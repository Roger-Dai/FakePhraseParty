
export default {
    namespace: 'game',
    state: {
        index: 0,
    },
   
    subscriptions: {
    },
   
    effects: {
    },
   
    reducers: { 
        next(state, { index }) {
            return { ...state, index };
        },
        tick(state, { timeLimit }) {
            console.log('tick')
            return { ...state, timeLimit};
        }
    } 
   };