// LICENSE : MIT
"use strict";
import toCodecov from "./to-json";
/**
 *
 * @param {TextLintResult[]} results
 */
function reportCodecov(results) {
    const output = toCodecov(results);
    return JSON.stringify(output);
}

module.exports = reportCodecov;
module.exports.toJSON = toCodecov;