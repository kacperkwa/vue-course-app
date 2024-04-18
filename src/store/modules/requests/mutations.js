export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};
