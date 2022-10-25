import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreacionComponent } from './recreacion.component';

describe('RecreacionComponent', () => {
  let component: RecreacionComponent;
  let fixture: ComponentFixture<RecreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [RecreacionComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
