import Program from './Program';


class TuringMachine {

    constructor() {
        this.tape = ['#','#'];
        this.position = 0;
        this.state = 0;
    }

    resetTape() {
        this.tape = ['#','#'];
        this.position = 0;
        this.state = 0;
    }

    setInput(input) {
        let index = this.position;
        for (let i=0; i<input.length; i++) {
            this.tape[index + i + 1] = input.charAt(i);
        }
        this.tape.push('#');
    }

    toString() {
        let output = "";
        for (let i=0; i<this.tape.length; i++) {
            if (i == this.position) 
                output += '[' + this.tape[i] + ']';
            else 
                output += this.tape[i];
        }
        return output + '  s = ' + this.state;
    }

    step(program) {
        if (this.position == this.tape.length - 1) 
            this.tape.push('#');
        
        let s, d, t, r, n;
        s = this.state
        d = program.indexedMap[s].direction;
        this.position += d ?  1 : -1;
        t = this.tape[this.position];

        if (program.indexedMap[s].targets[t] != null) {
            r = program.indexedMap[s].targets[t].replace;
            n = program.indexedMap[s].targets[t].nextState;
        }
        else {
            r = t;
            n = s;
        }

        this.tape[this.position] = r;
        this.state = n;

        return this.toString();
    }

    getOutput() {
        let output = "";
        for (let i=this.position; i<this.tape.length; i++) {
            let char = this.tape[i];
            if (char != '#') {
                output += char;
            }
        }
        return output;
    }

    isDone() {
        return this.state == -1;
    }



}

export default TuringMachine;