import _ from "lodash";
import { linear } from "../activationFunctions";
import { Layer } from "../layer";

export default class Network {
    constructor(morphology, activationFunction = linear) {
        this.activationFunction = activationFunction;
        this.layers = this.initLayers(morphology);
    }

    initLayers(morphology) {
        return this.createLayers(morphology);
    }

    createLayers([input, output, ...tail]) {
        if (!output) return [];
        return [new Layer(input, output, this.activationFunction), ...this.createLayers([output, ...tail])];
    }

    synapse(input) {
        return _.reduce(this.layers, (prevLayerRes, layer) => {
            const results = layer.synapse(prevLayerRes)
            console.log(results);
            return results;
        }, input);
    }
}