import Instruction from './Instruction';

class Program {

    constructor() {
        this.instructions = [];
        this.indexedMap = {};
    }

    addInstruction(c) {
        this.instructions.push(c);
        if (this.indexedMap[c.state] == null) {
            this.indexedMap[c.state] = {
                direction: null,
                targets: {}
            }
        }
        this.indexedMap[c.state]['direction'] = c.direction;
        this.indexedMap[c.state]['targets'][c.target] = {
            replace: c.replace,
            nextState: c.nextState
        };
    }

    loadCode(code) {
        let lines = code.split(/\r?\n/);
        
        let fastNotation, subNotationG,subNotation;
        fastNotation = /^q([0-9]+)\]([lr])(\(.\/.,q(?:h|[0-9]+)\))*(#.*)?$/;
        subNotationG = /\((.)\/(.),q((?:h|[0-9]+))\)/g; // (n/m,q)
        subNotation = /\((.)\/(.),q((?:h|[0-9]+))\)/; // (n/m,q)

        this.clear();

        lines.forEach( (line) => {
            line = line.replace(/\s+/g, '');
            line = line.replace(/\((.),q((?:h|[0-9]+))\)/g, "($1/$1,q$2)");

            let groups = line.match(fastNotation);
            if (groups != null) {
                let s, d, t, r, n;
                s = groups[1];
                d = groups[2] === 'r' ? true : false;

                let terms = line.match(subNotationG);
                if (terms != null) {
                    terms.forEach( (term) => {
                        let subgroups = term.match(subNotation);
                        if (subgroups != null) {
                            t = subgroups[1]; 
                            r = subgroups[2];
                            n = subgroups[3];
                            this.addInstruction(new Instruction(s,d,t,r,n));
                        }
                    })
                }
            }
        }) 
    }

    clear() {
        this.instructions = [];
        this.indexedMap = {};
    }

    toString() {
        let output = "";
        this.instructions.forEach( (c) => {
            output += c.toString() + '\n';
        })
        return output;
    }

}

export default Program;