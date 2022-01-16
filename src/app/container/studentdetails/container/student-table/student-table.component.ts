import { OnInit,Component } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ActivatedRoute, Router } from "@angular/router";
import { TableColumn, TableConfig } from "@utils/interfaces/tableColumn";
import { generateTableColumnHeader } from "@utils/utility";
import { TableConsts } from "@widgets/mat-custom-table/consts/table";
import { studentDetail } from "../../models/studentDetail.model";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private bottomSheet: MatBottomSheet,private router:Router) {}


  columns = generateTableColumnHeader(Object.keys(studentDetail));
  tableConf:TableConfig = {
    showAvatar:true,
    showCheckBox:false,
    avatarKey:'studentFirstName',
    stickyColumn:'studentFirstName'
    
  }
  
  data: any[]=[];
  ngOnInit() {
    this.data = this.actRoute.snapshot?.data?.['students'] || [];
  }


  onTableAction(event:any) {
    console.log('event', event)
  }

  
}
