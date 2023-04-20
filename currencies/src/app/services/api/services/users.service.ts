/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { HistorySchema } from '../models/history-schema';
import { SuscribeCurrencySchema } from '../models/suscribe-currency-schema';
import { UserSchema } from '../models/user-schema';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userGetUserGet
   */
  static readonly UserGetUserGetPath = '/user/getUser';

  /**
   * Get default user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userGetUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetUserGet$Response(params?: {
  }): Observable<StrictHttpResponse<UserSchema>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UserGetUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserSchema>;
      })
    );
  }

  /**
   * Get default user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userGetUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetUserGet(params?: {
  }): Observable<UserSchema> {

    return this.userGetUserGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserSchema>) => r.body as UserSchema)
    );
  }

  /**
   * Path part for operation userSubscribeCurrencyPatch
   */
  static readonly UserSubscribeCurrencyPatchPath = '/user/subscribeCurrency';

  /**
   * Suscribe to a currency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSubscribeCurrencyPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSubscribeCurrencyPatch$Response(params: {
    body: SuscribeCurrencySchema
  }): Observable<StrictHttpResponse<{
'status'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UserSubscribeCurrencyPatchPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'status'?: string;
        }>;
      })
    );
  }

  /**
   * Suscribe to a currency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userSubscribeCurrencyPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSubscribeCurrencyPatch(params: {
    body: SuscribeCurrencySchema
  }): Observable<{
'status'?: string;
}> {

    return this.userSubscribeCurrencyPatch$Response(params).pipe(
      map((r: StrictHttpResponse<{
'status'?: string;
}>) => r.body as {
'status'?: string;
})
    );
  }

  /**
   * Path part for operation userUnsubscribeCurrencyPatch
   */
  static readonly UserUnsubscribeCurrencyPatchPath = '/user/unsubscribeCurrency';

  /**
   * Unsuscribe to a currency.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userUnsubscribeCurrencyPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUnsubscribeCurrencyPatch$Response(params: {
    body: SuscribeCurrencySchema
  }): Observable<StrictHttpResponse<{
'status'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UserUnsubscribeCurrencyPatchPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'status'?: string;
        }>;
      })
    );
  }

  /**
   * Unsuscribe to a currency.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userUnsubscribeCurrencyPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUnsubscribeCurrencyPatch(params: {
    body: SuscribeCurrencySchema
  }): Observable<{
'status'?: string;
}> {

    return this.userUnsubscribeCurrencyPatch$Response(params).pipe(
      map((r: StrictHttpResponse<{
'status'?: string;
}>) => r.body as {
'status'?: string;
})
    );
  }

  /**
   * Path part for operation userGetCurrenciesHistoryGet
   */
  static readonly UserGetCurrenciesHistoryGetPath = '/user/getCurrenciesHistory';

  /**
   * Get currencies history.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userGetCurrenciesHistoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetCurrenciesHistoryGet$Response(params?: {
  }): Observable<StrictHttpResponse<HistorySchema>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UserGetCurrenciesHistoryGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HistorySchema>;
      })
    );
  }

  /**
   * Get currencies history.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userGetCurrenciesHistoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetCurrenciesHistoryGet(params?: {
  }): Observable<HistorySchema> {

    return this.userGetCurrenciesHistoryGet$Response(params).pipe(
      map((r: StrictHttpResponse<HistorySchema>) => r.body as HistorySchema)
    );
  }

}
