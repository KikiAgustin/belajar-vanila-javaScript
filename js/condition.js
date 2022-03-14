const person = {
    firsName: "Kiki",
    lastName: "Agustin",
    fullName: function () {
        return ` ${this.firsName} ` `${this.lastName}`;
    },
    weigh: 70,
    heigh: 172,
    weighIdeal: function () {
        const heighMinus100 = this.heigh - 100;
        return heighMinus100 - (heighMinus100 * 10) / 100;
    },
    needDiet: function () {
        const weighIdeal = this.weighIdeal();
        if (weighIdeal - 5 > this.weigh)
            return `You need more protein, need more ${weighIdeal - this.weigh} kg`;
        else if (weighIdeal + 5 < this.weigh)
            return `You nedd a mayo diet, need reduce weigh `;
        else
            return "You are in a good shape";
    },

};

console.log(person.weighIdeal());
console.log(person.needDiet());