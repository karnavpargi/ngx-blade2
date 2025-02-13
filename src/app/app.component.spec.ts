import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxBladeComponent } from 'projects/ngx-blade/src/public-api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBladeComponent, FormsModule, AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
