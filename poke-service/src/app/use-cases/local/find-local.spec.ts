import { InMemoryLocalsRepository } from '../../../../test/repositories/in-memory-locals-repository';
import { CreateLocal } from './create-local';
import { FindLocal } from './find-local';

describe('FindLocal', () => {
  it('should be able to find a local', async () => {
    const localsRepository = new InMemoryLocalsRepository();
    const createLocal = new CreateLocal(localsRepository);
    const findLocal = new FindLocal(localsRepository);

    const createRequest = {
      name: 'João Monlevade',
      description: 'description test',
    };

    const { local } = await createLocal.execute(createRequest);

    const findRequest = {
      id: local.id,
    };

    const localResponse = await findLocal.execute(findRequest);

    expect(localResponse.local).toEqual(local);
    expect(localsRepository.locals[0]).toEqual(localResponse.local);
    expect(localResponse.local.id).toEqual(local.id);
  });
});
