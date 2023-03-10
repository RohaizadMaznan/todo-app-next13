"use client";

import React from "react";
import { ITodoInputProps } from "@/app/page";
import { SmallCloseIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, IconButton, Tooltip } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { HOST_URL } from "api/TodoAPI";
import moment from "moment";
import { useRouter } from "next/navigation";

export const ToDoItem = ({ todo }: { todo: ITodoInputProps }) => {
  const router = useRouter();
  const toast = useToast();
  const onRemoveTodo = async () => {
    try {
      await fetch(`${HOST_URL}/todos/records/${todo.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Removed",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: `Error: ${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    router.refresh();
  };

  const onMarkAsDone = async () => {
    try {
      await fetch(`${HOST_URL}/todos/records/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: !todo.status,
        }),
      });
      toast({
        title: todo.status ? "Marked as undone" : "Marked as done",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: `Error: ${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
    router.refresh();
  };

  return (
    <Box
      bg={todo.status ? "success.400" : "white"}
      w="100%"
      px={4}
      py={2}
      h="54px"
      color={todo.status ? "white" : "gray.800"}
      borderRadius="2xl">
      <Flex alignItems="center" justifyContent="space-between">
        <Text ml={4} color={todo.status ? "white" : "gray.800"}>
          {todo?.task}
        </Text>
        <Flex gap={2} alignItems="center">
          <Text>{moment(todo.time).format("hh:mm A")}</Text>
          <Tooltip label={todo.status ? `Mark as Undone` : `Mark as Done`}>
            <IconButton
              variant={todo.status ? "solid" : "ghost"}
              colorScheme="success"
              aria-label="Mark as Done"
              icon={<CheckIcon />}
              onClick={onMarkAsDone}
              _hover={{
                backgroundColor: "success.400",
                color: "white",
              }}
            />
          </Tooltip>
          <Tooltip label={`Remove "${todo?.task}"`}>
            <IconButton
              variant={todo.status ? "ghost" : "solid"}
              color={todo.status ? "white" : "primary.800"}
              aria-label="Remove a to-do"
              icon={<SmallCloseIcon />}
              onClick={onRemoveTodo}
              _hover={{
                backgroundColor: "danger.400",
                color: "white",
              }}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
};
