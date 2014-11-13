var urls = {
	local_jar: "http://localhost:8080/otp/routers/default", // local 0.11.x otp.jar
	local_war: "http://localhost:8080/otp-rest-servlet/ws/routers/default", // local 0.11.x otp-rest-servlet.war
	tmb_api: "http://api.tmb.cat/v1/planner" // Public API TMB
};

var OTP_config = {
	
	"initLatLng" : [41.376164507321796,2.1153831481933594],

	"osmMapKey": "conveyal.ikck6888", // temporary -- do not use in production, provide your own
	"aerialMapKey": "conveyal.map-a3mk3jug", // unset

	"otpApi": urls.tmb_api,
    "otpApiKey" : "c1708a798d0c879002694a90b825937a",
    "otpAppId" : "f7b34f42",
	"esriApi": "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/",

	"reverseGeocode": false

};
