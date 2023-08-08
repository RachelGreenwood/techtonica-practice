class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }
    addAvailableTickets(type, price) {
        this.availableTickets.push(new TicketType(type, price));
    }
    allTickets() {
        let str = `${this.name} - ${this.description} - All tickets: `
        for (let i = 0; i < this.availableTickets.length; i++) {
            str += `${i + 1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price}) `;
        }
        return str;
    }
    searchTickets(lower, upper) {
        let priceRange = [];
        for (let i = 0; i < this.availableTickets.length; i++) {
            if (this.availableTickets[i].price >= lower && this.availableTickets[i].price <= upper) {
                priceRange.push(this.availableTickets[i]);
            }
        }
        let str2 = `${this.name} = ${this.description} - Eligible tickets: `;
        let sorted = priceRange.sort((a, b) => lower - upper);
        for (let i = 0; i < sorted.length; i++) {
            str2 += `${i + 1}. ${sorted[i].name} ($${sorted[i].price}) `
        }
        if (priceRange.length === 0) {
            return "No tickets available";
        } else {
            return str2;
        }
    }
  }


const eventObj1 = new Event('Nothing But Thieves', 'Dead Club City Tour');
const eventObj2 = new Event('Hozier', 'Unreal Unearth Tour');
const eventObj3 = new Event('Melanie Martinez', 'Portals Tour');

const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
    // console.log(eventObj1);
    // console.log(eventArray);

 document.addEventListener('DOMContentLoaded', () => {
    // Handler when the DOM is fully loaded
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.searchTickets(0, 125)}`;
    });
    document.querySelector('#event').innerHTML = html;
  });

class TicketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

eventObj1.addAvailableTickets("Dead Club City Citizen", 30);
eventObj1.addAvailableTickets("Zzzero Member", 50);
    // console.log(eventObj1);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)
//    console.log(eventObj2);

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)
//    console.log(eventObj3);

// console.log(eventObj1.allTickets());
// console.log(eventObj2.allTickets());
// console.log(eventObj3.allTickets());

// console.log(eventObj3.searchTickets(0, 250));
// console.log(eventObj3.searchTickets(0, 0));