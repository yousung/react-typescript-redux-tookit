import counterReducer, {
  CounterState,
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice';

describe('카운터 리듀서를 테스트한다', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle',
  };
  it('기본값은 0이다', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('숫자를 1 증가 시킬수 있다', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('숫자를 1 감소 시킬수 있다', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('원하는 만큰 숫자를 증가 시킬 수 있다', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
