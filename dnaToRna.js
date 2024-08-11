function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
  }

  const DNAtoRNA = dna => dna.replace(/T/g, 'U');