import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobListComponent } from './job-list.component';
import { JobService } from '../job.service';
import { FavoriteService } from '../favorite.service';
import { of } from 'rxjs';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;
  let jobServiceSpy: jasmine.SpyObj<JobService>;
  let favoriteService: FavoriteService;

  const mockJobs = [
    { id: 1, companyName: 'Company A', title: 'Job A', companyLogo: '', reference: 'ref-1' },
    { id: 2, companyName: 'Company B', title: 'Job B', companyLogo: '', reference: 'ref-2' }
  ];

  beforeEach(() => {
    const jobServiceSpyObj = jasmine.createSpyObj('JobService', ['getJobs']);
    TestBed.configureTestingModule({
      declarations: [ JobListComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: JobService, useValue: jobServiceSpyObj },
        FavoriteService
      ]
    });
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    jobServiceSpy = TestBed.inject(JobService) as jasmine.SpyObj<JobService>;
    favoriteService = TestBed.inject(FavoriteService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch jobs on initialization', () => {
    jobServiceSpy.getJobs.and.returnValue(of(mockJobs));
    fixture.detectChanges();
    expect(component.jobs.length).toBe(2);
  });
});
