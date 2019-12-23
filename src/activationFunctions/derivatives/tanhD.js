import tanh from "../tanh";

export default x => 1 - Math.pow(tanh(x), 2);
