import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { UserProfileComponent } from './user-profile.component';
// import { AuthService } from '../../service/auth.service'

describe('UserProfileComponent', () => {
  // let component: UserProfileComponent;
  // let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent]
    });
  });

  it('should create app', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should Render First name and Last name Correctly', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const header = fixture.debugElement.query(By.css('h2'));
      const el = header.nativeElement;

      expect(el.value).toBe(`${app.user.firstname} ${app.user.lastname}`);
    });
  });

  it('should Render Email and Date of Birth Correctly', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const header = fixture.debugElement.query(By.css('h4'));
      const el = header.nativeElement;

      expect(el.value).toBe(` ${app.user.email} ${app.user.dob}` );
    });
  });
});
