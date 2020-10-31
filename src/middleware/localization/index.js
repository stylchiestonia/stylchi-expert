  let getBrowserLocalization = () => {
    return navigator.language || navigator.userLanguage;
  }

let getCurrentLocalization = () => {
    const locale = getBrowserLocalization();
    const localesList = [ 'EN', 'EE' ];
    return localesList.find(localization => locale.includes(localization)) || 'EN';
  }
  
  exports.getLocalization = () => {
    return localStorage.getItem('stylchi_localization') || getCurrentLocalization();
  }
  
  exports.setLocalization = (localization) => {
      console.log('------localization---------', localization)
    //   let localization = getCurrentLocalization();
    localStorage.setItem('stylchi_localization', localization);
  }
  