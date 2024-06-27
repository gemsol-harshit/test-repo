'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "81bce436567c828e1db96c7bf477b15f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9d4687953af9e7d5416db146694d650c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a8502b66a1102cfd1bf96782037d588",
".git/logs/refs/heads/main": "8a9db2abddcefc5c366de9976093d764",
".git/objects/04/5232fd3d053b35bbc9236f953e030e963188d4": "edee62cf33c3f5a2b96f258ed76f51a3",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/08/2ee85228684a06a2cd2ae04ba1942095f86640": "ab79bac3f188a8a8267f971bef4b87ed",
".git/objects/08/9ff38ae1b08c129bcb4828e56a0ee97e16e7c1": "68d7e635578acb7413a8bd06e9b40f59",
".git/objects/08/fd45471b659599ed05f65e2ac74bbb44c06be7": "f651230fec585b389b2dcf7c78a52038",
".git/objects/0a/71d552b672ae5d0abd7a9b28fd9b6162dfb320": "e8d6519183890037e502b4346d78a412",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/498f4cb92e288a168dc300450849f5cff2fa3c": "604a9072f80be9e1dfd998d11db85638",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/c56e24081bac6bf2b49961e2810378db56822d": "cb70352fc5f194faf5230f33e0df9e5b",
".git/objects/17/e171c55af4394c3c993d58efd9ef2bbea2b105": "78eca4dc49be434324dc2a65bc56cae7",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/0526fbae3d80cf0970d19e8598893d04d62a35": "9a7ba11d6854dd7fe93aad6fd668ff2f",
".git/objects/19/5f2c2124167fdff44f1b5b0db9691a942006c6": "ec27be1f8a8d1e8042376cf7f8ac8281",
".git/objects/1c/71e236bdcc09643f01a857f81551ad07362b2d": "40717c592bf877395d37a04d4b8b676b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/27/752c4be787ebb069f3d2843d6596a7d6543380": "5fab5774a1a5e2e8d9213651028159a7",
".git/objects/28/847f1f230f708e26ce0c0cfebe7107b28e7162": "5b005fa710e5075160ba97195f0723db",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/f29395d2783cf09e57a475f2e414dbcf4935be": "79ffc35393c57b11dd938a69216ef9d4",
".git/objects/38/39b74441447714507b20ecaa449b5e61af93e2": "6a5c7271c4826ecdf7ae46a920b5d78a",
".git/objects/38/86a7f758c46dbaf85ebd237576ccad64f7abe5": "97065221e8f130b708506ca34719b968",
".git/objects/39/157cafc88ca419b3ec6a9ec40126a0f57e7f09": "ec92794ad5bbc2096176499514cf673b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/26d7be63d961b6eb9b44c558ee3c856971ccd0": "dbdb20565910b0e28f78ae558b28499b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/48/217617005575345943d8460b76c03381fed224": "6eb02af7684e2da217c7c7aea938335e",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/8ad601dd9392611eb39b6e6c7c1f16f7498b62": "c896c40f272118dff31720ab2df8c653",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/551f6e9016f625a04395dee083fc9274e95bf0": "55f37dfffe4bc40d559d70627ccb319b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/07f6b06dd3cba258471a823799bf605dc058e5": "62af5df3e04b2667618351a2c568b3f5",
".git/objects/50/5f9681e95e0d6e38119b8c6a749258838c2872": "f25143b7a047faeaa65561b071ad01d0",
".git/objects/52/38bf1bef954e9c16147557a0fe12666551dd10": "ed47311bf22bf40cb0e6f6513fead318",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/874871a6f7fd192338f191f4d5a9d0cc8d1ccb": "26cd9da8efa4a8de148abe32dbc4b76b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/9d908f850d045d26ad19327d617ecd887d9622": "4557e1f5ae6c13273f6bded920a81b4b",
".git/objects/5d/0a7ddbdae619d7c7137a714e8d5771d12b9a37": "8831c0a526d15c9a0cef6e0f59f0a66c",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/cccad4a6daaa36f6d67d7c0b5925bb1498d1e5": "95619163a7d31fab31f49cbc3cecca87",
".git/objects/64/a887f2bffad1f00156f83f57f7dab56e015bf6": "9f07c94299af032ae7ef8ebf468d6ac3",
".git/objects/70/03a86fe0b95031f88a7bc69c3ba536fc76f1c5": "30b2f41ea0a8e0fb202f083a6e12c379",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/79/add7df7dcb01322d137aac89f8dbca68938e0d": "5ba93a2de15bb4eaa7ac1fb1029a0875",
".git/objects/79/f77d706091b78b373f2580e5c6b2aa593a78e3": "75ab8ef783d452cafbe258b9c8adacbd",
".git/objects/7a/a62530d3abad24bc027707f92912d6475ea73d": "245f85f1584f48aef1a4646528635980",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/80/62c6a5b26e847f513ed4847a2ff890b5304f0a": "4d3d79a85dc8b2e1617f37ad6fdd654a",
".git/objects/81/3011e9a58f210634e9deff9452e40aa45b5297": "666807cb67a689213359d70d5686ed63",
".git/objects/86/110f07016eb3ff6f47a0af69ff8a658b81afc9": "268c9d0e3711d06c8c1710d3f33b5d69",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/35ab941599610fad82ee98be943328c9a53ca3": "f3b7e9899f1fef4b124657ec85d3a240",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/dd6f5ed52af5bc07e0ad7e91c2ab354b942350": "19ed7be23ebc8c39bf0cda5156afd632",
".git/objects/8d/32d8878dec162e57c8ef076573c5fa56042823": "c83727c7952e1f0e60bf254f9271d666",
".git/objects/8e/807acaf9799dbf75c28650dd890bbf9f2d9648": "fa8adbd17d181f655666ca1c1d78136c",
".git/objects/8e/8819f9ee0f7bf0dfc0514536d8f0bfa607eed6": "07afaee897769dcdfd8d3b8f9ef5db20",
".git/objects/94/504478eb02a7952b9394adedc008d2f997a62a": "8cd00303bc13b5a5f9ebe07a60dc28b8",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/332e0e9e2179e11f3da8454d93e5ea1c57ef57": "6eb05abf7ba58e57050a3a2cd8a70421",
".git/objects/97/d7b77edc0d92b86c9f18f163284c105ff727e8": "4854a847f23d31e28840fb713e6a8101",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/549adfd41bab6b546b565fe104f50cdd3e9162": "ac3bbb396386d01311ff257eb7f11536",
".git/objects/a1/6d26338d777f2ca94778915ec027de9236dbbe": "559593bf9413ccf9412aa8f0b6f3ac4b",
".git/objects/a6/0528d2512ba242a9eae516e4d5a0ccf5f7dcbb": "da38a1215b99d7ee839276349e0c3aa9",
".git/objects/a6/0c41fa541e01314207653f49961ed66aab5788": "f138eb7b4322d5b8c17809fa8c68c063",
".git/objects/ad/7ed36eb8213bb7a39979f43ba15dfd832576d1": "972344e38e3b438cbe33d8f06885cb07",
".git/objects/ad/ca2903bf848674fa743d941ae062e5b73075f8": "c265e4045238f29ac6fd1b17d6e833ff",
".git/objects/b0/80f47b4f4e50f677a023935567672e527f2d91": "9263f09f03c2f82b7c6fd8b20c39a8c3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/62e502177dacf033de0344cc774f09804d25f6": "7f76e5cf31b85db891e33113afce79a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/7070133a606e9b4b925a7c6d9f84aa02ff8aab": "fe35ba9aa8ee62fa26d0d9d344c3fdd7",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c1/14f07f58c687bf01890fccaf206d9b29e872ce": "ede627cfcd8484f0cfd7fbf19f238966",
".git/objects/c2/63d9b0f4ab78ad22bdabe6f8f71950740e8d88": "4c862138e20418ac029d4b3c0f924b30",
".git/objects/c6/20ddaf96f50b4196d433f081b32d119f274f29": "7b99ed418eabbb35dddbe990ab3a3f8d",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/33dbabac3dc50e147d8c6fd750520da33ae7e4": "b371bc64cb7153291e7a8286766f7bd3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5c9fbc8218b1bf7cca1dc84a0971d480e694fe": "8d3fb26df428c2567f633f05a45992db",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/df76c7b821aecc17dfc0afde3a632c61452045": "25edc1dd9245e91b2305685dd69e588d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/b75b7a4780d825b6f7647edd6d0eaecfa11193": "6747b9f9e945560799367d07069acc42",
".git/objects/e2/0f01dba3b5b26d4e267793269d601fe7a1421f": "9bb06bdf1865cb2e0e6a90a2184d7229",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/517e1e959d262b11c27c87920217907bb3164a": "6e0bc4180cf29eaa1491ddde08272658",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/518ab0d9620d356518c4b45b48308adf0e4aa5": "5cfcb173a790871f6978806a215eb35a",
".git/objects/ed/c2eac3ea99e19bb8ba16569c45eac882488243": "1178c0955476cf0b0a9e090046b1e349",
".git/objects/ef/ab0c4bc5ec30dd82ca39f9d35f20baf0b28fb8": "8c9306501d777ad9d5398aba0ff90420",
".git/objects/ef/bdc6592111d82b16392125cb15a62f71c6293a": "f0a7458b04bc96d1449616a60aa19cb3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/94c57c51d3c18fad230acf3fbfa15d1ad12ec7": "54a197e6be92b67143a92286660f5fce",
".git/objects/f9/d2d4629fb91a8725e286240eb86e8e9794bb34": "2be7a187558603d9892268f1c2e96059",
".git/objects/fa/3ed5b1cc2c75b54d16dba7a48fef9cf5bb977c": "a5b5dfe752f9e0810a6e4d8039d25714",
".git/refs/heads/main": "7ec9aa32c526304c7aa91ca763694336",
"assets/AssetManifest.bin": "e8d1469538caf4fed1b52659ab745946",
"assets/AssetManifest.bin.json": "b428215a9eaef911380f08752fafd75f",
"assets/AssetManifest.json": "cf02b96b653433e7bc839f55a0414ed0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/admin_get_started.png": "b8b53f8a8065fa43a6d92b8b4978b04e",
"assets/assets/images/back.png": "47af886be3cea603efbccfc71a98151c",
"assets/assets/images/dairyPe_logo.png": "758b7457dfae424bd1e1d9fc4ff77e49",
"assets/assets/images/dairy_go_logo.png": "5a33f6c3e6b40d7d57059c380e4ecb29",
"assets/assets/images/dashboard_horizontal.png": "c3220ddb481a3afe114725da5fe6c11d",
"assets/assets/images/footerMilkSplash.png": "98a970aa4aa796dd5fed68d23aa293e5",
"assets/assets/images/front.png": "a28019c3d2db3c8ac2b70851b14a06fd",
"assets/assets/images/head-logo.png": "0a1c7938a4360889e56cd3dc76a31ede",
"assets/assets/images/Milk.png": "fa3c66a1e7f1be300506f72056e7be49",
"assets/assets/images/milkcarton.png": "79e25531a4e3104ecac633dff6cec9a7",
"assets/assets/images/milkPr.png": "b894001b8b7a9f654d7e47cbc3433700",
"assets/assets/images/profile.png": "9efb6349fd8693f7c8ac5dbba562a742",
"assets/FontManifest.json": "2e9b1f549c0b6137ce0bb829cd9433c5",
"assets/fonts/MaterialIcons-Regular.otf": "46fe761b2339388420efd48c8b23d420",
"assets/NOTICES": "555a2a440d39ac9aabf6f05e3a4ff529",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "14da5decf499af7b2973319b7be04f01",
"icons/head-logo.png": "0a1c7938a4360889e56cd3dc76a31ede",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "28e66c3b955ba37b5c2fda0e5e97476a",
"/": "28e66c3b955ba37b5c2fda0e5e97476a",
"main.dart.js": "57b9f2430dde41f0d3d5946734e14dd5",
"manifest.json": "f69eaf2720b771a2df07842e20795d2a",
"version.json": "8410e41b3e6af194a2baf34bd896a018"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
