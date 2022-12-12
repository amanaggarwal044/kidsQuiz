import { NullSafetyCheckPipe } from './null-safety-check.pipe';

describe('NullSafetyCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new NullSafetyCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
