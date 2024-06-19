import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ JobService ]
    });
    service = TestBed.inject(JobService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch jobs from API', () => {
    const mockJobs = [
      { id: 1, companyName: 'Company A', title: 'Job A', companyLogo: '', reference: 'ref-1' },
      { id: 2, companyName: 'Company B', title: 'Job B', companyLogo: '', reference: 'ref-2' }
    ];

    service.getJobs().subscribe(jobs => {
      expect(jobs).toEqual(mockJobs);
    });

    const req = httpTestingController.expectOne('/jobs');
    expect(req.request.method).toEqual('GET');
    req.flush(mockJobs);
  });

  it('should fetch job details from API', () => {
    const jobId = 1;
    const mockJobDetails = {
      id: jobId,
      companyName: 'Company A',
      title: 'Job A',
      companyLogo: '',
      reference: 'ref-1',
      description: 'Job description.'
    };

    service.getJobById(jobId).subscribe((jobDetails: any) => {
      expect(jobDetails).toEqual(mockJobDetails);
    });

    const req = httpTestingController.expectOne(`/jobs/${jobId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockJobDetails);
  });
});
