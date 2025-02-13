import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BladeConfig, NgxBladeComponent } from 'projects/ngx-blade/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        JsonPipe,
        NgxBladeComponent
    ],
})
export class AppComponent {
  public bladeTitle = 'Transaction Details';
  public showBlade = false;

  public example1 = `<ngx-blade>
        <ng-template ngxBladeHeader>
            <!-- Blade header content, can have text, images and even other components -->
        </ng-template>
        <ng-template ngxBladeHeader #myBlade>
            <!-- Blade body content, can have text, images and even other components -->
        </ng-template>
    </ngx-blade>`;

  public example2 = `<ngx-blade>
        <ng-template ngxBladeHeader>
            <h3>Title</h3>
        </ng-template>
        <ng-template ngxBladeHeader #myBlade>
            <button (click)="myBlade.close()">Click me to close blade</button>
        </ng-template>
    </ngx-blade>`;

  public bladeConfig: BladeConfig = {
    closeButton: true,
    maximizeButton: true,
    isModal: false,
  };

  public onBladeClose(): void {
    this.showBlade = false;
  }
}
