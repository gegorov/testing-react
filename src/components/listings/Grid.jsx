// @flow
import React, { Component } from 'react';
import Single from './Single';

type Item = {
  item: {
    id: number,
    title: string,
    category: string,
    description: string,
    link: string,
    release_date: string,
    views: string,
    image: string
  }
}

export default class Grid extends Component<Item> {
  renderList() {
    const { items } = this.props;
    return items.map(item => (
      <Single key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <div className="row">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}
