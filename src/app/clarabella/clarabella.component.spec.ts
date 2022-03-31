import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { PlutoService } from '../services/pluto.service';
import { Hero, TopolinoService } from '../services/topolino.service';

import { ClarabellaComponent } from './clarabella.component';

describe('ClarabellaComponent', () => {
  let component: ClarabellaComponent;
  let service: PlutoService
  let fixture: ComponentFixture<ClarabellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ClarabellaComponent,
        { provide: PlutoService }
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(ClarabellaComponent);
    // component = fixture.componentInstance;
    // component
    // fixture.detectChanges();
    component = new ClarabellaComponent(new PlutoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {

    expect(component.isOn)
      .withContext('off at first')
      .toBe(false);
    component.lightClicked();
    expect(component.isOn)
      .withContext('on after click')
      .toBe(true);
    component.lightClicked();
    expect(component.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    expect(component.message)
      .withContext('off at first')
      .toMatch(/is off/i);
    component.lightClicked();
    expect(component.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });


  it('raises the selected event when clicked', () => {

    const hero: Hero = {id: 42, name: 'Test'};
    component.hero = hero;
  
    component.selected.pipe(first()).subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
    component.heroClicked();
  });

});
