
class TuringMachine {

    constructor() {
        this.tape = ['#'];
        this.position = 0;
        this.state = 0;
        this.input = null;
    }

    resetTape() {
        this.tape = ['#'];
        this.position = 0;
        this.state = 0;
    }

    setInput(input) {
        this.resetTape();
        let index = this.position;
        this.input = input;
        for (let i=0; i<input.length; i++) {
            this.tape[index + i + 1] = input.charAt(i);
        }
        this.tape.push('#');
    }

    step(program) {
        if (this.isDone()) {
            return;
        }
        if (this.position === this.tape.length - 1) 
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
        if (!this.isDone())
            return '';
        let output = '';
        for (let i = this.position + 1; i < this.tape.length - 1; i++) 
            output += this.tape[i];
        if (output === '') 
            return '\u03BB';
        return output;
    }

    isDone() {
        return this.state === 'h';
    }

    toString() {
        let output = "";
        for (let i=0; i<this.tape.length; i++) {
            if (i === this.position) 
                output += '[' + this.tape[i] + ']';
            else 
                output += this.tape[i];
        }
        return output; // + '  <q' + this.state + '>';
    }

    getState() {
        return this.state;
    }

}

export default TuringMachine;