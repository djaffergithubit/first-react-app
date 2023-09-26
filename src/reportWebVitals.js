import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics(metric) {
    // Send the metric to analytics server or log it as needed
    console.log(metric);
  }
  
  function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getLCP(sendToAnalytics);
    }
  }
  
  export default reportWebVitals;
  