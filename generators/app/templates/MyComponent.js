import React from 'react';
<% if (relay) { %>import Relay from 'react-relay'; <% }%>
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import css from './<%= name %>.css';

class <%= name %> extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {

  }

  //===========================================================================
  //                          LIFE CYCLE HOOKS
  //===========================================================================


  //===========================================================================
  //                          EVENT HANDLERS
  //===========================================================================


  //===========================================================================
  //                          INSTANCE METHODS
  //===========================================================================

  render() {
    return (
      <div>
        HELLO, I AM ALIVE
      </div>
    )
  }

};

<%= name %>.propTypes = {

};

<% if (relay) { %>
export default Relay.createContainer(withStyles(css)(<%= name %>), {
  fragments: {

  }
});
<% } else { %>
export default withStyles(css)(<%= name %>);
<% } %>
