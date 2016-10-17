window.OTP_config = {
  initLatLng: [41.38266, 2.17702],

  osmMapKey: 'conveyal.ikck6888',
  aerialMapKey: 'conveyal.map-a3mk3jug',

  // mapzenApiKey: "your-key", // your Mapzen Search API key
  // geocoderSearchRadius : 25, // search radius in km for mapzen geocoder from initLatLng (defaults to 50 if not specified)

  otpApi: 'http://api.tmb.cat/v1/planner/',
  otpApiKey: "c4ed3d248d10633182d9e7db6f585af1",
  otpAppId: "e32e32aa",

  // default query parameters to pass to otp router
  routerDefaults: {maxPreTransitTime: 1800},

  // geocoders to use:
  geocoders: [ 'nominatim' ], // possible choices: esri, otp, nominatim, mapzen, mapbox
  reverseGeocoder: 'nominatim', // possible choices: esri, nominatim, mapzen, mapbox
  reverseGeocode: true,

  // geocoder api endpoints
  nominatimApi: 'https://nominatim.openstreetmap.org/',
  esriApi: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/',
  mapzenApi: 'https://search.mapzen.com/v1/',

  // specify modes to be enabled in 'travel by' dropdown as list of OTP modes
  // defaults to: 'TRANSIT,WALK', 'TRAINISH,WALK', 'BUS,WALK', 'WALK', 'BICYCLE', 'TRANSIT,BICYCLE'
  //
  // e.g. uncomment following line to add drive-to-transit to the default list
  modes: [ 'TRANSIT,WALK', 'TRAINISH,WALK', 'BUS,WALK', 'WALK', 'BICYCLE', 'TRANSIT,BICYCLE', 'TRANSIT,CAR_PARK' ]
}
