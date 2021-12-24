

let generateStudentClass = () =>{
    let studentClass: string[]=['preKG','LKG','UKG'];
    return Array(15).fill(0).map((item,index)=>{
        if(index<=2){

            return {label:studentClass[index],value:studentClass[index]}
        }
        return {label: `class ${index+1}`,value:index+1}
    });
}


export const studentFormFields = [



    {
        key: 'studentFirstName',
        type: 'input',
        className:'col-12 col-sm-12 col-md-6',
        templateOptions: {
            label: 'First Name',
        },
    },
    {
        key: 'studentLastName',
        type: 'input',
        className:'col-12 col-sm-12 col-md-6',
        templateOptions: {
            label: 'Last Name',
        },
    },
    {
        key: 'studentClass',
        type: 'select',
        className:'col-12 col-sm-12 col-md-6',

        templateOptions: {
            label: 'Student Class',
            placeholder: 'Select placeholder',
            required: false,
            options: generateStudentClass(),
        },
    },
    {
        key: 'admissionDate',
        type: 'datepicker',
        className:'col-12 col-sm-12 col-md-6',

        templateOptions: {
            label: 'Student Class',
        },
    },
   
]

