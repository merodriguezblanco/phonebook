import DS from 'ember-data';
import Ember from 'ember';

let Contact = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  address: DS.attr('string'),
  photo: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});

Contact.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'Selma',
      lastName: 'Johansen',
      email: 'sjohansen@fake.com',
      phone: '201-456-4315',
      address: '330 Audreanne Overpass, Willie furtNM69756, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 2,
      firstName: 'Jenny',
      lastName: 'Larsen',
      email: 'jlarsen@fake.com',
      phone: '234-567-8476',
      address: '4528 Amelia Lock, Stark stad AK 50204, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 3,
      firstName: 'Natalie',
      lastName: 'Andresen',
      email: 'nadresen@fake.com',
      phone: '345-678-2379',
      address: '074 Demarcus Villages, Lake Moses KY 82134-5875, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 4,
      firstName: 'Mary',
      lastName: 'Pettersen',
      email: 'mpettersen@fake.com',
      phone: '456-789-8376',
      address: '942 Florence Pines, East Tressie MS 42180-3842, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 5,
      firstName: 'Mathias',
      lastName: 'Parker',
      email: 'mparker@fake.com',
      phone: '567-890-4726',
      address: '8125 Carroll Forks, Keyon fort MT 15013-2689, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 6,
      firstName: 'Mathias',
      lastName: 'Ryan',
      email: 'mryan@fake.com',
      phone: '678-910-2084',
      address: '7660 Fadel Hollow, Port Irwin MS 75411-5042, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 7,
      firstName: 'Andreas',
      lastName: 'Green',
      email: 'agreen@fake.com',
      phone: '789-201-8371',
      address: '137 Eula Throughway, Port Fay NH 56310-9419, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 8,
      firstName: 'Tobias',
      lastName: 'Thomson',
      email: 'tthomson@fake.com',
      phone: '890-202-2349',
      address: '8955 Neal Tunnel, New Serenity view AR 45879, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 9,
      firstName: 'Sebastian',
      lastName: 'Rodriguez',
      email: 'srodriguez@fake.com',
      phone: '901-203-8372',
      address: '545 Raphael Burg, Wintheiser burgh WA 43834-0863, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    },
    {
      id: 10,
      firstName: 'Lisa',
      lastName: 'Schmidt',
      email: 'lschmidth@fake.com',
      phone: '201-403-7563',
      address: '7727 Luis Springs, Wisozk stad KS 61885, US',
      photo: 'http://2.bp.blogspot.com/-iZ9aRe865rs/UlUxTymZZAI/AAAAAAAAves/mInkBFJkvkE/s200/images.jpg'
    }
  ]
});

export default Contact;
