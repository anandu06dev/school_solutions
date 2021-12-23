export const studentTable = Array(100)
    .fill(0)
    .map((i, ind) => ({
        admissionId: ind,
        admissionDate: new Date().getTime(),
        studentFirstName: `${generate(10)}`,
        studentClass: `class ${Math.floor(1 + Math.random() * 10)}`,
        studentLastName: `${generate(5)}`,
        studentFatherName: `fatherName ${ind + 1}`,
        studentMotherName: `motherName ${ind + 1}`,
        studentGender: ind % 2 === 0 ? 'male' : 'female',
        studentDOB: new Date().getTime(),
        studentCaste: ind % 3 === 0 ? 'MBC' : 'BC',
        studentSubCaste: 'Sub caste' + ind,
        studentReligion: 'Student Religion' + ind,
        studentNationality: 'Indian',
        studentMotherToungue: 'Tamil',
        studentLangaugeKnown: 'Tamil',
        studentBloodGroup: ind % 4 === 0 ? 'O+' : 'AB-',
        studentAadharNumber: Math.floor(100000000 + Math.random() * 900000000),
        studentEMINo: Math.floor(1000 + Math.random() * 9000),
        studentPreviousSchool: `Old School`,
        studentDiscount: 20,
    }))
function generate(count = 20,charSet='') {
    var s = '';
    var randomchar = function() {
        var n = Math.floor(Math.random() * 62);
        if (n < 10) return n; //1-10
        if (n < 36) return String.fromCharCode(n + 55); //A-Z
        return String.fromCharCode(n + 61); //a-z
      }
      while (s.length < count) s += randomchar();
      return s.replace(/[0-9]/g, '');
}
