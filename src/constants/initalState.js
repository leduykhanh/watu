export default initalState = {

  user: {
    rehydated: false,
    oidc: null,
    isLoggingIn: false,
    error: null,
    registerError: null,
    refreshTime: null,
    isRegistering: false
  },
  lookup: {
    currencies: [],
    countries: []
  },
  profile: {
    id: null,
    token: null,
    fname: null,
    lastName: '',
    email: '',
    avatarUrl: '',
    isProfileLoadCalled: false,
    isGettingProfile: false,
    history: {
      list: [],
      loading: false,
      loaded: false
    },
    loyalty: {
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
  },
  notification: {
    items: [],
    count: 0,
    loading: false,
    loaded: false,
  },
  luckydraw: {
    items: [],
    count: 0,
    loading: false,
    loaded: false,
  },
  search: {
    searchString: ''
  }
};
