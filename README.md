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

```
1: # Example [![codecov.io](https://codecov.io/github/azu/textlint-formatter-codecov/coverage.svg?branch=master)](https://codecov.io/github/azu/textlint-formatter-codecov?branch=master)
2: 
3(✔textlint error): - [ ] TODO 
4:
5(✔textlint error): jQuerl is not jQuery.
6: 
7: Here.
```

- 5 Hit(line)
- 2 Missed(line)

=> 1 - (2/7) = 71.42% = Text Coverage!

## Similar formatter

- [textlint-formatter-lcov](https://github.com/azu/textlint-formatter-lcov "textlint-formatter-lcov")
    - for [lcov](http://ltp.sourceforge.net/coverage/lcov/geninfo.1.php) format.

## FAQ

### Which formatter is better for Code Coverage(Text Coverage)?

We recommended that use [Codecov](https://codecov.io/ "Codecov - Code Coverage") with [textlint-formatter-codecov](https://github.com/azu/textlint-formatter-codecov "textlint-formatter-codecov").
Because, [Codecov JSON](https://gist.github.com/codecov-io/96e1addb96856a9034c2 "Codecov JSON") support `messages`.

![messsage](https://monosnap.com/file/bthUiT82JwLp7VU8tJcYWNaMCQuXTN.png)

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

