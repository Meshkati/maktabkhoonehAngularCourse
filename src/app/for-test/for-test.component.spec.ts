import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTestComponent } from './for-test.component';
import { ForTestService } from '../for-test.service';

describe('ForTestComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Title should be For Test!', async(() => {
    fixture.whenStable().then(() => {
      const title = component.title
      expect(title).toEqual('For Test!');
    })
  }))

  it('Title should be displayed in the template', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('h1').textContent).toContain(component.title)
  })

  it('Title should be match to the proper service method result', async(() => {
    const testService = fixture.debugElement.injector.get(ForTestService);
    fixture.whenStable().then(
      () => {
        expect(testService.getTitle()).toEqual(component.title)
      }
    )
  }))
});
