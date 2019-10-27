import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/objectLiteralComputedProperties/standalone-expression-with-method.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);