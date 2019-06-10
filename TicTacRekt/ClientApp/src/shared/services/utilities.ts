const hasFlag = (target: number, flagToCheck: number): boolean => {
  if (isNaN(target) || isNaN(flagToCheck)) {
    return false;
  }

  return (target & flagToCheck) === flagToCheck;
};

const addFlag = (target: number, flagsToAdd: number): number => {
  return target | flagsToAdd;
};

const removeFlag = (target: number, flagsToRemove: number): number => {
  //INFO: ~ flips the bits => 0 becomes 1 and vice versa
  return target & ~flagsToRemove;
};

export const flagsHelper = { hasFlag, addFlag, removeFlag };
