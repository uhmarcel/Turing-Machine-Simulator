
class TuringMachine {

    constructor() {
        this.input = '';
        this.tape = ['#'];
        this.position = 0;
        this.state = 0;
        this.previous = []        
        this.done = false;
    }

    resetTape() {
        this.tape = ['#'];
        this.position = 0;
        this.state = 0;
        this.previous = [];       
        this.done = false;
    }

    setInput(input) {
        this.resetTape();
        let index = this.position;
        
        while (input[0] === '#') 
            input = input.substring(1);
        while (input[input.length-1] === '#') 
            input = input.substring(0,input.length-1);
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
        this.pushState();
        
        if (this.position === this.tape.length - 1) 
            this.tape.push('#');
        
        let s, d, t, r, n;
        s = this.state

        if (!program.indexedMap[s]) {
            this.done = true;
            return;
        }

        d = program.indexedMap[s].direction;
        this.position += d ?  1 : -1;
        if (this.position < 0) {
            return;
        }
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
        this.formatTape();
        
        return this.toString();
    }

    stepBack() {
        if (this.previous.length !== 0) {
            let {tape, position, state, done} = this.previous.pop();
            this.tape = [...tape];
            this.position = position;
            this.state = state;
            this.done = done;
        }
    }

    pushState() {
        let current = {
            tape: [...this.tape],
            position: this.position,
            state: this.state,
            done: this.done
        }
        this.previous.push(current);
    }

    getOutput() {
        if (!this.isDone())  return '';
        if (this.isNonEnding())  return 'undefined';

        let output = '';
        for (let i = this.position + 1; i < this.tape.length - 1; i++) 
            output += this.tape[i];
        if (output === '') 
            return '\u03BB';
        return output;
    }

    isDone() {
        return this.done || this.isNonEnding();
    }

    isNonEnding() {
        return (this.position > 512) || (this.position < 0)
    }

    formatTape() {
        while (this.tape.length > 2 && this.position < this.tape.length - 1 && this.tape[this.tape.length - 2] === '#') {
            this.tape.pop();
        }
    }

    toString() {
        let output = "";
        let leadingEmpty = true;
        for (let i=0; i<this.tape.length; i++) {
            if (leadingEmpty && this.tape[i+1] === '#' && i !== this.position && this.tape.length > 2)
                continue;
            leadingEmpty = false;
            if (i === this.position) 
                output += '[' + this.tape[i] + ']';
            else 
                output += this.tape[i];
        }
        return output;
    }

    getState() {
        return this.state;
    }

}

export default TuringMachine;