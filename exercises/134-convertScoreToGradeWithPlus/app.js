function convertScoreToGradeWithPlusAndMinus(score) {
    let text = score.toString()
    let LastNumber = text.substring(text.length,1)
    let letter =''
    let sign = ''
      if(score>100 || score<0){ letter = 'INVALID SCORE'}
    else if(score>89){letter = 'A'}
    else if(score>79){letter = 'B'}
    else if(score>69){letter = 'C'}
    else if(score>59){letter = 'D'}
    else { letter = 'F'}

    if(LastNumber == 2 || LastNumber == 1) sign = '-'
    if(LastNumber == 8 || LastNumber == 9) sign = '+'

    if(letter !='F'){
        return letter + sign
    } else { return letter}
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'