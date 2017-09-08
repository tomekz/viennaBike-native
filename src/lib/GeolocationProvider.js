export default class GeolocationProvider {
   getPosition(){
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition( position => {
          resolve(position)
        }, err => {
          reject(err)
        },
        {
          timeout: 8000,
          maximumAge: 5000
        }
      )
    })
  }

  // credit should go to: https://stackoverflow.com/a/27943
  distance(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = this.deg2rad(lat2-lat1);
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
}
