import { Action, Dispatch } from 'redux';

  export const changeCurrentLocalization = (lang, reload = true) => dispatch => {
    dispatch(changeCurrentLocaleSuccess());
    return changeCurrentLocale(lang)
        .then(() => {
          setLocalization(lang);
          initRestParams();
          initMomentSettings();
          if (reload) {
            window.location.reload();
          }
        });
  }
  const changeCurrentLocaleSuccess = () => ({
    type: CHANGE_CURRENT_CANDIDATE_LOCALE_SUCCESS
  });