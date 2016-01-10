const initialState = 
  {
    cities: [],
    usedAreas:[],
    usedInsurances: [],
    companyList: [],
    pageInfo:{totalElements:0},
    insurances: [],
    company: {},
    bankAccountViewModelList:[],
    isShowtemplate: false,
    isEditCompany: false
  }

export default function reducers(state = initialState, action) {
   switch (action.type) {
      case 'UPDATE_INSURANCES':
        console.log('action.text is ', action.text)
        return Object.assign({}, state, {cities: action.text});
      default:
        return state
      }
}
