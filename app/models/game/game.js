
export default {
    namespace: 'game',
    state: {
        index: 0,
        gameList: [],
    },
   
    subscriptions: {
    },
   
    effects: {
    },
   
    reducers: { 
        next(state, { index }) {
            return { ...state, index };
        },
        list(state, { gameList }) {
            return { ...state, gameList};
        }
    } 
   };