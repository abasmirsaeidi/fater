import { AssistModule } from './assist.module';

describe('AssistModule', () => {
  let assistModule: AssistModule;

  beforeEach(() => {
    assistModule = new AssistModule();
  });

  it('should create an instance', () => {
    expect(assistModule).toBeTruthy();
  });
});
