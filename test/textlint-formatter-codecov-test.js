import assert from "power-assert";
import path from "path";
import formatter from "../src/textlint-formatter-codecov";
describe("textlint-formatter-codecov", function () {
    context("TextLintResult[] to codecov", () => {
        it("should return json", () => {
            var expectedFilePath1 = `${__dirname}/fixtures/myfile.js`;
            var expectedFilePath2 = `${__dirname}/fixtures/readme.md`;
            const results = [
                {
                    filePath: expectedFilePath1,
                    messages: [
                        {
                            ruleId: "semi",
                            line: 1,
                            column: 23,
                            message: "Expected a semicolon."
                        }
                    ]
                },
                {
                    filePath: expectedFilePath2,
                    messages: [
                        {
                            ruleId: "no-todo",
                            line: 2,
                            column: 1,
                            message: "Found todo."
                        }
                    ]
                }
            ];
            const output = JSON.parse(formatter(results));
            const MissValue = 0;
            const HitValue = 1;
            assert.deepEqual(output, {
                "coverage": {
                    [path.relative(process.cwd(), expectedFilePath1)]: [null, MissValue, HitValue],
                    [path.relative(process.cwd(), expectedFilePath2)]: [null, HitValue, MissValue]
                },
                "messages": {
                    [path.relative(process.cwd(), expectedFilePath1)]: {
                        "1": "semi: Expected a semicolon."
                    },
                    [path.relative(process.cwd(), expectedFilePath2)]: {
                        "2": "no-todo: Found todo."
                    }
                }
            })
        });
    });
    context("duplicated results", () => {
        it("should return json", () => {
            var expectedFilePath1 = `${__dirname}/fixtures/myfile.js`;
            const results = [
                {
                    filePath: expectedFilePath1,
                    messages: [
                        {
                            ruleId: "semi",
                            line: 1,
                            column: 23,
                            message: "Expected a semicolon."
                        }
                    ]
                },
                {
                    filePath: expectedFilePath1,
                    messages: [
                        {
                            ruleId: "no-todo",
                            line: 1,
                            column: 1,
                            message: "Found todo."
                        }
                    ]
                }
            ];
            const output = JSON.parse(formatter(results));
            const MissValue = 0;
            const HitValue = 1;
            assert.deepEqual(output, {
                "coverage": {
                    [path.relative(process.cwd(), expectedFilePath1)]: [null, MissValue, HitValue]
                },
                "messages": {
                    [path.relative(process.cwd(), expectedFilePath1)]: {
                        "1": "no-todo: Found todo."
                    }
                }
            })
        });
    });
});