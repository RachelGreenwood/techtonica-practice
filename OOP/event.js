class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
  }

const eventObj1 = new Event('Nothing But Thieves', 'Dead Club City Tour');
const eventObj2 = new Event('Hozier', 'Unreal Unearth Tour');
const eventObj3 = new Event('Melanie Martinez', 'Portals Tour');

const eventArray = new Array();