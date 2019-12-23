import _ from "lodash";
import { linear } from "../activationFunctions";

export default class Neuron {
    constructor(dendriteNumber, activationFunction = linear) {
        this.activationFunction = activationFunction;
        this.weights = this.initWeights(dendriteNumber);
        this.bias = this.random();
    }

    initWeights(dendriteNumber) {
        return _.map(Array(dendriteNumber), () => this.random())
    }

    forward(input) {
        return this.activationFunction(this.sum(input) + this.bias);
    }

    sum(input) {
        return _(input)
            .zipWith(this.weights, (a, b) => a * b)
            .sum();
    }

    random() {
        return Math.random() * 2 - 1;
    }
}
