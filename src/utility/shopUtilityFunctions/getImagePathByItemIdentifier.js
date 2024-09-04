export function getImagePathByItemIdentifier(identifier) {
  const imagePaths = [
    {
      identifier: 1,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/TShirtsCards/MonkeyTShirt.png",
    },
    {
      identifier: 2,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/TShirtsCards/FunkyWhaleT-shirt.png",
    },
    {
      identifier: 3,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/TShirtsCards/LuckyFrogT-shirt.png",
    },
    {
      identifier: 4,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/TShirtsCards/KnockOnItTShirt.png",
    },
    {
      identifier: 5,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/ArtCards/FlowersInTheWind.png",
    },
    {
      identifier: 6,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/ArtCards/GhostFlowers.png",
    },
    {
      identifier: 7,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/ArtCards/FunkyAsteroids.png",
    },
    {
      identifier: 8,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/Plates/KnockKnock.png",
    },
    {
      identifier: 9,
      path: "/shopHomePageImages/shopItemsCards/ShopCardDesigns/TShirtsCards/JokeLogoTShirt.png",
    },
  ];

  const imageObject = imagePaths.find(
    (item) => item.identifier === Number(identifier)
  );

  console.log(
    imageObject ? imageObject.path : "No match found",
    "funkyFunction"
  );

  return imageObject ? imageObject.path : "";
}
