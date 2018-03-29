import React from 'react';
import debounce from 'debounce';
import { 
  NB_ITEMS, 
  BOOK_GENRES, 
  AUTHOR_GENDERS,
  FILTERING_PROPS,
  FILTERING_PROP_GENDER,
  FILTERING_PROP_GENRE
} from '../../constants';
import Chunk from './Chunk';
import SortingSelector from './SortingSelector';
import FilteringSelector from './FilteringSelector';
import styles from './styles.css';

const ROW_HEIGHT = 16;

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.rootRef = this.rootRef.bind(this);
    this.onScroll = debounce(this.onScroll, 40).bind(this);
    this.onChangeSorting = this.onChangeSorting.bind(this);
    this.onChangeFiltering = this.onChangeFiltering.bind(this);
  }
  componentDidMount() {
    const { onScroll } = this.props;
    onScroll(0);
  }
  rootRef(el) {
    this.rootEl = el;
  }
  visibleChunkRef(el) {
    this.visibleChunkEl = el;
  }
  onScroll(e) {
    const { onScroll, itemsPerChunk } = this.props;
    const visibleChunkIndex = Math.round(this.rootEl.scrollTop / (ROW_HEIGHT * itemsPerChunk));
    if (visibleChunkIndex != this.props.visibleChunkIndex) {
      onScroll(visibleChunkIndex);
    }
  }
  onChangeSorting(sorting) {
    const { onChangeSorting } = this.props;
    this.rootEl.scrollTop = 0;
    onChangeSorting(sorting);
  }
  onChangeFiltering(filtering) {
    const { onChangeFiltering } = this.props;
    this.rootEl.scrollTop = 0;
    onChangeFiltering(filtering);
  }
  render() {
    const { 
      chunks, 
      visibleChunkIndex, 
      itemsPerChunk, 
      sorting,
      filtering,
      itemsCount
    } = this.props;
    const render3 = visibleChunkIndex > 0;

    return (
      <div className={styles.list}>
        <ul className={styles.listControls}>
          <li className={styles.listControlsItem}>
            <label>Sort by:</label>
            <SortingSelector onChange={this.onChangeSorting} sorting={sorting} />
          </li>
          <li className={styles.listControlsItem}>
            <label>Filter by book genre:</label>
            <FilteringSelector 
              onChange={this.onChangeFiltering} 
              filteringProp={FILTERING_PROP_GENRE}
              filteringPropOptions={BOOK_GENRES}
              filtering={filtering} />
          </li>
          <li className={styles.listControlsItem}>
            <label>Filter by author gender:</label>
            <FilteringSelector 
              onChange={this.onChangeFiltering} 
              filteringProp={FILTERING_PROP_GENDER}
              filteringPropOptions={AUTHOR_GENDERS}
              filtering={filtering} />
          </li>
          <li className={styles.listControlsItem}>
            <label>Legend:</label>
            <ul className={styles.listLegend}>
              <li><i className={`${styles.itemIndicator} ${styles.itemIndicatorHorrorHalloween}`} />
                {' -'} horror book published on Halloween</li>
              <li><i className={`${styles.itemIndicator} ${styles.itemIndicatorFinanceLastFriday}`} />
                {' -'} finance book published on any last Friday</li>
            </ul>
          </li>
        </ul>

        <div className={styles.listWindow} ref={this.rootRef} onScroll={this.onScroll}>
          <div 
            className={styles.listInner} 
            style={{height: ROW_HEIGHT * itemsCount + 'px'}}>  
            {render3 && 
              <Chunk 
                key={`chunk_${visibleChunkIndex - 1}`} 
                top={(visibleChunkIndex - 1) * ROW_HEIGHT * itemsPerChunk} 
                chunk={chunks[0]} />}
            <Chunk 
              key={`chunk_${visibleChunkIndex}`} 
              top={visibleChunkIndex * ROW_HEIGHT * itemsPerChunk} 
              chunk={chunks[render3 ? 1 : 0]} />
            <Chunk 
              key={`chunk_${visibleChunkIndex + 1}`} 
              top={(visibleChunkIndex + 1) * ROW_HEIGHT * itemsPerChunk} 
              chunk={chunks[render3 ? 2 : 1]} />
          </div>
        </div>
      </div>
    );
  }
}