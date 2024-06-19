import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favorite.service';

describe('FavoriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add job to favorites', () => {
    const job = { id: 1, companyName: 'Company A', title: 'Job A', companyLogo: '', reference: 'ref-1' };
    service.addFavorite(job.id);
    expect(service.isFavorite(job.id)).toBeTrue();
  });

  it('should remove job from favorites', () => {
    const job = { id: 1, companyName: 'Company A', title: 'Job A', companyLogo: '', reference: 'ref-1' };
    service.addFavorite(job.id);
    service.removeFavorite(job.id);
    expect(service.isFavorite(job.id)).toBeFalse();
  });
});
