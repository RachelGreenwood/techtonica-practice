class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
  }

  const eventObj1 = new Event(
    'Nothing But Thieves On Tour',
    'Performing their new album Dead Club City'
  );