/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AjaxdataService } from './ajaxdata.service';

describe('AjaxdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxdataService]
    });
  });

  it('should ...', inject([AjaxdataService], (service: AjaxdataService) => {
    expect(service).toBeTruthy();
  }));
});
