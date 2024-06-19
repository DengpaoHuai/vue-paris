import CustomStore from 'devextreme/data/custom_store';

const dashboardStore = new CustomStore({
  key: 'dashboardStore',
  load: (loadOptions) => {
    return 'toto';
  },
  insert: (values) => {
    return 'toto';
  },
  update: (key, values) => {
    return 'toto';
  },
  remove: (key) => {
    return 'toto';
  }
});

export default dashboardStore;
