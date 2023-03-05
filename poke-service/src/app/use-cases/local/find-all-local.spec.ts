import { InMemoryLocalsRepository } from '../../../../test/repositories/in-memory-locals-repository';
import { CreateLocal } from './create-local';
import { FindAllLocal } from './find-all-local';

describe('FindAllLocal', () => {
  it('should be able to find all locals', async () => {
    const localsRepository = new InMemoryLocalsRepository();
    const createLocal = new CreateLocal(localsRepository);
    const findAllLocal = new FindAllLocal(localsRepository);

    const request = {
      name: 'João Monlevade',
      description: 'description test',
    };

    const request2 = {
      name: 'Ipatinga',
      description: 'description test2',
    };

    const local1 = await createLocal.execute(request);
    const local2 = await createLocal.execute(request2);

    const localResponse = await findAllLocal.execute();

    expect(localResponse.local).toEqual(localsRepository.locals);
    expect(localResponse.local[0]).toEqual(localsRepository.locals[0]);
    expect(localResponse.local[1]).toEqual(localsRepository.locals[1]);
    expect(localResponse.local).toEqual([local1.local, local2.local]);
  });
});
