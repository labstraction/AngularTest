import { TestBed } from '@angular/core/testing';
import { PaperinoService } from './paperino.service';
import { PlutoService } from './pluto.service';

describe('PaperinoService', () => {
  let service: PaperinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //service = TestBed.inject(PaperinoService);
  });

  it('should be created', () => {
    service = new PaperinoService(new PlutoService());
    expect(service).toBeTruthy();
  });


  it('#getValue should return real value from the real service', () => {
    service = new PaperinoService(new PlutoService());
    expect(service.getValue()).toBe('REAL VALUE');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    service = new PaperinoService(fake as PlutoService);
    expect(service.getValue()).toBe('FAKE VALUE');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const plutoServiceSpy =
      jasmine.createSpyObj('PlutoService', ['getValue', 'vivaPippo']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    plutoServiceSpy.getValue.and.returnValue(stubValue);

    const stubValue2 = 'Viva! Viva!';
    plutoServiceSpy.vivaPippo.and.returnValue(stubValue2);

    service = new PaperinoService(plutoServiceSpy);

    expect(service.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue.toUpperCase());
    expect(plutoServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(plutoServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

});
