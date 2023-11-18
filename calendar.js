// generate events
let eventDates = {}
let day1 = formatDate(new Date('November 23, 2023'))
eventDates[day1] = [
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]
let day2 = formatDate(new Date('November 20, 2023'))
eventDates[day2] = [
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]
let day3 = formatDate(new Date('November 29, 2023'))
eventDates[day3] = [
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        title: "Event Name",
        time: "18:30 - 19:30",
        location: "Location",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

let flatpickr = $('#calendar .placeholder').flatpickr({
  inline: true,
  minDate: 'today',
  maxDate: new Date(new Date().setMonth(new Date().getMonth() + 5)),
  showMonths: 1,
  enable: Object.keys(eventDates),
  disableMobile: true,
  monthSelectorType: "static",
  defaultDate: new Date(),
  onReady: function() {showDots()},
  onMonthChange: function() {showDots()},
  onChange: function(date, str) {
    let contents = '';
    if(date.length) {
        for(i=0; i < eventDates[str].length; i++) {
            contents += `<div class="event"><div class="title-container"><span class="title">${eventDates[str][i].title}</span><span class="location">${eventDates[str][i].time}/${eventDates[str][i].location}</span></div><div class="event-desc">${eventDates[str][i].desc}</div></div>`;
      }
    }
    $('.selected-date').html(flatpickr.formatDate(date[0], 'F J, Y'));
    $('.num-events').html(`(${eventDates[str].length} event${eventDates[str].length == 1 ? '' : 's'})`);
    $('.calendar-events').html(contents)
    showDots();
  },
  locale: {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"],
      longhand: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]
    }
  }
})

function showDots() {
    const enabled = Array.from(
        document.querySelectorAll('.flatpickr-day')
    ).filter(el => !el.closest('.flatpickr-disabled'));

    for (const event in enabled) {
        const formattedDate = formatDate(new Date($(enabled[event]).attr('aria-label')));
        const events = eventDates[formattedDate];
        let dot_container = document.createElement("div");
        dot_container.classList.add("dot-container");
        
        for (let i = 0; i < events.length; i++) {
            if (i === 4) {break;}
            const dot = document.createElement("span");
            dot.classList.add("dot");
            $(dot_container).append(dot);
        }
        enabled[event].appendChild(dot_container);
    }
}

function formatDate(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1; //Month from 0 to 11
    let y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}
