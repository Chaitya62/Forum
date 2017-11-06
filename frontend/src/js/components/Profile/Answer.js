import React from 'react';

export default class Answer extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      	<tr>
            <td >
              {
                this.props.answer.answer
              }
            </td>
        </tr>
      
    );
  }
}
