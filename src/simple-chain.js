const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.chain.push("");
        } else {
            this.chain.push(`${value}`);
        }
        return this;
    },
    removeLink(position) {
        if (
            this.chain.length === 0 ||
            position < 1 ||
            position >= this.getLength() ||
            typeof position !== "number" ||
            !Number.isInteger(position)
        ) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!");
        }
        let partBeforeLink = this.chain.slice(0, position - 1);
        let partAfterLink = this.chain.slice(position, this.getLength());
        this.chain = [...partBeforeLink, ...partAfterLink];
        return this;
    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        let finish = "( " + this.chain.join(" )~~( ") + " )";
        this.chain = [];
        return finish;
    },
};

module.exports = {
    chainMaker
};
