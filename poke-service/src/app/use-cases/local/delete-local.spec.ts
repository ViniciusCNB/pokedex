import { InMemoryLocalsRepository } from '../../../../test/repositories/in-memory-locals-repository';
import { CreateLocal } from './create-local';
import { DeleteLocal } from './delete-local';

describe('DeleteLocal', () => {
  it('should be able to delete a local', async () => {
    const localsRepository = new InMemoryLocalsRepository();
    const createLocal = new CreateLocal(localsRepository);
    const deleteLocal = new DeleteLocal(localsRepository);

    const createRequest = {
      name: 'João Monlevade',
      description: 'description test',
    };

    const { local } = await createLocal.execute(createRequest);

    const deleteRequest = {
      id: local.id,
    };

    const { id } = await deleteLocal.execute(deleteRequest);

    expect(localsRepository.locals).toHaveLength(0);
    expect(deleteRequest.id).toEqual(id);
  });
});
