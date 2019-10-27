import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/decorators/parameter-decorators/parameter-decorator-static-member.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);