import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { GeneticService } from '../../service/genetic.service'


describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have correct Result list item Count', () => {
    const fixture = TestBed.createComponent(ResultComponent);
    const app = fixture.debugElement.componentInstance;
    let geneticService = fixture.debugElement.injector.get(GeneticService);
    fixture.detectChanges();
    let geneticResult = geneticService.getResult();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const list_item = fixture.nativeElement.query(By.css('.result-list-item'));

      expect(geneticResult.length).toBe(list_item.length);
    });
    expect(component).toBeTruthy();
  });
});
