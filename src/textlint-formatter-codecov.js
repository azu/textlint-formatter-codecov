// LICENSE : MIT
"use strict";
import * as fs from "fs";
import * as path from "path";
import groupBy from "lodash.groupby";
import range from "lodash.range";
/*
Example output:

{
  "coverage": {
  // always start with null
    "path/to/file.py": [null, 1, 0, null, true, 0, 0, 1, 1],
    "path/to/other.py": [null, 0, 1, 1, "1/3", null]
  },
  "messages": {
    "path/to/other.py": {
      "1": "custom message for line 1"
    }
  }
}

 */
/**
 * @param {TextLintResult[]} results
 * @param {number} lineCount
 */
function getCoverage(results, lineCount = 0) {
    const coverageResults = range(1, lineCount + 1, 0);
    coverageResults.unshift(null);// add null
    results.forEach(result => {
        /**
         * @type TextLintMessage
         */
        result.messages.forEach(message => {
            // lineNumber start with 1
            const startLineNumber = message.line;
            // lint error line == miss hit line
            coverageResults[startLineNumber] = 0;
        });
    });
    return coverageResults;
}
/**
 * @param {TextLintResult[]} results
 */
function getMessages(results) {
    const messagesObject = {};
    results.forEach(result => {
        /**
         * @type TextLintMessage
         */
        result.messages.forEach(message => {
            // lineNumber start with 1
            const startLineNumber = message.line;
            // lint error line == miss hit line
            messagesObject[startLineNumber] = `${message.ruleId}: ${message.message}`;
        });
    });
    return messagesObject;
}
/**
 *
 * @param {TextLintResult[]} results
 */
export default function (results) {
    const allResultsByFilePath = groupBy(results, result => {
        return result.filePath;
    });
    const outputObject = {"coverage": {}, "messages": {}};
    Object.keys(allResultsByFilePath).forEach(filePath => {
        const relativeFilePath = path.relative(process.cwd(), filePath);
        const resultsByFile = allResultsByFilePath[filePath];
        const content = fs.readFileSync(filePath, "utf-8");
        const lineCount = content.split(/\r\n|\r|\n/).length;
        outputObject["coverage"][relativeFilePath] = getCoverage(resultsByFile, lineCount);
        outputObject["messages"][relativeFilePath] = getMessages(resultsByFile);
    });
    return JSON.stringify(outputObject);
};