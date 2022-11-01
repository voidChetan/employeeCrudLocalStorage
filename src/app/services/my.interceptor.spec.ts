import { TestBed } from '@angular/core/testing';

import { MyInterceptor } from './my.interceptor';

describe('MyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyInterceptor = TestBed.inject(MyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
