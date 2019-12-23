import _ from "lodash";

export default (x1, x2) => {
    const errors = _.zipWith(x1, x2, (x1, x2) => Math.pow(x2 - x1, 2));
    return _(errors).sum() / errors.length;
}
