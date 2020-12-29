/**
 * This could of course have been included in App. It was separated so that
 * it can be easily tested that HMR will only reload the affected path to the root.
 */
export default () => (
  <p>
    Type something in the search box to restrict the list and then remove something from the array in src/RHLTest.js.
    You should see that the list updates but the filter state is remains as it is.
  </p>
);
