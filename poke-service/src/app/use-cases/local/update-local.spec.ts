import { InMemoryLocalsRepository } from '../../../../test/repositories/in-memory-locals-repository';
import { CreateLocal } from './create-local';
import { UpdateLocal } from './update-local';

describe('UpdateLocal', () => {
  it('should be able to update a local', async () => {
    const localsRepository = new InMemoryLocalsRepository();
    const createLocal = new CreateLocal(localsRepository);
    const updateLocal = new UpdateLocal(localsRepository);

    const request = {
      name: 'João Monlevade',
      description: 'description test',
    };

    const { local } = await createLocal.execute(request);

    const request2 = {
      id: local.id,
      name: 'Ipatinga',
      description: 'description test',
    };

    const newLocal = await updateLocal.execute(request2);

    expect(localsRepository.locals).toHaveLength(1);
    expect(localsRepository.locals[0]).toEqual(newLocal.newLocal);
    expect(newLocal.newLocal.name).toEqual(request2.name);
    expect(newLocal.newLocal.description.value).toEqual(request2.description);
  });
});
