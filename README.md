# textlint-formatter-codecov [![Build Status](https://travis-ci.org/azu/textlint-formatter-codecov.svg?branch=master)](https://travis-ci.org/azu/textlint-formatter-codecov)

[textlint](https://github.com/textlint/textlint "textlint") formatter for [Codecov](https://codecov.io/ "Codecov - Code Coverage").

## What is Codecov format?

See [Codecov JSON](https://gist.github.com/codecov-io/96e1addb96856a9034c2 "Codecov JSON example").

```json
{
  "coverage": {
    "path/to/file.py": [null, 1, 0, null, true, 0, 0, 1, 1],
    "path/to/other.py": [null, 0, 1, 1, "1/3", null]
  },
  "messages": {
    "path/to/other.py": {
      "1": "custom message for line 1"
    }
  }
}
```

## Installation

    npm install textlint-formatter-codecov

## Usage

    # In Travis CI | Circle CI...
    npm install codecov.io textlint textlint-formatter-codecov -D
    textlint -f codecov | codecov.io

See [Example](example/) and [Result](https://codecov.io/github/azu/textlint-formatter-codecov).

- [![codecov.io](https://codecov.io/github/azu/textlint-formatter-codecov/coverage.svg?branch=master)](https://codecov.io/github/azu/textlint-formatter-codecov?branch=master)

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

