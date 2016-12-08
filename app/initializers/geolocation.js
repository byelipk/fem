// Exercise 2
// Use the registration API to pause the boot of your app till
// you download your geo coordinates. Once you have the coordinates
// allow your app to continue loading.
//
// Make the data available on the container.
export function initialize(application) {
  if (!window && window.navigator) {
    return;
  }

  const geo = navigator.geolocation;

  application.deferReadiness();

  geo.getCurrentPosition(function callback(pos) {
    let loc = {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    };

    console.log(loc);

    application.register('data:location', loc, {
      instantiate: false
    });

    application.advanceReadiness();
  });
}

export default {
  name: 'geolocation',
  initialize
};
