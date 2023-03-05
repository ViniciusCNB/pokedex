import { InMemoryTrainersRepository } from '../../../../test/repositories/in-memory-trainers-repository';
import { Trainer } from '../../../app/entities/trainer';
import { CreateTrainer } from './create-trainer';

describe('CreateTrainer', () => {
  it('should be able to create a trainer', async () => {
    const trainersRepository = new InMemoryTrainersRepository();
    const createTrainer = new CreateTrainer(trainersRepository);

    const createRequest = {
      localId: '1',
      name: 'Ash',
      age: 15,
    };

    const { trainer } = await createTrainer.execute(createRequest);

    expect(trainer).toBeTruthy();
    expect(trainer).toBeInstanceOf(Trainer);
    expect(trainersRepository.trainers).toHaveLength(1);
    expect(trainersRepository.trainers[0]).toEqual(trainer);
    expect(trainer.localId).toEqual(createRequest.localId);
    expect(trainer.name).toEqual(createRequest.name);
    expect(trainer.age.value).toEqual(createRequest.age);
  });
});
