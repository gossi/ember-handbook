const StormTrooper = {
  show(trooper) {
    console.log('storm trooper', trooper.number);
  }
};

const Heavy = {
  show(trooper) {
    console.log('tie pilot', trooper.number);
  }
};

function TrooperProfile(trooper) {
  let profile;
  if (trooper.weapon === 'heavy') {
    profile = Object.create(Heavy);
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
