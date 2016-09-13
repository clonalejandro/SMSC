import { Component, ModuleWithProviders, NgModule, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CubeGridModule } from "./spinner/cubeGrid/cubeGrid.component";
import { LoadingRouterOutletService } from "../services/loading/loadingRouterOutlet.service";

@Component({
    selector: 'loading-router-outlet',
    encapsulation: ViewEncapsulation.Native,
    styles: [
        `
        router-outlet.hide + * {
            display: none;
        }

        .cubeGrid sk-cube-grid,
        .cubeGrid {
            height: 100%;
            width: 100%;
            display: flex;
        }

        .cubeGrid .cube-grid-spinner {
            margin: auto !important;
        }
    `
    ],
    template: `
        <div class="cubeGrid" *ngIf="loadingService.loading"><sk-cube-grid></sk-cube-grid></div>
        <router-outlet [ngClass]="{hide: loadingService.loading}"></router-outlet>
    `
})

export class LoadingRouterOutlet {
    constructor(public loadingService: LoadingRouterOutletService) {
    }
}

@NgModule({
    imports: [CommonModule, CubeGridModule, RouterModule],
    exports: [LoadingRouterOutlet],
    declarations: [LoadingRouterOutlet]
})
export class LoadingRouterOutletModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoadingRouterOutletModule,
            providers: []
        };
    }
}
