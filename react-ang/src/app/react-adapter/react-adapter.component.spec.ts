import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAdapterComponent } from './react-adapter.component';

describe('ReactAdapterComponent', () => {
  let component: ReactAdapterComponent;
  let fixture: ComponentFixture<ReactAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactAdapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
