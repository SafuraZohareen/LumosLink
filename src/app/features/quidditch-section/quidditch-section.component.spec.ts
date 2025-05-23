import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuidditchSectionComponent } from './quidditch-section.component';

describe('QuidditchSectionComponent', () => {
  let component: QuidditchSectionComponent;
  let fixture: ComponentFixture<QuidditchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuidditchSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuidditchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
