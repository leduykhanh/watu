import variable from "./../variables/platform";

export default (variables = variable) => {
  const viewTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    ".horizontal":{
      flexDirection: 'row'
    },
    ".koku": {
      backgroundColor: 'navy',
      width: 150
    },
    ".withBorder": {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#4740c7'
    },
    '.commonView': {
      marginLeft: 10,
      marginRight: 10,
      padding: 10,
    },
    '.amountView': {
      borderColor: '#4740c7',
      alignItems: 'center',
      borderRadius: 7
    },
    '.heavyMargin': {
      marginLeft: 52,
      marginRight: 52,
      marginBottom: 15

    },
    '.center':{
      alignItems: 'center'
    },
    '.center-h': {
      justifyContent: 'center'
    },
    '.with-shadow': {
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 1,
      shadowOpacity: 0.5,
      shadowColor: '#000'
    },
    '.login': {

			marginLeft: 30,
			marginRight: 30,
			marginBottom: 15,
    },
    '.space-between':{
      justifyContent: 'space-between',
    },
    '.border-bottom':{
      borderBottomWidth:1,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop:10,
      paddingBottom:10,
      borderColor: '#7e7e7e'
    },
    ".light-border": {
      borderRadius: 0,
      borderWidth: 1,
      borderColor: 'grey'
    },
    '.grey': {
      backgroundColor: 'rgb(247,247,247)'
    },
    '.m-t-5': {
      marginTop: 5
    },
    '.m-l-5': {
      marginLeft: 5
    },
    '.m-r-5': {
      marginRight: 5
    },
    '.m-l-10': {
      marginLeft: 10
    },
    '.m-r-10': {
      marginRight: 10
    },
    '.p-l-10': {
      paddingLeft: 10
    },
  };

  return viewTheme;
};
