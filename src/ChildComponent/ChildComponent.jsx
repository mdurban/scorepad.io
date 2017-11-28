import React from 'react';

const ChildComponent = ({valueFromParent}) => (
  <div>
    {`child component has a score of ${valueFromParent}`}
  </div>
)

export default ChildComponent
