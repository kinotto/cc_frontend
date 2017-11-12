import 'rxjs';
import {
  FILTER_IDEAS_REQUEST,
  FilterIdeasResponse
} from '../actions';
import {
  MOST_RECENT_INVESTMENTS,
  NEWEST,
  PERCENTAGE_RAISED,
  AMOUNT_RAISED
} from '../utilities/constants';
import moment from 'moment';


const search = (e, ideas) => {
  let filteredIdeas;
  if (e.target.value) {
    filteredIdeas = ideas.filter(idea =>
      idea.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1
    );
  } else {
    filteredIdeas = ideas.toJS();
  }

  return FilterIdeasResponse(filteredIdeas);
};

const sort = (ideaState, clb) => {
  let ideas = ideaState.get('filtered').size
    ? ideaState.get('filtered')
    : ideaState.get('all');

  let p = ideas.toJS().sort(clb);
  return p;
};


const filterIdeas = (action$, store) => {
  return action$
    .ofType(FILTER_IDEAS_REQUEST)
    .map((action) => {
      let filtered;
      switch (action.payload) {
      case MOST_RECENT_INVESTMENTS: {
        filtered = sort(store.getState().get('ideas'), (idea1, idea2) => {
          return moment(idea1.updated_at) - moment(idea2.updated_at);
        }).reverse();
        return FilterIdeasResponse(filtered);
      }
      case NEWEST: {
        filtered = sort(store.getState().get('ideas'), (idea1, idea2) => {
          return moment(idea1.expires_at) - moment(idea2.expires_at);
        }).reverse();
        return FilterIdeasResponse(filtered);
      }
      case PERCENTAGE_RAISED: {
        filtered = sort(store.getState().get('ideas'), (idea1, idea2) => {
          return (idea1.raised / idea1.target * 100) - (idea2.raised / idea2.target * 100);
        }).reverse();
        return FilterIdeasResponse(filtered);
      }
      case AMOUNT_RAISED: {
        filtered = sort(store.getState().get('ideas'), (idea1, idea2) => {
          return idea1.raised - idea2.raised;
        }).reverse();
        return FilterIdeasResponse(filtered);
      }

      // default is a search by value
      default: {
        return search(action.payload, store.getState().get('ideas').get('all'));
      }
      }
    });
};


export const filterEpic = [
  filterIdeas
];
