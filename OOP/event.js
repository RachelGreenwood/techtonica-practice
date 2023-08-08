class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(type, price) {
        this.availableTickets.push(new TicketType(type, price));
    }
  }


const eventObj1 = new Event('Nothing But Thieves', 'Dead Club City Tour');
const eventObj2 = new Event('Hozier', 'Unreal Unearth Tour');
const eventObj3 = new Event('Melanie Martinez', 'Portals Tour');

const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
    console.log(eventObj1);
    console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });

class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

eventObj1.addAvailableTickets("General Admission", 30);
eventObj1.addAvailableTickets("Floor Seating", 50);
    console.log(eventObj1);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
   console.log(eventObj2);

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
   console.log(eventObj3);