import { InMemoryLocalsRepository } from '../../../../test/repositories/in-memory-locals-repository';
import { Local } from '../../../app/entities/local';
import { CreateLocal } from './create-local';

describe('CreateLocal', () => {
  it('should be able to create a local', async () => {
    const localsRepository = new InMemoryLocalsRepository();
    const createLocal = new CreateLocal(localsRepository);

    const request = {
      name: 'João Monlevade',
      description: 'description test',
    };

    const { local } = await createLocal.execute(request);

    expect(local).toBeTruthy();
    expect(local).toBeInstanceOf(Local);
    expect(local.name).toEqual(request.name);
    expect(local.description.value).toEqual(request.description);
    expect(localsRepository.locals).toHaveLength(1);
    expect(localsRepository.locals[0]).toEqual(local);
  });
});
