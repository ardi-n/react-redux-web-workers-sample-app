import { connect } from 'react-redux';
import List from '../../components/List';
import { 
  getVisibleChunksOfList, 
  getVisibleChunkIndex,
  getItemsPerChunk,
  getListSorting,
  getListFiltering,
  getListItemsCount
 } from '../../selectors';
import { updateListRequest } from '../../actions';

const mapStateToProps = state => ({
  itemsPerChunk: getItemsPerChunk(state),
  visibleChunkIndex: getVisibleChunkIndex(state),
  chunks: getVisibleChunksOfList(state),
  sorting: getListSorting(state),
  filtering: getListFiltering(state),
  itemsCount: getListItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  onScroll: visibleChunkIndex => dispatch(updateListRequest(visibleChunkIndex)),
  onChangeSorting: sorting => dispatch(updateListRequest(0, sorting, null, true)),
  onChangeFiltering: filtering => dispatch(updateListRequest(0, null, filtering, true))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);