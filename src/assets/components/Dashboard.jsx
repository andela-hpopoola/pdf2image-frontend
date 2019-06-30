import React, { useState } from 'react';
import Header from 'assets/components/Header';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const onChangeHandler = event => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData();
    const url = 'http://localhost:4001/extract-text';
    data.append('pdf', selectedFile);

    fetch(url, {
      method: 'POST',
      body: data
    })
      .then(response => {
        response.json().then(function(data) {
          console.log(data);
        });
      })
      .catch(error => {
        console.log('error');
      });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="dashboard-container">
          <Header />

          <h3>Welcome to the Dashboard</h3>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="form-group files">
                <input
                  type="file"
                  className="form-control"
                  onChange={onChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-danger text-uppercase">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
