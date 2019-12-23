import _ from "lodash";

const mean = x => _(x).sum() / x.length;

export default [
    (x1, x2) => mean(_.zipWith(x1, x2, (x1, x2) => Math.pow(x2 - x1, 2))),
    (x1, x2) => _.zipWith(x1, x2, (x1, x2) => x2 - x1)
]
