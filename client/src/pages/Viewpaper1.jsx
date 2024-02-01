import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../service/helper";

const Paper = () => {
  const [question, setQuestion] = useState(null);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const questionId = searchParams.get("question._id");

  useEffect(() => {
    if (questionId) {
      axios
        .get(`${BASE_URL}/getQuestionById?questionId=${questionId}`)
        .then((res) => {
          setQuestion(res.data);
        })
        .catch((err) => {
          console.error("Error fetching question: ", err);
        });
    }
  }, [questionId]);

  const handleDownload = () => {
    // Use the 'download' attribute to trigger the download
    const link = document.createElement("a");
    link.href = `http://localhost:8080/images/${question.question}`;
    link.download = "question_paper";
    link.click();
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Question</h2>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-screen-lg">
          {question ? (
            <div className="flex flex-col items-center">
              <img
                src={`http://localhost:8080/images/${question.question}`}
                className="w-full h-auto max-h-screen rounded-lg"
                alt="Question Paper"
              />
              <div className="bg-gray-100 p-4 rounded-lg mt-4 w-full max-w-screen-md">
                <h3 className="text-xl font-bold">{question.college}</h3>
                <p>
                  <span className="font-semibold">Subject:</span>{" "}
                  <span className="text-blue-600">{question.subject}</span>
                </p>
                <p>
                  <span className="font-semibold">Semester:</span>{" "}
                  <span className="text-blue-600">{question.semester}</span>
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Download
              </button>
            </div>
          ) : (
            <p>No Paper data available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Paper;
