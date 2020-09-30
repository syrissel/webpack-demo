import 'jquery';
import 'popper.js';
import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// import '@fortawesome/fontawesome-free/css/all.css';

import _ from 'lodash';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';

// let $ = window.jQuery;

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());



document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin, bootstrapPlugin, interactionPlugin ],
        themeSystem: 'bootstrap',
        dateClick: function(info) {
            // $('#exampleModal').modal('show');
            // $('#date_title').html(info.dateStr);
            // var node = this;
            // node.setAttribute('tabindex', '0');
            // node.setAttribute('class', 'btn btn-secondary');
            // node.setAttribute('role', 'button');
            // node.setAttribute('data-toggle', 'popover');
            // node.setAttribute('data-trigger', 'focus');
            // node.setAttribute('title', 'Dismissible popover');
            // node.setAttribute('data-content', 'And here\'s some amazing content.');


            // $(this).popover('show');
            
        }
    });

    calendar.render();
});
