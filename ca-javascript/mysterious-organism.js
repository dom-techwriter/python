// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, arr) => {
    return {
      specimenNum: num,
      dna: arr,
      mutate() {
       let index = Math.floor(Math.random() * 15)
       op1 = returnRandBase()
       op2 = returnRandBase()
       if (this.dna[index] === op1) {
        // console.log(this.dna[index]);
        // console.log(op2);
        this.dna[index] = op2;
        // console.log(this.dna)
       } else {
        this.dna[index] = op2;
       }
       },
       compareDNA(pAequor) {
           let same = 0
           
           for (let i = 0; i < this.dna.length; i++) {
               for (let j = 0; i < pAequor.dna.length; i++) {
                if (this.dna[i] === pAequor.dna[j]) {
                    same += 1
                }
               }
           }
           let percentage = (same / 15) * 100
           console.log(same)
           console.log(percentage)
           return percentage
       },
       willLikelySurvive() {
           let cOrG = 0;
        for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] === "G" || this.dna[i] === "C") {
                cOrG += 1
            }
            // console.log(cOrG)
       }
       const survive = ((cOrG / 15) * 100) >= 60 ? true : false;
       return survive
      }
    }
}
  
  // console.log(pAequorFactory(5, mockUpStrand()));
  
  const something = pAequorFactory(5, mockUpStrand())
  const something1 = pAequorFactory(5, mockUpStrand())

  //console.log(something)
  
  //console.log(something.mutate())

  //console.log(something.compareDNA(something1))

  console.log(something.willLikelySurvive())

  let dnaNumber = 0;
  let survived = 0;
  let dataDna = [];

  while (survived < 30) {
    let current = pAequorFactory(dnaNumber, mockUpStrand())
    if (current.willLikelySurvive() === true) {
        survived += 1;
        dnaNumber = Math.floor(Math.random() * 20)
        console.log(dnaNumber)
        dataDna.push(current.dna)
    }
  }

  console.log(dataDna)


  
  
  
  
  
  
  