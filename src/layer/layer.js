import _ from "lodash";
import { linear } from "../activationFunctions";
import Neuron from "../neuron/neuron";

export default class Layer {
    constructor(inputNumber, neuronNumber, activationFunction = linear) {
        this.activationFunction = activationFunction;
        this.neurons = this.initNeurons(inputNumber, neuronNumber);
    }

    initNeurons(inputNumber, neuronNumber) {
        return _.map(Array(neuronNumber), () => new Neuron(inputNumber, this.activationFunction));
    }

    forward(input) {
        return _.map(this.neurons, neuron => neuron.forward(input));
    }
}