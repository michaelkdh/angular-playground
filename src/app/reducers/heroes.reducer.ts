import { HeroActionsUnion, HeroActionType } from '../actions/heroes.action';

const initialState = {
  isLoading: false,
  heroes: [],
  hasError: '',

  isAddingHero: false,
  hasAddHeroError: '',

  deletingHero: {},
  hasDeleteHeroError: ''
}

export function reducer(state = initialState, action: HeroActionsUnion) {
  switch (action.type) {
    case HeroActionType.LoadHeroes:
      return {
        ...state,
        isLoading: true
      };

    case HeroActionType.LoadSuccess:
      return {
        ...state,
        isLoading: false,
        heroes: action.payload,
        hasError: ''
      };

    case HeroActionType.LoadError:
      return {
        ...state,
        isLoading: false,
        hasError: '',
      };

    case HeroActionType.AddHero:
      return {
        ...state,
        isAddingHero: true,
        hasAddHeroError: '',
      };

    case HeroActionType.AddHeroSuccess:
      return {
        ...state,
        heroes: [
          ...state.heroes,
          action.payload
        ],
        isAddingHero: false,
        hasAddHeroError: '',
      };

    case HeroActionType.AddHeroError:
      return {
        ...state,
        isAddingHero: false,
        hasAddHeroError: action.payload,
      };

    case HeroActionType.DeleteHero:
      return {
        ...state,
        deletingHero: action.payload
      };

    case HeroActionType.DeleteHeroSuccess:
      return {
        ...state,
        heroes: state.heroes.filter(h => h !== state.deletingHero),
      };

    case HeroActionType.DeleteHeroError:
      return {
        ...state,
        hasDeleteHeroError: action.payload
      };

    default:
      return state;
  }
}