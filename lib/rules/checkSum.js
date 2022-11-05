/**
 * @fileoverview Tests for address check sum rule.
 * @author bradley@cyphersecurity.xyz
 */

"use strict";

import { ethers } from "ethers";

/// @notice This function checks if the address is a valid checksum address
/// @param address The address to check
/// @return true if the address is a valid checksum address, false if not
function checkSum(address) {
  return ethers.utils.getAddress(address);
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Checks for address checksums",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
    schema: [],
  },
  create: function (context) {
    return {
      // custom code for checking address checksums
      InvalidChecksumDeclaration(node) {
        context.report({
          node,
          message: "Incorrect checksum, please use a valid Ethereum address.",
        });
      },
    };
  },
};
