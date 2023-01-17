"use client";

import React from "react";
import { TimeIcon } from "@chakra-ui/icons";
import {
  Input,
  Heading,
  Box,
  Flex,
  IconButton,
  InputGroup,
  InputRightElement,
  Tooltip,
  FormErrorMessage,
  FormControl,
  useToast,
  Text,
} from "@chakra-ui/react";
import { ToDoItem } from "components/ToDoItem";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ITodoInputProps } from "@/app/page";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import moment from "moment";

export const Home = ({ todos }: { todos: ITodoInputProps[] }) => {
  const router = useRouter();
  const toast = useToast();
  const timepickerRef = React.createRef<any>();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<ITodoInputProps>();
  console.log("time", watch("time"));

  const onSubmit: SubmitHandler<ITodoInputProps> = async (data) => {
    await fetch("http://127.0.0.1:8090/api/collections/todos/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: data.task,
        status: false,
      }),
    });

    reset({ task: "", time: "" });

    toast({
      title: "Okay, you have added a task!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });

    router.refresh();
  };
  return (
    <Flex justifyContent="center">
      <Flex flexDir="column" gap={5} pt={5} w="calc(100vw - 50%)">
        <Box textAlign="left" mb={5}>
          <Heading size="lg" fontWeight="medium">
            Today main focus
          </Heading>
          <Heading size="xl">Design team meeting</Heading>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormControl zIndex="10" isInvalid={errors.task ? true : false}>
            <InputGroup size="md">
              <Input
                {...register("task", { required: true })}
                bg="white"
                color="primary.900"
                variant="filled"
                size="lg"
                fontSize="lg"
                h="48px"
                p={6}
                placeholder="What is your next task?"
                _focus={{
                  backgroundColor: "white",
                  outline: "none",
                }}
                _hover={{
                  backgroundColor: "white",
                }}
                borderRadius="2xl"
              />
              <InputRightElement
                justifyContent="flex-end"
                alignItems="flex-end"
                mr={3}
                mt="6px"
                gap={2}
              >
                <Text color="gray.800" fontSize="sm">
                  {watch("time") && moment(watch("time")).format("h:mm a")}
                </Text>
                <Controller
                  control={control}
                  name="time"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      ref={timepickerRef}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      customInput={
                        <Tooltip label={`Select a date`}>
                          <IconButton
                            variant="ghost"
                            colorScheme="success"
                            aria-label="Select a time"
                            icon={<TimeIcon />}
                            _hover={{
                              backgroundColor: "gray.200",
                              color: "primary.700",
                            }}
                            onClick={() => {
                              timepickerRef.current.setOpen(true);
                            }}
                          />
                        </Tooltip>
                      }
                    />
                  )}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.task && "Oh? We don't accept empty field. Sorry!"}
            </FormErrorMessage>
          </FormControl>
        </form>

        <Flex flexDir="column" gap={4} mt="30px">
          {todos?.map((todo: any) => (
            <React.Fragment key={todo.id}>
              <ToDoItem todo={todo} />
            </React.Fragment>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
