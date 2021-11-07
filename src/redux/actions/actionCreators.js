import actionTypes from "./actionTypes";

export const loadChallengesAction = (challenges) => ({
  type: actionTypes.loadChallenges,
  challenges,
});

export const loadCurrentChallengeAction = (challenge) => ({
  type: actionTypes.loadCurrentChallenge,
  challenge,
});
