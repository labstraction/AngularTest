import { TestBed } from '@angular/core/testing';

import { PlutoService } from './pluto.service';

describe('PlutoService', () => {
  let service: PlutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });

  it('#removeEven should return an array of only odd numbers', () => {
    const numbersTestArray = [1, 5, 6, 1000, 101, 3, 2];
    expect(service.removeEven(numbersTestArray)).toEqual([1, 5, 101, 3]);
  }
  )

  it('#returnSumOfEven should return the sum of even numbers', () => {
    const numbersTestArray = [1, 5, 6, 1000, 101, 3, 2];
    expect(service.returnSumOfEven(numbersTestArray)).toBe(1008);

    const numbersTestArray2 = [1, 5, 6, 101, 3, 2];
    expect(service.returnSumOfEven(numbersTestArray2)).toBe(8);
  }
  )


});
