import React from 'react';
import {
  gql,
  graphql,
} from 'react-apollo';

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;

export const ChannelsList = ({ data: { loading, error, channels }}) => {

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error loading data</p>
  }
  return (
    <ul className="Item-list">
      {channels.map(channel =>
        <li key={channel.id}>
          {channel.name}
        </li>
      )}
    </ul>
  );
};

export const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
