import { InMemoryTrainersRepository } from '../../../../test/repositories/in-memory-trainers-repository';
import { CreateTrainer } from './create-trainer';
import { FindTrainer } from './find-trainer';

describe('FindTrainer', () => {
  it('should be able to find a trainer', async () => {
    const trainersRepository = new InMemoryTrainersRepository();
    const createTrainer = new CreateTrainer(trainersRepository);
    const findTrainer = new FindTrainer(trainersRepository);

    const createRequest = {
      localId: '1',
      name: 'Ash',
      age: 15,
    };

    const { trainer } = await createTrainer.execute(createRequest);

    const findRequest = {
      id: trainer.id,
    };

    const findResponse = await findTrainer.execute(findRequest);

    expect(findResponse.trainer).toEqual(trainer);
    expect(trainer.id).toEqual(findResponse.trainer.id);
  });
});
