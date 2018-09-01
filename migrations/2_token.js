var ERC721 = artifacts.require('./ERC721.sol')
var ERC721Basic = artifacts.require('./ERC721Basic.sol')
var ERC721BasicToken = artifacts.require('./ERC721BasicToken.sol')
var ERC721Holder = artifacts.require('./ERC721Holder.sol')
var ERC721Receiver = artifacts.require('./ERC721Receiver.sol')
var ERC721Token = artifacts.require('./ERC721Token.sol')

module.exports = function (deployer) {
  deployer.link(ERC721Token, ERC721)
  deployer.link(ERC721Token, ERC721Basic)
  deployer.link(ERC721Token, ERC721BasicToken)
  deployer.link(ERC721Token, ERC721Holder)
  deployer.link(ERC721Token, ERC721Receiver)

  deployer.deploy(ERC721Token, "land", "la")
}
