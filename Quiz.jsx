import React, { useEffect, useState } from "react";
import { Box, Button, Text, Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const toast = useToast();

  useEffect(() => {
    const setup = JSON.parse(localStorage.getItem("quizSetup"));
    axios
      .get(
        https//opentdb.com/api.php?amount=${setup.amount}&category=${setup.category}&difficulty=${setup.difficulty}&type=multiple
      )
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  const handleNext = () => {
    if (questions[currentQuestion].correct_answer === selectedAnswer) {
      setScore((prev) => prev + 1);
      toast({ title: "Correct!", status: "success", duration: 2000 });
    } else {
      toast({ title: "Incorrect!", status: "error", duration: 2000 });
    }
    setSelectedAnswer("");
    setCurrentQuestion((prev) => prev + 1);
  };

  if (questions.length === 0) return <Text>Loading...</Text>;

  const question = questions[currentQuestion];
  const answers = [...question.incorrect_answers, question.correct_answer].sort();

  return (
    <Box p={5} className="quiz">
      <Text mb={3}>
        Question {currentQuestion + 1} of {questions.length}
      </Text>
      <Text mb={3}>{question.question}</Text>
      <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer}>
        <Stack>
          {answers.map((answer, index) => (
            <Radio key={index} value={answer}>
              {answer}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button mt={5} onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
}

export default Quiz;