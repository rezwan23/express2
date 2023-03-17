async function httpGetPlanets() {
  const planets = await fetch('http://localhost:3001/planets');
  return await planets.json();
}

async function httpGetLaunches() {
  const launches = await fetch('http://localhost:3001/launches', { method: 'GET' });
  return await launches.json();
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  await fetch('http://localhost:3001/launches', {
    headers: {
      "Content-Type": "application/json",
    }, 
    method: 'POST', 
    body: JSON.stringify(launch)
  }).then((res) => {
    console.log(res.status)
  }).catch((err) => {
    console.Console.log(err)
  });

}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.

  // console.log(id);

  fetch('http://localhost:3001/launches', {
    headers: {
      "Content-Type": "application/json",
    }, 
    method: 'DELETE', 
    body: JSON.stringify({flightNumber : id})
  }).then((res) => {
    console.log(res.status)
  }).catch((err) => {
    console.Console.log(err)
  });

}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};