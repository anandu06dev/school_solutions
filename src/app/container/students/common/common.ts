import { IShowTableOnBottomSheet, BottomsheetsComponent } from "../components/bottomsheets/bottomsheets.component";

export function openBottomSheet(student: any,bottomSheet:any) {
    let forBottomSheet: IShowTableOnBottomSheet;

    return bottomSheet.open(BottomsheetsComponent, {
      data: {
        viewType: 'list',
        renderData: { ...student },
        data: { ...student },
        label: 'Student lists',
      },
    });

    
    // sheetRef.afterDismissed().subscribe((data:any) => {
    //   if (data) {
    //     this.dataShare.updateSingleStudentDetails(data);
    //     this.dataShare.updateFlag(true);
    //     this.dataShare.tabindex = this.trackScreenView
    //       .toLowerCase()
    //       .includes('small')
    //       ? 1
    //       : 2;
    //   }
    // });
  }