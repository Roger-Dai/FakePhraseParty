import React from 'react';
import dva from 'dva-no-router';
import Router from './router';
import * as models from './models';
import Home from './routes/home/home';


const app = dva();

Object.keys(models).forEach(key => app.model(models[key]));

app.router(() => <Router />)

export default app.start();