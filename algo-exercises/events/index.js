// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    // create object for events library, where each event will be the key with it's value as an array of all it's (multiple) callbacks
    this.events = {}

  }
  // Register an event handler
  on(eventName, callback) {
    // insert eventName as a key to the events object
    // if the event key and respective array exists, add the callback to its array
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      // else, create the event key and respective array and add the callback to its array
      this.events[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    // see if the event exists in the events object
    if (this.events[eventName]) {
      // if that event key exists, iterate through its array
      for (let callback of this.events[eventName])
        // call the callback
        callback()
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // delete the entire event property off the object
    delete this.events[eventName]
  }
  
}

module.exports = Events;
