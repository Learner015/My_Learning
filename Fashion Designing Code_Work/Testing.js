import React from 'react';
import axios from 'axios';

function Testing() {
  const handleclick = () => {
    axios.get('https://virtual-try-on2.p.rapidapi.com/clothes-virtual-tryon&apiKey=9b921de50dmsh2b532595f5f98adp1d665bjsnfdb82f16e8be')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response) {
          // Client received an error response
          console.error('Error:', err.response.data);
        } else if (err.request) {
          // Client never received a response, or request never left
          console.error('Error:', err.request);
        } else {
          // Anything else
          console.error('Error:', err.message);
        }
      });
  };

  return (
    <div>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

export default Testing;