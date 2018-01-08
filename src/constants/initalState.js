export default initalState = {
  
  user: {
    rehydated: false,
    oidc: null,
    isLoggingIn: false,
    error: null,
    refreshTime: null,
    isRefreshingToken: false
  },
  lookup: {
    currencies: [],
    countries: []
  },
  profile: {
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: '',
    subscriptions : [],
    selectedSubscription: null,
    isProfileLoadCalled: false,
    isGettingProfile: false
  },
  rule:{
    currencies:null
  },
  rate:{
    rates: []
  },
  device: {
    token: null,
    deviceId: null
  },
  home: {
    categories: {
      list: [],
      loading: false,
      loaded: false
    },
    promotions: {
      list: [],
      loading: false,
      loaded: false
    },
    newShops: {
      list: [],
      loading: false,
      loaded: false
    },
    highratingshops: {
      list: [],
      loading: false,
      loaded: false
    }
  }
  
};