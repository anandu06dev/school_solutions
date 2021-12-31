import { Test, TestingModule } from '@nestjs/testing';
import { PostalRefService } from './postal-ref.service';

describe('PostalRefService', () => {
  let service: PostalRefService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostalRefService],
    }).compile();

    service = module.get<PostalRefService>(PostalRefService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
