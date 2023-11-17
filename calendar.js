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
]
let day2 = formatDate(new Date('December 20, 2023'))
eventDates[day2] = [
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
  disableMobile: "true",
  onChange: function(date, str, inst) {
    let contents = '';
    if(date.length) {
        for(i=0; i < eventDates[str].length; i++) {
            contents += `<div class="event"><div class="title-container"><span class="title">${eventDates[str][i].title}</span><span class="location">${eventDates[str][i].time}/${eventDates[str][i].location}</span></div><div class="event-desc">${eventDates[str][i].desc}</div></div>`;
      }
    }
    $('.selected-date').html(flatpickr.formatDate(date[0], 'l, F J'));
    $('.num-events').html(`(${eventDates[str].length} event${eventDates[str].length == 1 ? '' : 's'})`);
    $('.calendar-events').html(contents)
  },
  locale: {
    weekdays: {
      shorthand: ["S", "M", "T", "W", "T", "F", "S"],
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

// eventCaledarResize($(window));
// $(window).on('resize', function() {
//   eventCaledarResize($(this))
// })

// function eventCaledarResize($el) {
//   let width = $el.width()
//   if(flatpickr.selectedDates.length) {
//     flatpickr.clear()
//   }
//   if(width >= 992 && flatpickr.config.showMonths !== 3) {
//     flatpickr.set('showMonths', 1)
//     flatpickr.set('maxDate', maxDate[3])
//   }
//   if(width < 992 && width >= 768 && flatpickr.config.showMonths !== 2) {
//     flatpickr.set('showMonths', 2)
//     flatpickr.set('maxDate', maxDate[2])
//   }
//   if(width < 768 && flatpickr.config.showMonths !== 1) {
//     flatpickr.set('showMonths', 1)
//     flatpickr.set('maxDate', maxDate[1])
//     $('.flatpickr-calendar').css('width', '')
//   }
// }

function formatDate(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1; //Month from 0 to 11
    let y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}
