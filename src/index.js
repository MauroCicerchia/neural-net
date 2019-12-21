import { Neuron } from "./neuron";
import { Layer } from "./layer";
import { Network } from "./network";
import { relu, step } from "./activationFunctions";

new Network([2, 2, 5, 5, 3, 1], step).synapse([3, 1]);
