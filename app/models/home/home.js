

export default {
 namespace: 'home',
 state: {
     numTeams: 2,
     teams: [],
     msg: '',
 },

 subscriptions: {
 },

 effects: {
 },

 reducers: { 
    _pickerChange(state, {numTeams}) {
        return { ...state, numTeams };
    },
    textChange(state, {msg}) {
        return { ...state, msg };
    },
    enterName(state, {teams}) {
        return { ...state, teams};
    },
 } 
};