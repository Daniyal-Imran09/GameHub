import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={"5px"}>
        <Heading>Oops..</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Does not Exist"
            : "An Unexpected Error Occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
