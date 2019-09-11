import { TestBed, inject } from '@angular/core/testing';

import { SendOrderService } from './send-order.service';

describe('SendOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendOrderService]
    });
  });

  it('should ...', inject([SendOrderService], (service: SendOrderService) => {
    expect(service).toBeTruthy();
  }));
});
