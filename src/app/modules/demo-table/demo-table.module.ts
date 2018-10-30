import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoTableComponent } from './demo-table.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        DemoTableComponent
    ],
    declarations: [
        DemoTableComponent
    ]

})

export class DemoTableModule {}