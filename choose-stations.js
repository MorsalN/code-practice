const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(stations) {

  let goodStation = [];

  for (let station of stations) {
    const capacity = station[1];
    const venue= station[2];

    if (capacity >= 20 && (venue === 'school' || venue === 'community centre')) {
      goodStation.push(station[0]);
    }
  }

  return goodStation;

  
}

console.log(chooseStations(stations));