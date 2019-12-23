const sigmoid = x => 1 / (1 + Math.pow(Math.E, -x))

export default [
    sigmoid,
    x => sigmoid(x) * (1 - sigmoid(x))
];
