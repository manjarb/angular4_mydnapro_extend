import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListComponent } from './result-list.component';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Render correct Result list text', () => {
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const header = fixture.debugElement.query(By.css('li'));
      const el = header.nativeElement;

      expect(el.innerText).toBe(`${app.result.name} ${app.index + 1} ${app.result.symbol} ${app.index + 1}`);
    });
  });
});
