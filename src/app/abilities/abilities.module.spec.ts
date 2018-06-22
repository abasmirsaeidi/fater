import { AbilitiesModule } from './abilities.module';

describe('AbilitiesModule', () => {
  let abilitiesModule: AbilitiesModule;

  beforeEach(() => {
    abilitiesModule = new AbilitiesModule();
  });

  it('should create an instance', () => {
    expect(abilitiesModule).toBeTruthy();
  });
});
