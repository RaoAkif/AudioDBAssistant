import { useState, useRef } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [spokenText, setSpokenText] = useState("");
  const [textInput, setTextInput] = useState("");
  const displayDataRef = useRef(null);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [transcriptDialog, setTranscriptDialog] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  // let BASE_URL = `https://audio-db-assistant-api.vercel.app`
  let BASE_URL = `http://localhost:3000`

  const fetchData = async (query) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/fetchData?dbQuery=${query}`
      );
      setData(response.data);
      setError(null);
      displayDataRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setError("No such data exists");
    }
  };

  const fetchDataWithQuery = (query) => {
    fetchData(query);
  };

  const handleAudioIconClick = () => {
    setTextInput('');
    
    if (!isRecording) {
      const recognition = new window.webkitSpeechRecognition();

      recognition.onstart = () => {
        setTranscriptDialog("Recording...");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenText(transcript);
        setTextInput(transcript);
        setTranscriptDialog(transcript);
        fetchDataWithQuery(transcript);
      };

      recognition.onend = () => {
        setTranscriptDialog(null);
        setIsRecording(false);
      };

      recognition.start();
      setSpeechRecognition(recognition);
      setIsRecording(true);
    } else {
      if (speechRecognition) {
        speechRecognition.stop();
      }
      setIsRecording(false);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <section style={{ marginBottom: "20px" }}>
        <h1 style={{ textAlign: "center" }}>
          Explore Virgin Stores with Your Questions!
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetchDataWithQuery(textInput);
              }
            }}
            placeholder="Type your question..."
            style={{
              padding: "10px",
              borderRadius: "5px",
              width: "70%",
              marginRight: "10px",
            }}
          />
          <span
            onClick={handleAudioIconClick}
            style={{
              cursor: "pointer",
              fontSize: "24px",
            }}
            role="img"
            aria-label="Start Audio Input"
          >

          <div style={{ width: "40px" }}>
          {isRecording ? (
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 100 125">
              <circle cx="50" cy="49.998" r="47" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/>
              <circle cx="50" cy="50" r="22"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 161.25">
              <path d="M68.122 65.235c-10.928 7.652-13.587 22.736-5.935 33.663 7.651 10.928 22.735 13.588 33.663 5.936 10.927-7.652 13.586-22.735 5.935-33.663-7.652-10.927-22.735-13.587-33.663-5.936Zm2.868 4.096c8.667-6.069 20.63-3.96 26.7 4.708 6.068 8.667 3.959 20.63-4.708 26.7-8.667 6.068-20.631 3.958-26.7-4.708-6.068-8.668-3.959-20.631 4.708-26.7Z" />
              <path d="m92.94 105.035 2.562 3.659a2.501 2.501 0 0 0 4.096-2.868l-2.563-3.66a2.501 2.501 0 0 0-4.095 2.869Z" />
              <path d="M106.767 108.627a8.556 8.556 0 0 0-8.986-3.417 3.702 3.702 0 0 0-2.236 1.565 8.556 8.556 0 0 0 .138 9.613l5.468 7.81a6.765 6.765 0 0 0 9.42 1.661l.003-.001a6.765 6.765 0 0 0 1.662-9.421l-5.469-7.81Zm-4.096 2.868a3.556 3.556 0 0 0-3.209-1.504 3.557 3.557 0 0 0 .316 3.53l5.469 7.81a1.765 1.765 0 0 0 2.457.433l.003-.002a1.763 1.763 0 0 0 .433-2.457l-5.47-7.81ZM24.21 59.879V20.705c0-5.004 1.99-9.804 5.53-13.342a18.858 18.858 0 0 1 13.34-5.526c5.01 0 9.81 1.988 13.34 5.526a18.865 18.865 0 0 1 5.53 13.342v41.674a2.5 2.5 0 0 1-2.5 2.5H29.21v2.295c0 7.785 6.31 14.096 14.1 14.096 0 0 3.53.03 6.17-1.339a2.505 2.505 0 0 1 3.37 1.07 2.51 2.51 0 0 1-1.07 3.37c-3.64 1.884-8.48 1.899-8.47 1.899-10.55 0-19.1-8.55-19.1-19.096v-2.295h-7.5a2.5 2.5 0 0 1 0-5h7.5Zm32.74 0V20.705A13.868 13.868 0 0 0 43.08 6.837a13.868 13.868 0 0 0-13.87 13.868v39.174h27.74ZM40.58 96.836v13.709c0 1.379 1.12 2.5 2.5 2.5s2.5-1.121 2.5-2.5V96.836a2.5 2.5 0 0 0-5 0Z" />
              <path d="M32.2 113.118h21.75a2.501 2.501 0 0 0 0-5H32.2a2.501 2.501 0 0 0 0 5ZM27.5 26.591h6.42a2.5 2.5 0 0 0 0-5H27.5a2.5 2.5 0 0 0 0 5ZM27.5 36.591h6.42a2.5 2.5 0 0 0 0-5H27.5a2.5 2.5 0 0 0 0 5ZM27.5 46.591h6.42a2.5 2.5 0 0 0 0-5H27.5a2.5 2.5 0 0 0 0 5ZM52.5 26.591h6.42a2.5 2.5 0 0 0 0-5H52.5a2.5 2.5 0 0 0 0 5ZM52.5 36.591h6.42a2.5 2.5 0 0 0 0-5H52.5a2.5 2.5 0 0 0 0 5ZM52.5 46.591h6.42a2.5 2.5 0 0 0 0-5H52.5a2.5 2.5 0 0 0 0 5ZM12.86 53.216v14.467c0 16.56 13.44 29.986 29.996 29.986h.44c3.25 0 6.467-.528 9.497-1.538a2.5 2.5 0 0 0 1.574-3.163 2.5 2.5 0 0 0-3.165-1.58 25.014 25.014 0 0 1-7.906 1.282h-.44c-13.796 0-24.986-11.188-24.986-24.987V53.216a2.5 2.5 0 0 0-2.505-2.5 2.5 2.5 0 0 0-2.506 2.5Z" />
            </svg>
          )}
          </div>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
        </div>
      </section>
      <section
        ref={displayDataRef}
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Display Data</h2>
        {error ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : (
          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflow: "auto",
              borderRadius: "8px",
            }}
          >
            {data.length === 0
              ? "No data available"
              : JSON.stringify(data, null, 2)}
          </pre>
        )}
      </section>
      {transcriptDialog && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "10px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
          <strong>Transcript:</strong> {transcriptDialog}
        </div>
      )}
    </div>
  );
};

export default App;
