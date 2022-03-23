//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol"

contract BoredApe is ERC20 {
    struct Stake {

    }

   function stakeBRT (uint256 amount) public {
       Stake storage s = stakes(msg.sender);
       transfer(address)
   }

   function myStake() external returns {

   }
}
