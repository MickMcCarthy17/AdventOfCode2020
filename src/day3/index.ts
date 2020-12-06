interface Path {
  stepsRightward: number;
  stepsDownward: number;
}

interface Position {
  currentRightwardPosition: number;
  currentDownwardPosition: number;
}

/**
 * Finds number of trees encountered on a given path
 * @param {string[]} inputs The input array
 * @param {Path} path The path to be taken in terms of the steps rightward and downward
 * @return {number} The number of trees encountered in the given path to the bottom
 */
export function countNumberOfTreesEncountered(
  inputs: string[],
  path: Path
): number {
  let numberOfTrees: number = 0;

  let currentPosition: Position | null = {
    currentRightwardPosition: 0,
    currentDownwardPosition: 0,
  };

  for (let i = 0; i < inputs.length; i++) {
    currentPosition = takeSteps(currentPosition!, path, inputs);

    if (currentPosition === null) {
      return numberOfTrees;
    }

    // Wrap back around when we get to end of path to the right
    if (currentPosition!.currentRightwardPosition > inputs[i].length - 1) {
      currentPosition!.currentRightwardPosition =
        currentPosition!.currentRightwardPosition - inputs[i].length;
    }

    if (checkCurrentPositionForTree(currentPosition, inputs)) {
      numberOfTrees++;
    }
  }

  return numberOfTrees;
}

/**
 * Finds current position after a single set of steps on a given path
 * @param {Position} currentPosition The current position
 * @param {Path} path The path to take steps on
 * @param {string[]} inputs The input string
 * @return {Position} The position after the steps are taken
 * @return {null} Returns null if the entire path has been traversed
 */
function takeSteps(
  currentPosition: Position,
  path: Path,
  inputs: string[]
): Position | null {
  const newPosition: Position = {
    currentDownwardPosition: (currentPosition.currentDownwardPosition +=
      path.stepsDownward),
    currentRightwardPosition: (currentPosition.currentRightwardPosition +=
      path.stepsRightward),
  };

  if (currentPosition.currentDownwardPosition > inputs.length - 1) {
    return null; // TODO refactor this, it's gross
  }

  return newPosition;
}

/**
 * Checks whether there is a tree at the current position
 * @param {Position} currentPosition The current position
 * @param {string[]} inputs The input array
 * @return {boolean} True if there is a tree, false if not
 */
function checkCurrentPositionForTree(
  currentPosition: Position,
  inputs: string[]
): boolean {
  const downwardPosition: number = currentPosition.currentDownwardPosition;
  const rightwardPosition: number = currentPosition.currentRightwardPosition;

  const elementAtCurrentPosition: string = inputs[downwardPosition].charAt(
    rightwardPosition
  );

  if (elementAtCurrentPosition === '#') {
    return true;
  } else {
    return false;
  }
}
