import React from "react";
import {Box,Table,Thead,Tbody,Tr,Th,Td} from "@chakra-ui/react";

function Leaderboard(){
    const leaderboard=JSON.parse(localStorage.getItem("leaderboard")) || [];

    return (
        <Box p={5}>
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th isNumeric>Score</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {leaderboard.map((entry,index) => ( 
                    <Tr key={index}>
                      <Td>{entry.name}</Td>
                      <Td isNumeric>{entry.score}</Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
}

export default Leaderboard;