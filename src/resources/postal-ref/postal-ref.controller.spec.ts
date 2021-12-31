import { Test, TestingModule } from '@nestjs/testing';
import { PostalRefController } from './postal-ref.controller';
import { PostalRefService } from './postal-ref.service';

describe('PostalRefController', () => {
  let controller: PostalRefController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostalRefController],
      providers: [PostalRefService],
    }).compile();

    controller = module.get<PostalRefController>(PostalRefController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
