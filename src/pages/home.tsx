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
  Button,
} from "@chakra-ui/react";
import { ToDoItem } from "components/ToDoItem";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ITodoInputProps } from "@/app/page";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import moment from "moment";
import { HOST_URL } from "api/TodoAPI";
import { Header } from "components/Header";

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

  const onSubmit: SubmitHandler<ITodoInputProps> = async (data) => {
    await fetch(`${HOST_URL}/todos/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
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
        <Header />

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
              <InputRightElement w="auto" mr={3} mt="6px">
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
                          <Button
                            variant="ghost"
                            colorScheme="success"
                            aria-label="Select a time"
                            leftIcon={<TimeIcon />}
                            _hover={{
                              backgroundColor: "gray.200",
                              color: "primary.700",
                            }}
                            onClick={() => {
                              timepickerRef.current.setOpen(true);
                            }}
                            children={
                              watch("time")
                                ? moment(watch("time")).format("hh:mm A")
                                : "00:00 am"
                            }
                            w="auto"
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
