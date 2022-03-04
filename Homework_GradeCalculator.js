function gradeCalculator (homeworkAvg, quizAvg, examAvg) {
    return homeworkAvg * 0.10 + quizAvg * 0.15 + examAvg * 0.75;
}

grade1 = gradeCalculator(100, 90, 70);
grade2 = gradeCalculator(50, 95, 100);
grade3 = gradeCalculator(85, 90, 65);

console.log(grade1);
console.log(grade2);
console.log(grade3);