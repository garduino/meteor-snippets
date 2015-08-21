// Example from https://forums.meteor.com/t/meteor-snippet-catrgory/8542

// debug = console.log.bind(console, 'session')
// # debug = (->)

// Accounts.onLogin ({user, connection}) ->
//  userId = user._id
//  start = timestamp()
//  debug('start', userId, start)
//  connection.onClose ->
//    end = timestamp()
//    debug('stop', userId, end)
//    Session.insert({start, stop, userId})