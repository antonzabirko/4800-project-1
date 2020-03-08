import {Snake} from "gym-js";
const env = new Snake();

console.log(env.action_space.toString());
console.log(env.observation_space.toString());

let action = env.action_space.sample();
let [obs, rew, done, info] = env.step(action);