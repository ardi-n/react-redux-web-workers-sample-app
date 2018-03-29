import React from 'react';
import { BOOK_GENRES, AUTHOR_GENDERS } from '../../constants';
import styles from './styles.css';

const LOCALE_OPTS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const getDisplayName = (key, store) => store.find(item => item[0] == key)[1];

export default class Chunk extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { top, chunk } = this.props;
    if (!chunk) {
      return null;
    }
    return (
      <ul 
        className={styles.listChunk} 
        style={{top: top+'px'}}>
        {chunk.map(item => (
          <li className={styles.listItem} key={item.id}>
            <ul className={styles.listItemInner}>
              <li>{item.name}</li>
              <li>{item.author_name}</li>
              <li>{getDisplayName(item.book_genre, BOOK_GENRES)}</li>
              <li>{getDisplayName(item.author_gender, AUTHOR_GENDERS)}</li>
              <li>{item.publish_date.toLocaleString('en-US', LOCALE_OPTS)}</li>
              <li className={styles.listItemInnerItemIndicators}>
                {item.horror_halloween &&  
                  <i className={`${styles.itemIndicator} ${styles.itemIndicatorHorrorHalloween}`} />}
                {item.finance_last_friday && 
                  <i className={`${styles.itemIndicator} ${styles.itemIndicatorFinanceLastFriday}`} />}
              </li>
            </ul>
          </li>
          )
        )}
      </ul>
    );
  }
}