import _ from "lodash";

export default class Neuron {
    constructor(dendriteNumber, activationFunction = _.identity) {
        this.activationFunction = activationFunction;
        this.weights = _.map(Array(dendriteNumber), () => this.random());
        this.bias = this.random();
        this.synapse = this.synapse.bind(this);
        this.sum = this.sum.bind(this);
    }

    synapse(input) {
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
