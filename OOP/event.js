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

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
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
    constructor()
}