const React = require('react');


/**
 * getTimer() returns a new react-element whenever called
 * React.createElement() constructs a new instance
 */
const getTimer = function getTimer() {
  return (
    <div>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
};



module.exports = getTimer;
