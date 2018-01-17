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
    fname: null,
    lastName: '',
    email: '',
    avatarUrl: '',
    subscriptions : [],
    selectedSubscription: null,
    isProfileLoadCalled: false,
    isGettingProfile: false,
    history: {
      list: [],
      loading: false,
      loaded: false
    },
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
  location: { latitude:0, longitude:0 },
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
    },
    nearbyshops: {
      list: [],
      loading: false,
      loaded: false
    }
  },
  cart: {
    items: [],
    count: 0
  }

};
