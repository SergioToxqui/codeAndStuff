var readline = require('readline')

// string to show in a text response 
var options = 'list, show n, reserve n, occupancy n max, search amenity'

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// object rooms with 10 objects
var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    },
    {
        price: 90000,
        location: '1 Broad St, NY',
        maxOccupants: 33,
        amenities: ['disco ball']
    },
    {
        price: 2000,
        location: '2312 144th St, NY',
        maxOccupants: 4,
        amenities: []
    },
    {
        price: 200000,
        location: '47-10 Austell Pl, NY',
        maxOccupants: 200,
        amenities: ['drill', 'sometimes wifi', 'luna']
    },
    {
        price: 0,
        location: 'Times Square, NY',
        maxOccupants: 3,
        amenities: ['sewage water', 'hagglers', 'naked cowboy', 'wifi']
    },
    {
        price: 200000,
        location: '1600 Pennsylvania Ave, DC',
        maxOccupants: 500,
        amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
    },
    {
        price: 2000000,
        location: 'Falchi Bldg, NY',
        maxOccupants: 5000,
        amenities: ['food truck']
    },
    {
        price: 250,
        location: 'Washington Pl, NY',
        maxOccupants: 100,
        amenities: ['fountain', 'dosa cart']
    }    
];

// make the string exactly as long as len
function padTo(str, len) { // function padTo takes two arguments, a string and a length
    if (str.length > len) { // If the length of string is greater than length
        return str.slice(0, len - 3) + '...' // return string.slice(0, len-3) 0 = starting position len - 3 + '...'
    } else { // or else
        while (str.length < len) { // while string.length is less than length
            str += ' ' // str + 1
        }
        return str; // return strong
    }
}

// make the string exactly as long as len
function padLeft(str, len) { // function padLeft takes two arguments str and len
    var money = str // variable money = str
    if (money.length > len) { // if money.length is greater than len
        return money.slice(0, len - 3) + '...' // return an array after you slice out everything after len-3
    } else {
        while (money.length < len) { // if it's less than length, then we will just return ' ' + money
            money = ' ' + money
        }
        return money;
    }
}

//function to add a $ to a number then change the number to a string
function toMoney(num) {
    return '$' + num.toString()
}

// function bulletPoints takes an argument, list, and returns a new line + list which you will turn back into a str.
function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) { // this function shows the details of the room
    var room = rooms[n] // var rooms defined by variable n to show room number
    console.log('Details of room #' + (n + 1)) // logs details of room #n
    console.log('----------------------\n')
    if (room.reserved) { // if the room has a object category called reserved, log [RESERVED]
        console.log('[RESERVED]')
    }
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(n) { // function that checks if the room is reserved by looking at the category name to see if rooms[n].reserved exist.
    if (rooms[n].reserved) { // if the category name exists
        console.log('Sorry, it\'s already reserved.') // log sorry it's already reserved
        return // return nothing to end the code
    } 
    rooms[n].reserved = true // otherwise create a new category called reserveded under that room and set the condition as true.
    console.log('Thank you for reserving') // after, log 'Thank you for reserving'
}

function occupancy(n, max) { // function that sets the maxOccupants then logs and confirms that the occupants are set.
    rooms[n].maxOccupants = max
    console.log('Occupants set.')
}

function list(callback) { // function list shows the table/chart
    console.log(    
        padLeft('ID', 2), // Show ID and set length to 2. Add '...' following ID.
        '...',
        padTo('Address', 30), // Address space is set to 30 and if not greater than 30, log ' '
        ' ', 
        padLeft('Price', 8) //Price adjusts if not enough room to 8 spaces
    );
    for (var i = 0; i < rooms.length; i++) { // for loop that looks trough the number of rooms,
        if (callback(rooms[i])) { // use the callback funtion given the parameter room[1]
            var counter = i + 1; // counter
            console.log(
                padLeft(counter.toString(), 2),
                '...',
                padTo(rooms[i].location, 30), 
                ' ', 
                padLeft(toMoney(rooms[i].price), 8)
            );
        }
    }
}

rl.on('line', function(input) {
    var inputArr = input.split(' ')
    if (inputArr[0] === 'list') {
        list(function (room) {
            return !room.reserved
        });        
    } else if (inputArr[0] === 'show') {
        showDetails(inputArr[1] - 1)
    } else if (inputArr[0] === 'reserve') {
        reserve(inputArr[1] - 1)
    } else if (inputArr[0] === 'occupancy') {
        occupancy(inputArr[1] - 1, inputArr[2])
    } else if (inputArr[0] === 'search') {
        var amenity = inputArr.slice(1).join(' ')
        list(function (room) {
            return !room.reserved && room.amenities.indexOf(amenity) > -1
        });                
    } else {
        console.log('Unknown command: ' + input)
    }

    console.log('\n\nPlease chose one of [' + options + '] $')
})

console.log('Please chose one of [' + options + '] $')