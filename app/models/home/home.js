

export default {
 namespace: 'home',
 state: {
     numTeams: 2,
     teamNames: [],
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
    enterName(state, {teamNames}) {
        return { ...state, teamNames };
    },
 } 
};