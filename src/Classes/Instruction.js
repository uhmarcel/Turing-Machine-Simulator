
class Instruction {

    constructor(state, direction, target, replace, nextState) {
        this.state = state;
        this.direction = direction;
        this.target = target;
        this.replace = replace;
        this.nextState = nextState
    }

    toString() {
        let out = "";
        out += "q" + this.state + "]";
        out += this.direction ? "r" : "l";
        out += "(" + this.target + "/" + this.replace + ",q" + this.nextState + ")";
        return out;
    }

    

}

export default Instruction;