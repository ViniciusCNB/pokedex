import { InMemoryTrainersRepository } from '../../../../test/repositories/in-memory-trainers-repository';
import { CreateTrainer } from './create-trainer';
import { DeleteTrainer } from './delete-trainer';

describe('DeleteTrainer', () => {
  it('should be able to delete a trainer', async () => {
    const trainersRepository = new InMemoryTrainersRepository();
    const createTrainer = new CreateTrainer(trainersRepository);
    const deleteTrainer = new DeleteTrainer(trainersRepository);

    const createRequest = {
      localId: '1',
      name: 'Ash',
      age: 15,
    };

    const { trainer } = await createTrainer.execute(createRequest);

    const deleteRequest = {
      id: trainer.id,
    };

    const { id } = await deleteTrainer.execute(deleteRequest);

    expect(trainersRepository.trainers).toHaveLength(0);
    expect(trainer.id).toEqual(id);
  });
});
