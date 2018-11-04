import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../../core/service/core.service';
import { Meta, Title } from '@angular/platform-browser';
import { projectsValue } from './projects.model';

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
   headerValue: string;
  constructor(
    private route: ActivatedRoute,
    private _Service: CoreService,
    meta: Meta,
    title: Title,
  ) {
    this.route.params.subscribe(params => {
      this.sub = params['id'];

      // this._Service.getProjectData().subscribe(
      //   data => {
      //     if(data[this.sub] !== undefined){
      //       this.dataSource = data[this.sub];
      //     }else{
      //       this.dataSource = [];
      //     }
      //   },
      //   err => console.error(err),
      //    () => console.log('done ')
      //  );
       if (projectsValue[this.sub] !== undefined) {
          this.dataSource = projectsValue[this.sub].data;
          this.headerValue = projectsValue[this.sub].h1;
          title.setTitle(projectsValue[this.sub].title);
    meta.addTags([
      { name: 'author',   content: 'jkelectrocorps.in'},
      { name: 'keywords', content: projectsValue[this.sub].keywords},
      { name: 'description', content: projectsValue[this.sub].description }
    ]);
        } else {
        this.dataSource = [];
       }

   });
   }
  displayedColumns: string[] = ['title'];
  dataSource: PeriodicElement[];

  ngOnInit() {

  }




}
