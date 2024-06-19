import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { JobDetailsComponent } from './job-details.component';
import { JobService } from '../job.service';
import { of } from 'rxjs';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;
  let jobServiceSpy: jasmine.SpyObj<JobService>;

  const mockJob = {
    id: 1,
    companyName: 'Company A',
    title: 'Job A',
    companyLogo: 'logo-url',
    types: ['full-time'],
    industries: ['Tech'],
    publishDate: '2024-06-19 08:00:00',
    location: 'Location A',
    reference: 'ref-1',
    description: 'Job description.'
  };

  beforeEach(async () => {
    const jobServiceSpyObj = jasmine.createSpyObj('JobService', ['getJobById']);
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsComponent ],
      providers: [
        { provide: JobService, useValue: jobServiceSpyObj },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    jobServiceSpy = TestBed.inject(JobService) as jasmine.SpyObj<JobService>;
    jobServiceSpy.getJobById.and.returnValue(of(mockJob));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch job details on initialization', () => {
    expect(component.job).toEqual(mockJob);
  });

  it('should render job details correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.job-title').textContent).toContain(mockJob.title);
    expect(compiled.querySelector('.job-company-name').textContent).toContain(mockJob.companyName);
    expect(compiled.querySelector('.job-publish-date').textContent).toContain(mockJob.publishDate);
    expect(compiled.querySelector('.job-location').textContent).toContain(mockJob.location);
    expect(compiled.querySelector('.job-description').innerHTML).toContain(mockJob.description);
  });
});
