import { TestBed } from '@angular/core/testing'
import { HttpErrorHandler } from './http-handle-error.service'

describe('HttpErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpErrorHandler]
  }))

  it('should be created', () => {
    const service: HttpErrorHandler = TestBed.get(HttpErrorHandler)
    expect(service).toBeTruthy()
  })
})
