const person = {
    firsName: "Kiki",
    lastName: "Agustin",
    fullName: function () {
        return ` ${this.firsName} ` `${this.lastName}`;
    },
    weigh: 65,
    heigh: 172,
    isWeighIdeal: function () {
        const heighMinus100 = this.heigh - 100;
        return heighMinus100 - (heighMinus100 * 10) / 100 < this.weigh;
    }

};

const countries = {
    ID: {
        province: ["jawa barat", "jawa tengan", "jawa timur"],
        city: ["bandung", "ciamis", "sumedang", "cirebon"]
    },
    NW: {}
}

console.log(countries.ID.province)

// optioanal chainning
console.log(countries?.TH?.province ?? "Not Found")