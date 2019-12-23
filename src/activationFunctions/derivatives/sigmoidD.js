import sigmoid from "../sigmoid";

export default x => sigmoid(x) * (1 - sigmoid(x));
