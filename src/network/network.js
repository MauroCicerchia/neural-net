import _ from "lodash";
import { linear } from "../activationFunctions";
import { Layer } from "../layer";

export default class Network {
    constructor(topology, activationFunction = linear) {
        this.activationFunction = activationFunction;
        this.layers = this.initLayers(topology);
    }

    initLayers(topology) {
        return this.createLayers(topology);
    }

    createLayers([input, output, ...tail]) {
        if (!output) return [];
        return [new Layer(input, output, this.activationFunction), ...this.createLayers([output, ...tail])];
    }

    forward(input) {
        let prevLayerRes = input;
        return _.map(this.layers, layer => {
            const results = layer.forward(prevLayerRes);
            prevLayerRes = _.map(results, ({ a }) => a);
            return results;
        })
    }
}