import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

export const connectTranslation = () => WrappedComponent => {
  return withTranslation()(WrappedComponent);
};

export const connectStore = (stateToProps, dispatchToProps, useTranslation = false) => WrappedComponent => {
  const withStore = connect(stateToProps, dispatchToProps)(WrappedComponent);
  return useTranslation ? connectTranslation()(withStore) : withStore;
};
