import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../crud/crud.service';
import { Location } from '@angular/common';
import { EditModel } from '../../crud/crudEdit/crud.edit.model';
import { BtnTypes } from '../../dynamicForm/btn.types';

@Component({
    selector: 'dashboard-crud-edit',
    template: '<dynamic-form [btnName]="btnName"></dynamic-form>'
})
export class DashboardCrudUpdate {
    public resolveData: EditModel = new EditModel();
    public btnName: BtnTypes = BtnTypes.UPDATE;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public crudService: CrudService,
                public location: Location) {

    }

    ngOnInit() {
        this.resolveData = this.route.snapshot.data['edit'];

        this.crudService.gridOptions.columnDefs = this.resolveData.columnDefs.form;

        if (this.resolveData.inputModel) {
            this.crudService.setModel(this.resolveData.inputModel);
        }
    }

    onSubmit() {
        this.crudService.updateRecord(this.crudService.model);
    }

    ngOnDestroy() {
        this.crudService.multipleSelectValid = false;
        this.crudService.setModel({});
    }

    back() {
        this.location.back();
    }
}