class CA1Rule90 {
  constructor(initialStates) {
    this.rule = {
      "000": "0",
      "001": "1",
      "010": "0",
      "011": "1",
      "100": "1",
      "101": "0",
      "110": "1",
      "111": "0",
    };
    this.states = initialStates;
  }

  next() {
    const currentStates = `0${this.states}0`;
    const nextStates = [];
    for (let c = 0; c < currentStates.length; c++) {
      const state = currentStates.substring(c, c + 3);
      // console.log(state);
      nextStates[c] = this.rule[state];
    }
    this.states = nextStates.join("");
  }
}

function addResult(ca) {
  const result = document.getElementById("result");
  for (let i = 0; i < ca.states.length; i++) {
    const cell = document.createElement("div");
    if (ca.states[i] === "0") {
      cell.classList.add("cell", "dead");
    } else {
      cell.classList.add("cell", "live");
    }
    result.appendChild(cell);
  }
}

const ca1 = new CA1Rule90("000000000010000000000");
console.log(ca1);
for (let j = 0; j <= 10; j++) {
  addResult(ca1);
  ca1.next();
}
