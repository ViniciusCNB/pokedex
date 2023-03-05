import { InMemoryTrainersRepository } from '../../../../test/repositories/in-memory-trainers-repository';
import { CreateTrainer } from './create-trainer';
import { FindAllTrainer } from './find-all-trainer';

describe('FindAllTrainer', () => {
  it('should be able to find all trainers', async () => {
    const trainersRepository = new InMemoryTrainersRepository();
    const createTrainer = new CreateTrainer(trainersRepository);
    const findAllTrainer = new FindAllTrainer(trainersRepository);

    const createRequest = {
      localId: '1',
      name: 'Ash',
      age: 15,
    };

    const createRequest2 = {
      localId: '2',
      name: 'Broke',
      age: 23,
    };

    const trainer1 = await createTrainer.execute(createRequest);
    const trainer2 = await createTrainer.execute(createRequest2);

    const trainersResponse = await findAllTrainer.execute();

    expect(trainersRepository.trainers).toHaveLength(2);
    expect(trainersResponse.trainer).toEqual([
      trainer1.trainer,
      trainer2.trainer,
    ]);
  });
});
