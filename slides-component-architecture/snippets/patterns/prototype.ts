const StormTrooper = {
  show(trooper) {
    console.log('storm trooper', trooper.number);
  }
};

const TiePilot = {
  show(trooper) {
    console.log('tie pilot', trooper.number);
  }
};

function TrooperProfile(trooper) {
  let profile;
  if (trooper.kind === 'tie-pilot') {
    profile = Object.create(TiePilot);
  } else {
    profile = Object.create(StormTrooper);
  }

  profile.show(trooper);
}

const finn = {
  number: 'FN-2187',
  name: 'Finn'
};

TrooperProfile(finn);
