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
    '.border-bottom':{
      borderBottomWidth:1,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop:10,
      paddingBottom:10,
      borderColor: '#7e7e7e'
    }
  };

  return viewTheme;
};
