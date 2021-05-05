var minNumberOfFrogs = function(croakOfFrogs) {
  const getNextChar = (currChar) => {
    switch (currChar) {
      case 'c':
        return 'r';
      case 'r':
        return 'o';
      case 'o':
        return 'a';
      case 'a':
        return 'k';
      case 'k':
        return true;
    }
  };
            
  const frogs = {r: 0, o: 0, a: 0, k: 0};
  var [currChar, nextChar, output, cycleEnd] = [null,  null, 0, false];

  for (var i in croakOfFrogs) {
    currChar = croakOfFrogs[i];
    nextChar = getNextChar(currChar);
    // console.log([currChar, nextChar, output, cycleEnd, currFrogCount, frogs]);

    if (! nextChar) return -1;

    if (currChar === 'c') {
      if (! cycleEnd) output++;
    } else {
      if (frogs[currChar] > 0) {
        frogs[currChar]--;
        
        if (currChar === 'k') cycleEnd = true;
      } else {
        return -1;
      }
    }

    if (nextChar !== true) {
      frogs[nextChar]++;
    }
  }
  
  if (frogs.r > 0 || frogs.o > 0 || frogs.a > 0 || frogs.k > 0) {
    return -1;
  } else {
    return output;
  }
}

console.log(minNumberOfFrogs("ccccccccccrrccccccrcccccccccccrcccccccccrcccccccccccrcccccrcccrrcccccccccccccrocrrcccccccccrccrocccccrccccrrcccccccrrrcrrcrccrcoccroccrccccccccorocrocccrrrrcrccrcrcrcrccrcroccccrccccroorcacrkcccrrroacccrrrraocccrrcrrccorooccrocacckcrcrrrrrrkrrccrcoacrcorcrooccacorcrccccoocroacroraoaarcoorrcrcccccocrrcoccarrorccccrcraoocrrrcoaoroccooccororrrccrcrocrrcorooocorarccoccocrrrocaccrooaaarrcrarooaarrarrororrcrcckracaccorarorocacrrarorrraoacrcokcarcoccoorcrrkaocorcrcrcrooorrcrroorkkaaarkraroraraarooccrkcrcraocooaoocraoorrrccoaraocoorrcokrararrkaakaooroorcororcaorckrrooooakcarokokcoarcccroaakkrrororacrkraooacrkaraoacaraorrorrakaokrokraccaockrookrokoororoooorroaoaokccraoraraokakrookkroakkaookkooraaocakrkokoraoarrakakkakaroaaocakkarkoocokokkrcorkkoorrkraoorkokkarkakokkkracocoaaaaakaraaooraokarrakkorokkoakokakakkcracarcaoaaoaoorcaakkraooaoakkrrroaoaoaarkkarkarkrooaookkroaaarkooakarakkooaokkoorkroaaaokoarkorraoraorcokokaakkaakrkaaokaaaroarkokokkokkkoakaaookkcakkrakooaooroaaaaooaooorkakrkkakkkkaokko"));