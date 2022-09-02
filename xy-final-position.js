const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(moves) {
  let position = [0, 0];

  // console.log('moves: ', moves);
  for (const move of moves) {
    if (move === 'north') {
      position[1] += 1;
    }

    if (move === 'south') {
      position[1] -= 1;
    }

    if (move === 'west') {
      position[0] -= 1;
    }

    if (move === 'east') {
      position[0] += 1;
    }
  }
  console.log(position);
  return position;
}

finalPosition(moves);