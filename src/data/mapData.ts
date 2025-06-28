export const ROOMS = [
  "Auditorium 1",
  "Auditorium 2",
  "Lab 1",
  "Lab 2",
  "Lab 3",
  "Lab 4",
  "Lab 5",
  "Seminar Hall",
  "PT room",
  "Store Room",
  "Transport Office",
  "AIDS Department",
  "2nd AIDS 'A'",
  "1st AIDS 'B'",
  "Green Room",
  "Boys RestRoom",
  "Girls RestRoom",
  "VIP Pantry",
  "VIP Waiting Area",
  "Pantry",
  "VIP Dining",
  "Chairman Office",
  "Principle Office",
  "OAT",
  "Admin Office",
  "Reception",
  "Master Board Room",
  "OAK leaf",
  "Exam Cell",
  "Meeting Room",
  "Transport office",
  "Zig Zag Steps",
  "Admission Office",
  "Falcon Hall",
  "Harmony",
  "CDC",
  "Symphony",
  "Waiting Hall",
  "OSSIS Hall"
];

export const WAYPOINTS: { [key: string]: { x: number, y: number } } = {
  // Room Coordinates
  "Auditorium 1": { x: 235, y: 555 },
  "Auditorium 2": { x: 235, y: 160 },
  "Seminar Hall":{x:235, y:360},
  "Lab 1": { x: 495, y: 210 },
  "Lab 2": { x: 320, y: 210 },
  "Lab 3": { x: 320, y: 300 },
  "Lab 4": { x: 320, y: 490 },
  "Lab 5": { x: 375, y: 505 },
  "PT room": {x: 460,y: 505 },
  "Store Room": { x: 510, y: 505 },
  "Transport Office":{x:560,y:505},
  "AIDS Department" : {x:495,y:260},
  "2nd AIDS 'A'" :{x:495,y:340},
  "1st AIDS 'B'" :{x:495,y:420},
  "Green Room":{x:495,y:470},
  "Boys RestRoom": { x: 590, y: 210 },
  "Girls RestRoom": { x: 790, y: 210 },
  "VIP Pantry": { x: 830, y: 210 },
  "VIP Waiting Area": { x: 875, y: 210 },
  "Pantry": { x: 1010, y: 210 },
  "VIP Dining": { x: 1050, y: 210 },
  "Chairman Office": { x: 1070, y: 210 },
  "Principle Office": { x: 1090, y: 210 },
  "OAT": { x: 375, y: 360 },
  "Admin Office": { x: 875, y: 450 },
  "Reception": { x: 1050, y: 360 },
  "Master Board Room": { x: 1050, y: 300 },
  "OAK leaf": { x: 1050, y: 260 },
  "Exam Cell": { x: 875, y: 320 },
  "Meeting Room": { x: 875, y: 260 },
  "Zig Zag Steps": { x: 690, y: 505 },
  "Admission Office": { x: 790, y: 505 },
  "Falcon Hall": { x: 875, y: 505 },
  "Harmony": { x: 1040, y: 505 },
  "CDC": { x: 1000, y: 505 },
  "Symphony": { x: 1090, y: 505 },
  "Waiting Hall": { x: 1050, y: 460 },
  "OSSIS Hall":{ x:980,y:210},

  // (Omitted for brevity, same content here)
  "D Block"       :{x:320 ,y:360},
  "D Block 2"     :{x:320 ,y:210},
  "D Block 3"     :{x:320 ,y:505},
  "C Block"       :{x:495 ,y:360},
  "C Block 2"     :{x:495 ,y:210},
  "C Block 3"     :{x:495 ,y:505},
  "Middle Block"  :{x:670 ,y:360},
  "Middle Block 2":{x:670 ,y:210},
  "Middle Block 3":{x:670 ,y:505},
  "B Block"       :{x:875 ,y:360},
  "B Block 2"     :{x:875 ,y:210},
  "B Block 3"     :{x:875 ,y:505},
  "A Block"       :{x:1050,y:360},
  "A Block 2"     :{x:1050,y:210},
  "A Block 3"     :{x:1050,y:505}
};

export const GRAPH: { [key: string]: { [key: string]: number } } = {
  // Upper corridor connections (horizontal pathway)
  "Auditorium 2": {
    "Seminar Hall": 20,
    "Auditorium 1": 25 // Add direct connection
  },
  "Auditorium 1": {
    "Seminar Hall": 10,
    "Auditorium 2": 25 // Add direct connection
  },
  "Seminar Hall": {
    "Auditorium 1": 10,
    "Auditorium 2": 20,
    "D Block": 10,
    // Add other connections if needed
  },
  "Lab 1": {
    "D Block 2": 10,
    "C Block": 20,
    "Boys RestRoom":10
  },
  "Lab 2": {
    "D Block 2": 10
  },
  "Lab 3": {
    "D Block": 20,
   "D Block 2": 10,
  },
  "Lab 4": {
    "D Block": 10,
    "D Block 3": 10,
  },
   "Lab 5": {
    "D Block 3": 10,
    "PT room": 10,
  },
  "D Block": {
    "Lab 3": 10,
    "Lab 4": 15,
    "Seminar Hall": 10,
  },
  "D Block 2": {
    "Lab 2": 10,
    "Lab 1": 10,
    "Lab 3": 20,
  },
  "D Block 3": {
    "Lab 4": 10,
    "Lab 5": 10
  },
 
  "PT room": {
    "Lab 5": 10,
    "C Block 3": 10,
  },
  "C Block": {
    "2nd AIDS 'A'":10,
    "1st AIDS 'B'": 10,
    "OAT": 10
  },
  "C Block 2": {
    "AIDS Department":10,
    "Lab 1": 10,
  },
  "C Block 3": {
    "Green Room": 10,
    "PT room": 10,
    "Store Room": 10,
  },
  "Store Room": {
    "C Block 3": 10,
    "Transport Office":10,
  },
  "Transport Office" :{
    "Store Room":10,
    "Middle Block 3":10
  },
   "AIDS Department" :{
    "2nd AIDS 'A'": 10,
    "C Block 2":10
   },
   "2nd AIDS 'A'":{
    "AIDS Department":10,
    "C Block": 10,
   },
   "1st AIDS 'B'":{
    "Green Room":10,
    "C Block":10
   },
   "Green Room":{
    "1st AIDS 'B'":10,
    "C Block 3":10
   },
   "Boys RestRoom":{
    "Lab 1":10,
    "Middle Block 2":10
   },
   "Girls RestRoom":{
    "Middle Block 2":10,
    "VIP Pantry":10
   },
   "Middle Block":{
    "Middle Block 2":10,
    "Middle Block 3":10
   },
   "Middle Block 2":{
    "Middle Block":10,
    "Girls RestRoom":10,
    "Boys RestRoom":10,
   },
   "VIP Pantry":{
    "Girls RestRoom":10,
    "VIP Waiting Area":10
   },
   "VIP Waiting Area":{
    "VIP Pantry":10,
    "B Block 2":10,
    "OSSIS Hall":10
   },
   "Meeting Room":{
    "B Block 2":10,
    "Exam Cell":10
   },
   "Exam Cell":{
    "Meeting Room":10,
    "B Block":10
   },
   "B Block":{
    "Exam Cell":10,
    "Admin Office":10,
    "A Block":10
   },
   "B Block 2":{
    "VIP Waiting Area":10,
    "Meeting Room":10
  },
  "Admin Office":{
    "B Block":10,
    "Falcon Hall":10
  },
  "B Block 3":{
    "Admission Office":10,
    "Falcon Hall":10,
    "CDC":10
  },
  "Falcon Hall":{
    "B Block 3":10,
    "Admin Office":10
  },
  "CDC":{
    "B Block 3":10,
    "Harmony":10,
  },
  "Harmony":{
    "CDC":10,
    "A Block 3":10
  },
  "A Block":{
    "B Block":10,
    "Reception":10,
    "Master Board Room":10,
  },
  "A Block 2":{
    "OAK leaf":10,
    "VIP Dining":10
  },
  "A Block 3":{
    "Symphony":10,
    "Harmony":10,
    "Waiting Hall":10
  },
  "Symphony":{
    "A Block 3":10
  },
  "Waiting Hall":{
    "A Block 3":10,
    "Reception":10
  },
  "Reception":{
    "A Block":10,
    "Waiting Hall":10
  },
  "Master Board Room":{
    "A Block": 10,
    "OAK leaf": 10
  },
  "OAK leaf": {
    "Master Board Room": 10,
    "A Block 2": 10
  },
  "VIP Dining": {
    "A Block 2": 10,
    "Chairman Office": 10,
    "Pantry":10
  },
  "Chairman Office": {
    "VIP Dining": 10,
    "Principle Office": 10
  },
  "Principle Office": {
    "Chairman Office": 10
  },
  "OAT": {
    "C Block": 10
  },
  "Pantry": {
    "VIP Dining": 10,
    "OSSIS Hall": 10
  },
  "OSSIS Hall": {
    "Pantry": 10,
    "VIP Waiting Area": 10
  },
  "Zig Zag Steps":{
    "Admission Office":10,
    "Middle Block 3":10
  },
  "Middle Block 3":{
    "Zig Zag Steps":10,
    "Middle Block":10,
    "Transport Office":10
  },
  "Admission Office":{
    "Zig Zag Steps":10,
    "B Block 3":10
  },
  


  // (Omitted for brevity, same content here)
};
