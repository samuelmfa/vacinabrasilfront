import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpConfig {

  constructor() { }

  public getHttpHeaders(): object {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('responseType', 'json');
    return {headers: headers};
  }

}
