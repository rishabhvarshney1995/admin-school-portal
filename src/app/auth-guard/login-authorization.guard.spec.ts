import { TestBed, async, inject } from '@angular/core/testing';

import { LoginAuthorizationGuard } from './login-authorization.guard';

describe('LoginAuthorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthorizationGuard]
    });
  });

  it('should ...', inject([LoginAuthorizationGuard], (guard: LoginAuthorizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
