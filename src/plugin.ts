export default {
  install: (app) => {
    app.provide('myInjectedFunction', (string) => console.log('This is an example', string));
  }
};
