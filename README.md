# Kata-CQRS

CQRS Booking
You should implement a simple booking solution in CQRS architecture.

About CQRS
CQRS for Command Query Responsibility Segregation Pattern.

A query returns data and does not alter the state of the object. A command changes the state of an object but does not return any data.

We will split our code in read ans write code to really live this pattern

Booking subject
We want to make a booking solution for one hotel.

The first 2 users stories are :

As a user i whant to see all free rooms.
As a user i whant to book a room.

They whant to use the CQRS pattern, To do that we will have :

one command service with a function bookARoom(Booking) they call the WriteRegistry they notify the ReadRegistry called by query service with function Room[] freeRooms(arrival: Date, departure: Date)

The Booking struct contains
client id
room name
arrival date
departure date

And the Room struct contain only
room name
