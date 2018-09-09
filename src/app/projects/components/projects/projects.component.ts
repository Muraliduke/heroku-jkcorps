import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../../core/service/core.service';

export interface PeriodicElement {
 
  title: string;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
   sub;
  constructor(private route: ActivatedRoute,private _Service: CoreService,) { }
  displayedColumns: string[] = ['title'];
  dataSource : PeriodicElement[];
  ngOnInit() {
     this.route.params.subscribe(params => {
      this.sub = params['id'];
   });

   this._Service.getProjectData().subscribe(
    data => {
      if(data[this.sub] !== undefined){
        this.dataSource = data[this.sub];
      }else{
        this.dataSource = [];
      } 
      
    },
    err => console.error(err),
     () => console.log('done ')
   );

  }

}
