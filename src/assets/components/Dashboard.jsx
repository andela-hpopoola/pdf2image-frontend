import React, { Fragment, useState } from 'react';
import Header from 'assets/components/Header';
import Alert from 'assets/components/Alert';
import Button from 'assets/components/Button';

const Dashboard = () => {
  const MAX_PDF_SIZE = 1000000; //1MB
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [extractedText, setExtractedText] = useState(null);
  const [conversionTool, setConversionTool] = useState(false);

  const EXTRACT_PDF_TEXT_URL = `${
    process.env.REACT_APP_PDF_SERVICES
  }/extract-text`;

  const onChangeHandler = event => {
    setConversionTool(false);
    const file = event.target.files[0];
    if (file.size > MAX_PDF_SIZE) {
      setError('Uploaded PDF should be less than 1MB');
    } else if (file.type !== 'application/pdf') {
      setError('Uploaded file must be a valid PDF');
    } else {
      setSelectedFile(file);
      setConversionTool(true);
    }
  };

  const newLineToBr = text => {
    return text.split('\n').map((line, key) => (
      <Fragment key={key}>
        {line}
        <br />
      </Fragment>
    ));
  };

  const uploadNewPdf = () => {
    setSuccess(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSuccess(false);
    setLoading(true);
    const data = new FormData();
    data.append('pdf', selectedFile);
    fetch(EXTRACT_PDF_TEXT_URL, {
      method: 'POST',
      body: data
    })
      .then(response => {
        response.json().then(function(data) {
          const text = newLineToBr(data.result);
          setExtractedText(text);
          setConversionTool(false);
          setSuccess(true);
          setLoading(false);
        });
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="dashboard-container">
          <Header text="You are logged in as demo@testing.com" />

          <div className="container pt-3">
            <form onSubmit={handleSubmit}>
              {error && <Alert message={error} />}
              {success && (
                <Fragment>
                  <Alert
                    type="success"
                    message="Your file has been successfully converted"
                  />
                  <button className="btn btn-danger" onClick={uploadNewPdf}>
                    Upload another PDF
                  </button>
                </Fragment>
              )}

              {success ||
                (conversionTool ? (
                  <div className="conversion-tool">
                    <h3>{selectedFile && selectedFile.name}</h3>
                    <div className="pt-3">
                      <Button
                        type="button"
                        className="btn-info"
                        onClick={handleSubmit}
                        loading={loading}
                      >
                        Convert to Text
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="form-group files">
                    <input
                      type="file"
                      className="form-control"
                      onChange={onChangeHandler}
                    />
                  </div>
                ))}
            </form>
          </div>

          {success && <div className="container">{extractedText}</div>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
