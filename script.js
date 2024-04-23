class TouristSpotManager {
  constructor() {
      this.spots = new Map();
  }

  addSpot(id, name, location) {
      this.spots.set(id, { name, location });
  }

  getSpot(id) {
      return this.spots.get(id);
  }

  deleteSpot(id) {
      this.spots.delete(id);
  }

  forEachSpot(callback) {
      this.spots.forEach((spot, id) => {
          callback(spot, id);
      });
  }

  getSpotIds() {
      return this.spots.keys();
  }

  getSpotNames() {
      return this.spots.values().map(spot => spot.name);
  }
}

const touristSpotManager = new TouristSpotManager();
touristSpotManager.addSpot(1, "Mayon Skyline View Deck", "Albay");
touristSpotManager.addSpot(2, "Legazpi Boulevard", "Albay");
touristSpotManager.addSpot(3, "Liñon Hill Nature Park", "Albay");

console.log("Spot Names:", touristSpotManager.getSpotNames());

console.log("Spot IDs:");
touristSpotManager.forEachSpot((spot, id) => {
  console.log(id);
});

touristSpotManager.deleteSpot(2);

console.log("Remaining Spot IDs after deletion:");
touristSpotManager.forEachSpot((spot, id) => {
  console.log(id);
});
