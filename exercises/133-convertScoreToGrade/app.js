function convertScoreToGrade(score) {
    if(score>100 || score<0){ return 'INVALID SCORE'}
    else if(score>89){return 'A'}
    else if(score>79){return 'B'}
    else if(score>69){return 'C'}
    else if(score>59){return 'D'}
    else { return 'F'}
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'