export const studentDetailColDef = [
  {
    headerName: `Primary Students Details`,
    children: [
      {
        headerName: `#`,

        field: `admissionId`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        width:50,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.admissionId,
      },
      {
        headerName: `Student Profile`,

        field: `studentFirstName`,
        suppressMovable: true,
        columnGroupShow: 'open',
        // floatingFilter: false,
        // wrapText: true,
        // autoHeight: true,
        // filterParams: {
        //   buttons: ['reset', 'apply'],
        //   debounceMs: 200,
        // },

        width:50,
        valueFormatter: (params: any) => params.data.studentFirstName,
        cellRenderer:(params:any)=>{
          return `<p data-letters="${params.data.studentFirstName.charAt(0)}"></p>`
        }
      },
      {
        headerName: `Student Name`,

        checkboxSelection: false,
        field: `studentLastName`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        // pinned: 'left',
        filter: 'agTextColumnFilter',

        valueFormatter: (params: any) =>{
          let s = `${params.data.studentFirstName} ${params.data.studentLastName}`;
          return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
        }
      },
      {
        headerName: ` Class`,

        field: `symbol`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        width:75,

        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentClass,
      },
      {
        headerName: `Gender`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        width:75,

        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentGender,
      },
      {
        headerName: `Blood Group`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        width:75,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentBloodGroup,
      },
    ],
  },
  {
    headerName: `Secondary Student Details`,
    children: [
      {
        headerName: `D.O.B`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentDOB,
      },
      {
        headerName: `Caste`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentGender,
      },
      {
        headerName: `Sub Caste`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentSubCaste,
      },
      {
        headerName: `Religion`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentReligion,
      },
      {
        headerName: `Nationality`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentNationality,
      },
      {
        headerName: `Mother Toungue`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) =>
          params.data.studentMotherToungue,
      },
      {
        headerName: `Languages Known`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) =>
          params.data.studentLanguagesKnown,
      },
      {
        headerName: `Student Aadhar Number`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) =>
          params.data.studentAadharNumber,
      },
      {
        headerName: `Student EMI No`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentEMINo,
      },
      {
        headerName: `Student Previous School`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) =>
          params.data.studentPreviousSchool,
      },
      {
        headerName: `Discount`,

        field: `last_price`,
        suppressMovable: true,
        columnGroupShow: 'open',
        floatingFilter: false,
        wrapText: true,
        autoHeight: true,
        filterParams: {
          buttons: ['reset', 'apply'],
          debounceMs: 200,
        },
        valueFormatter: (params: any) => params.data.studentDiscount,
      },
    ],
  },
]

export const defaultColDefinition = {
  flex: 1,
  sortable: true,
  filter: false,
  lockVisible: true,
  wrapText: true,
  resizable: true,
}
