import { workerSaga } from './sagas';
describe('Get categories saga tests', () => {
  it('calls workerSaga with error when not given state', () => {
    const iterator = workerSaga();
    expect(iterator.next().value).toHaveProperty('type');
  });
});
